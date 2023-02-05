import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroImg from './image/p1.jpg'

const Hero = () => {
  const navigate = useNavigate()
  const openCreate = () => {
    navigate('/create')
    setTimeout(() => document.getElementById('create').scrollIntoView())
  }
  return (
    <div className='hero'>
      <div className="hero-center">
        <div className="hero-info">
          <h1 className='hero-heading'>Create Amazing Photo Effects</h1>
          <p>Our photo filters will turn an ordinary photo into an extraordinary photo.</p>
          <button className="create" onClick={openCreate}>Create</button>
        </div>
        <div className="hero-img" style={{ backgroundImage: `url(${heroImg})` }}>
        </div>
      </div>
    </div>
  )
}

export default Hero
