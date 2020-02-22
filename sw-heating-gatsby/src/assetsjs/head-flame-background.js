import React from 'react'
import styled from 'styled-components'

const HeadFlameBackground = ({ height, className, navbarheight }) => {
  return (
    <StyledContainer navbarheight={navbarheight} >
      <StyledHeadFlameBackgroundSVG height={height} className={className} viewBox="0 0 1371 1235" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M539.131 0C539.131 0 123.731 156.3 170.831 478.3C170.831 478.3 143.731 436.2 86.0313 423.5C86.0313 423.5 151.431 568.7 35.6313 732.7C-119.869 956.2 226.131 1457.3 1220.83 1122.9C1275.03 1104.7 1324.83 1082.9 1370.73 1058.1V0H539.131Z" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(422.5 -49) rotate(28.2302) scale(1346.68)">
            <stop offset="0.16" stopColor="#FDC500" />
            <stop offset="0.2691" stopColor="#FAB102" />
            <stop offset="0.4096" stopColor="#F37E07" />
            <stop offset="0.5517" stopColor="#E82C0F" />
            <stop offset="0.579" stopColor="#E61A11" />
            <stop offset="0.6128" stopColor="#E40B12" />
            <stop offset="0.6402" stopColor="#E30613" />
            <stop offset="0.677" stopColor="#DB0817" />
            <stop offset="0.7349" stopColor="#C40C23" />
            <stop offset="0.7375" stopColor="#C30C24" />
            <stop offset="0.8745" stopColor="#741D4E" />
            <stop offset="1" stopColor="#312A71" />
          </radialGradient>
        </defs>
      </StyledHeadFlameBackgroundSVG>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: absolute;
  top: -${({ navbarheight }) => navbarheight.navBarHeight}px;
  right: 0;
  height: auto;
  width: 55%;
  overflow: hidden;
`

const StyledHeadFlameBackgroundSVG = styled.svg`
  position: relative;
  right: -2vw;
  top: -100px;
  height: 130vh;
  min-height: 850px;
  transition: min-height 0.5s ease;
  @media (min-width: 1680px) {
    min-height: 1180px;
    height: 120vh;
    transition: min-height 0.5s ease;
  }
  @media (min-height: 980px) {
    height: 125vh;
    /* transition: all 0.3s ease; */
  }
  @media (min-height: 1100px) {
    height: 120vh;
    /* transition: all 0.3s ease; */
  }
`





export default HeadFlameBackground
