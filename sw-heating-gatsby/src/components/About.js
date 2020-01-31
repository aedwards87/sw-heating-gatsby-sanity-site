import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../components-styled/index'
import SWLetters from "../assets/sw-letters";

const About = () => {
  return (
    <StyledAboutContainer>
      <StyledTitle>Who we are?</StyledTitle>
      <StyledContainer>
        <div>
          <p><strong style={{ fontSize: '1.3rem', lineHeight: '1.43' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis.</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis.</p>
        </div>
        <StyledSWLetters />
      </StyledContainer>
    </StyledAboutContainer>
  )
}


const StyledAboutContainer = styled.section`
  max-width: 2000px;
  padding: 7rem 5%;
  position: relative;
  p { 
    width: 85%;
    z-index: 999
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  @media(min-width: 800px) {
    padding-top: 16vw;
  }
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6%;
  > div {
    grid-column: 1 / span 3;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const StyledSWLetters = styled(SWLetters)`
  position: absolute;
  height: 30vmax;
  top: 5vw;
  right: 0;
  opacity: 20%;
  index: -1;
  @media(max-width: 850px) {
    display: none;
  }
`

export default About
