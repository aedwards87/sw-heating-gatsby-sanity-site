import React from 'react'
import styled from 'styled-components'

const Instagram = ({ height = 35, className }) => {
  return (
    <S.Instagram id="Layer_1" height={height} className={className} viewBox="0 0 641.59 640.26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="radial-gradient" cx="225.28" cy="664.49" r="646.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffd776" />
          <stop offset="0.25" stopColor="#f3a554" />
          <stop offset="0.38" stopColor="#f15c3c" />
          <stop offset="0.7" stopColor="#c32f87" />
          <stop offset="0.95" stopColor="#6765ae" />
          <stop offset="0.99" stopColor="#5c6cb3" /></radialGradient>
      </defs>
      <path className="cls-1" d="M680.4,525.81c0,77.47-62.5,140.27-139.59,140.27H178.4c-77.09,0-139.59-62.8-139.59-140.27V166.07c0-77.46,62.5-140.26,139.59-140.26H540.81c77.09,0,139.59,62.8,139.59,140.26Z" transform="translate(-38.81 -25.81)" />
      <rect className="cls-2" x="105.4" y="98.96" width="430.78" height="443.68" rx="119.22" />
      <path className="cls-3" d="M465.36,345.94C464.09,404.34,418,451.7,359.6,451.7A105.76,105.76,0,0,1,253.84,345.94c0-58.41,47.38-107.46,105.76-105.76C430.72,242.26,466.64,287.74,465.36,345.94Z" transform="translate(-38.81 -25.81)" />
      <circle className="cls-4" cx="451.06" cy="189.36" r="29.66" />
    </S.Instagram>
  )
}

const S = {
  Instagram: styled.svg`
    .cls-1{fill:url(#radial-gradient);}
    .cls-2,
    .cls-3{fill:none;stroke:#fff;stroke-miterlimit:10;}
    .cls-2{stroke-width:35.07px;}
    .cls-3{stroke-width:42.86px;}
    .cls-4{fill:#fff;}
    @media(min-width: 450px) {
      height: 45px;
    }
  `
}

export default Instagram
