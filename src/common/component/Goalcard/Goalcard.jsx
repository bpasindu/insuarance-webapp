import React from 'react'
import "./Goalcard.css"

export default function Goalcard({ img,text }) {
  return (
    <div className='goalcard'>
        <img src={img} alt="goalcard image" className="goalcard-img"/>
        <h1 className="goalcard-text">{text}</h1>
    </div>
  )
}
