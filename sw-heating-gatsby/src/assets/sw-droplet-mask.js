import React from 'react'
import styled from 'styled-components'


const SWDropletMask = ({ height = '60vh', className, navBarHeight }) => {
  return (
    <StyledSWDropletMaskContainer>
      <StyledMaskContainer>
        
        <svg height={height} className={className} viewBox="0 0 476 588" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="myClip" style={{ fill:'rgb(110, 50, 25)', strokeWidth:14, stroke:'rgb(43, 222, 221)' }}> 
              <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black"/>
            </clipPath>
          </defs> 
        </svg>

        <StyledImage navBarHeight={navBarHeight} src={require("../images/image1.jpg")} alt={'To come'} className="clip-svg"
        // style={{ height: 'auto' }} 
        />
         
      </StyledMaskContainer>
      <SVG height={height} className={className} viewBox="0 0 476 588" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4264 443.301C-6.4996 365.792 12.5404 278.09 79.4318 209.142C136.46 152.067 175.028 112.456 200.862 81.4301C217.778 61.1149 229.517 44.1561 237.482 28.0274C245.835 44.9491 258.302 62.4026 275.827 83.0359C300.917 112.578 337.174 149.53 388.148 201.481C390.615 203.994 393.116 206.543 395.651 209.128L395.684 209.161L395.716 209.193C462.65 276.182 483.556 365.859 450.706 443.216L450.632 443.391L450.565 443.568C419.591 524.939 338.001 578 239.588 578C141.319 578 59.4781 525.028 24.4264 443.301Z" stroke="white" stroke-width="20"/>
      </SVG>
    </StyledSWDropletMaskContainer>
  )
}


const StyledSWDropletMaskContainer = styled.div`
  position: absolute;
  right: 0;
  top: calc(45% - (588px / 2));
  width: 45%;
  overflow: hidden;
`

const StyledMaskContainer = styled.div`
  position: relative;
  /* width: 615px; */
  right: -4vw;
  width: 476px;
  height: 588px;
  display: flex;
  overflow: hidden;
`

const StyledImage = styled.img`
  clip-path: url(#myClip);
  object-fit: cover;
  object-position: 100 100;
  width: 100%;
`

const SVG = styled.svg`
  position: absolute;
  top: 0;
  right: 7vw;
  width: 476px;
  height: 588px;
  /* transform: scale(1.015) */
`

export default SWDropletMask
