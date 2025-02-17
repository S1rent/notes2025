import React from 'react'
import Wave from 'react-wavify'

const Footer = () => {
  return (
    <Wave fill="url(#gradient)" style={{ height: 192 }}>
        <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%"  stopColor="#923cb5" />
            <stop offset="90%" stopColor="#000" />
        </linearGradient>
        </defs>
    </Wave>
  )
}

export default Footer