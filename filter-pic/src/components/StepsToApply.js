import React from 'react'
import { stepsData } from './stepsData'

const StepsToApply = () => {
    return (
        <div className='steps-container'>
            <h1>How to Apply Filtry's Online Photo Effects</h1>
            <p>Elevate your photo editing with just one click.</p>
            <div className='items-container'>
                {stepsData.map((item, index) => {
                    return <div className="item" key={index}>
                        <div className="item-img">{item.image}</div>
                        <div className="item-text">
                            <h3 className="item-heading">{item.label}</h3>
                            <p className="item-detail">{item.detail}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default StepsToApply
