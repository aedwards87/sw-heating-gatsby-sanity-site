import React from 'react'

const SWDroplet  = ({ height = 80, className }) => {
  return ( 
    <svg height={height} className={className} viewBox="0 0 229 296" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M114.519 0.803711C104.84 25.9682 83.5472 64.6827 35.1541 113.076C1.27888 147.919 -8.39975 189.537 8.05392 229.219C25.4755 269.87 67.0936 296.002 114.519 296.002C161.944 296.002 203.562 269.87 220.984 229.219C237.437 190.505 227.759 147.919 193.884 113.076C145.49 64.6827 124.197 25.0003 114.519 0.803711Z" fill="url(#paint0_linear)"/>
      <defs>
      <linearGradient id="paint0_linear" x1="34.073" y1="15.2268" x2="191.371" y2="358.951" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B2D9F4"/>
      <stop offset="0.8714" stop-color="#00ABE7"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default SWDroplet
