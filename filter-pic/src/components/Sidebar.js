import React from 'react'
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar, showAbout, showContact } = useGlobalContext()
  const navigate = useNavigate()
  const goToAbout = () => {
    navigate('/')
    setTimeout(() => showAbout())
  }
  const openCreate = () => {
    closeSideBar()
    navigate('/create')
    setTimeout(() => document.getElementById('create').scrollIntoView())
  }
  return <>
    {isSideBarOpen && < div className="overlay" >
      <div className='sidebar'>
        <button className='closeBtn' onClick={closeSideBar}><IoMdClose /></button>
        <ul className="sidebarList">
          <li onClick={openCreate}>Create</li>
          <li onClick={goToAbout}>About</li>
          <li onClick={showContact}>Contact</li>
        </ul>
      </div>
    </ div>}
  </>
}

export default Sidebar
