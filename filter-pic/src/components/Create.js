import React, { useState, useRef } from 'react';
import ImageFilter from './ImageFilter';
import domtoimage from 'dom-to-image'
import { imageData } from './imageData'

const Create = () => {
  const [image, setImage] = useState(null);
  const fileInput = useRef(null);
  const imageRef = useRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const takeScreenshot = async () => {
    const element = document.getElementById('image-filter')
    const imgData = await domtoimage.toPng(element);
    const link = document.createElement('a');
    link.download = 'styled-image.png';
    link.href = imgData;
    link.click();
  };

  return (
    <>
      <div className='create-container' id='create'>
        <div className="create-box">
          <div className="img-panel">
            {image?<img id='image-filter' src={image} alt="uploaded" ref={imageRef} />:"Please choose an image to proceed!"}
          </div>
        </div>
        <div className="btn-panel">
          <button onClick={handleClick}>Choose Image</button>
          <input
            type="file"
            ref={fileInput} accept="image/*"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          {image && <>
            <button onClick={takeScreenshot} >Download</button></>}
        </div>
        <div className="filter-panel">
          {image && <ImageFilter />}
        </div>
      </div>
      <div className="imageInfiniteScroll">
        {imageData.map((imag)=>{
          return <div key={imag.id} className="infiImg" style={{backgroundImage: `url(${imag.imageUrl})`}}></div>
        })}
        <p className="line">Take your picture to next level</p>
      </div>
    </>
  );
}

export default Create
