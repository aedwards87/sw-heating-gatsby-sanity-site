import React from 'react'
import styled from 'styled-components'


const SWDropletMask = ({ height = '60vh', className, navBarHeight }) => {
  return (
    <StyledDiv navBarHeight={navBarHeight} >
      <StyledSVG height={height} className={className} viewBox="0 0 476 588" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="myClip">
            <path d="M239.588 588C137.587 588 51.9062 532.875 15.1858 447.125C-17.4546 365.458 2.94566 273.583 72.3064 202.125C186.548 87.7917 225.308 44.9167 237.548 0C249.788 46.9583 292.629 89.8333 402.79 202.125C472.151 271.542 494.591 365.458 459.91 447.125C427.27 532.875 341.589 588 239.588 588Z" fill="black" />
          </clipPath>
        </defs>
      </StyledSVG>

      <StyledImage navBarHeight={navBarHeight} src={require("../images/image1.jpg")} alt={'To come'} className="clip-svg"
      // style={{ height: 'auto' }} 
      />

    </StyledDiv>
  )
}

const StyledSVG = styled.svg`

`

const StyledDiv = styled.div`
  
`

const StyledImage = styled.img`
  clip-path: url(#myClip);
  object-fit: cover;
  object-position: center center;
  /* position: relative; */
  /* top: 0; */
  transform: scale(0.9);
  right: -10vw;
  /* height: 100%; */
  position: absolute;
  top: -2vh;

`

export default SWDropletMask
