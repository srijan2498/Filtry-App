import React from 'react'
import aboutImg from './image/a1.jpg'

const About = () => {
  return (
    <div className='container' id='aboutContainer'>
      <div className="about-img">
        <img src={aboutImg} className="colorful-img" alt="" />
        <img src={aboutImg} className="grey-img" alt="" />
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p className="about-para">
          Filtry's Photo Editor is one of the best photo editor's to offer online photo effects and filters. We've a huge library of filters extensively, empowering you to achieve your creative vision. We have a wide selection of features that'll take you from photo to art, filters to fit a certain aesthetic.
        </p>
      </div>
    </div>
  )
}

export default About
