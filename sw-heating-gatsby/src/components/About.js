import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../components-styled/index'


const About = () => {
  return (
    <StyledAboutContainer>
      <StyledTitle>Who we are?</StyledTitle>
      <div>
        <p><strong style={{ fontSize: '1.3rem', lineHeight: '1.43' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis.</strong></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis.</p>
      </div>
    </StyledAboutContainer>
  )
}


const StyledAboutContainer = styled.section`
  position: relative;
  p { 
    width: 85%;
    /* background: white; */
    z-index: 999
  }
`

export default About
