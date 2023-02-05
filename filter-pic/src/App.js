import './App.css';
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import About from './components/About';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StepsToApply from './components/StepsToApply';
import Create from './components/Create';
import Alert from './components/Alert';

function App() {
    const [alert, setAlert]=useState({})
    const [showAlert, setShowAlert]=useState(false)
    return <>
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Hero />
                        <About />
                        <StepsToApply />
                    </>
                }></Route>
                <Route exact path='/create' element={<Create />}></Route>
            </Routes>
            {showAlert && <Alert setShowAlert={setShowAlert} alert={alert} setAlert={setAlert}/>}
            <ContactUs setShowAlert={setShowAlert} setAlert={setAlert} />
            <Footer />
        </Router>

    </>
}

export default App;
