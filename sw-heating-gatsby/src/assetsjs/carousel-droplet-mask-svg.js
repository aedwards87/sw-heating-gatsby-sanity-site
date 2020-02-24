import React from 'react'
import styled from 'styled-components'
// import image1 from '../images/image1.jpg'

const CarouselDropletMaskSVG = ({ height = '80vh', click, imageURI }) => {
  return (
    <>
      <S.CarouselDropletMaskSVG height={height} viewBox="0 0 476 588" fill="none">
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
        <S.Image /*xlinkHref*/ href={imageURI} alt={'To come'} preserveAspectRatio />
      </S.CarouselDropletMaskSVG>
      <S.CarouselDropletBorderSVG onClick={click} height={height} viewBox="0 0 476 588" fill="none">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" strokeWidth="20" />
      </S.CarouselDropletBorderSVG>
    </>
  )
}

const S = {
  CarouselDropletMaskSVG: styled.svg`
    position: relative;
    min-height: 550px;
    filter: drop-shadow(40px 55px 40px rgba(0, 0, 0, .7));
    transition: min-height 0.5s ease;
    @media (min-height: 680px) and (max-width: 1678px),
    (min-height: 930px) and (min-width: 1678px) {
      top: 45%;
      transform: translateY(-55%);
    }
    @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
    }
  `,

  Image: styled.image`
    clip-path: url(#myClip);
    height: 118%; 
    /* Temporary solution for the height, but need to fix it so no matter what size
    the image it will also fill the visible area within the SVG */
  `,

  CarouselDropletBorderSVG: styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.013);
    min-height: 550px;
    transition: min-height 0.5s ease;
    cursor: pointer;
    @media (min-height: 680px) and (max-width: 1678px),
    (min-height: 930px) and (min-width: 1678px) {
      top: 45%;
      transform: translateY(-55%) scale(1.013);
    }
    @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
    }
  `
}

export default CarouselDropletMaskSVG
