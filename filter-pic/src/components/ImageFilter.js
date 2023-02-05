import React, { useState } from 'react';

const ImageFilter = () => {
    const [filter, setFilter] = useState("")
    const [showRange, setShowRange] = useState(false)
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const [value, setValue] = useState()
    const handleFilterChange = (e) => {
        document.getElementById("image-filter").style.filter = "none"
        setFilter(e.target.value)
        setShowRange(true)
        if (showRange) {
            if (e.target.value === "brightness" || e.target.value === "contrast" || e.target.value === "saturate") {
                setMin(0)
                setMax(200)
                setValue(100)
            }
            if (e.target.value === "grayscale" || e.target.value === "invert" || e.target.value === "sepia") {
                setMin(0)
                setMax(100)
                setValue(0)
            }
            if (e.target.value === "blur") {
                setMin(0)
                setMax(100)
                setValue(0)
            }
            if (e.target.value === "hue-rotate") {
                setMin(0)
                setMax(100)
                setValue(0)
            }
        }

    }
    const handlePercentChange = (e) => {
        setValue(e.target.value)
        const imageFilter = document.getElementById("image-filter")
        if(filter==="blur"){
            imageFilter.style.filter = filter + "(" + e.target.value + "px)"
        }
        if(filter==="hue-rotate"){
            imageFilter.style.filter = filter + "(" + e.target.value + "deg)"
        }
        else{
            imageFilter.style.filter = filter + "(" + e.target.value + "%)"
        }
    }

    return (
        <div className="filter-container">
            {showRange && <div className="filter-slider-container">
                <input type="range" min={min} max={max} name="percent" id="range" value={value} onChange={handlePercentChange} />
            </div>}
            <div className='filter-btns-div'>
                <button className="filter-btn" onClick={handleFilterChange} value="grayscale">B&W</button>
                <button className="filter-btn" onClick={handleFilterChange} value="sepia">Sepia</button>
                <button className="filter-btn" onClick={handleFilterChange} value="saturate">Saturate</button>
                <button className="filter-btn" onClick={handleFilterChange} value="hue-rotate">Hue</button>
                <button className="filter-btn" onClick={handleFilterChange} value="invert">Invert</button>
                <button className="filter-btn" onClick={handleFilterChange} value="blur">Blur</button>
                <button className="filter-btn" onClick={handleFilterChange} value="brightness">Brightness</button>
                <button className="filter-btn" onClick={handleFilterChange} value="contrast">Contrast</button>
            </div>
        </div>
    );
}

export default ImageFilter;
