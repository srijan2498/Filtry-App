import React from 'react'
import './style.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from './context';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { openSideBar, showAbout, showContact } = useGlobalContext()
    const navigate = useNavigate()
    const goToAbout = () => {
        navigate('/')
        setTimeout(() => showAbout())
    }
    const openCreate = () => {
        navigate('/create')
        setTimeout(() => document.getElementById('create').scrollIntoView())
    }
    return (
        <nav className='nav-sticky' id='nav-sticky'>
            <div className="logo">Filtry</div>
            <ul className='navList'>
                <li onClick={openCreate}>Create</li>
                <li onClick={goToAbout}>About</li>
                <li onClick={showContact}>Contact</li>
            </ul>
            <button className='hamBtn' onClick={openSideBar}><GiHamburgerMenu /></button>
        </nav>
    )
}

export default Navbar
