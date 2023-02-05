import React from "react";
import { useContext } from "react";
import { useState } from "react";

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const openSideBar = () => {
        setIsSideBarOpen(true)
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false)
    }

    const showAbout = () => {
        const aboutContainer = document.getElementById('aboutContainer')
        window.scrollTo({
            behavior: 'smooth',
            top: aboutContainer.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 50,
        })
        setIsSideBarOpen(false)
    }

    const showContact = () => {
        const contactContainer = document.getElementById('contact-container')
        window.scrollTo({
            behavior: 'smooth',
            top: contactContainer.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 50,
        })
        setIsSideBarOpen(false)
    }


    return (
        <AppContext.Provider value={{
            isSideBarOpen,
            openSideBar,
            closeSideBar,
            showAbout,
            showContact
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}