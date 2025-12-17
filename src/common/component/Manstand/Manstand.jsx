import React from 'react'

export default function Manstand({imgman,width,top,left }) {
  return (
    <div>
      <img src={imgman} alt="Manstanding" style={{position: "absolute", width: width, top: top, left: left }} />     
    </div>
  )
}
