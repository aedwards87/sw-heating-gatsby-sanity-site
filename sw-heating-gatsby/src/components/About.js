import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../components-styled/index'
import SWLettersSVG from "../assets/sw-letters.svg";

const About = ( /* allSanityAboutUs */ ) => {
  return (
    <>
      <StyledAboutContainer>
        <div>
          <StyledTitle>Who we are?</StyledTitle>
          <StyledContainer>
            <div>
              <p>
                <strong style={{ fontSize: '1.3rem', lineHeight: '1.43' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis.</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi quis.
              </p>
            </div>
          </StyledContainer>
        </div>
        <StyledSWLettersSVG />
      </StyledAboutContainer>
    </>
  )
}


const StyledAboutContainer = styled.section`
  position: relative;
  > div {
    max-width: 1900px;
    margin: 0 auto;
    padding: 7rem 5%;
  }
  p { 
    width: 100%;
    z-index: 999;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  @media(min-width: 800px) {
    padding-top: 11vw;
    p { 
      width: 85%;
      z-index: 999;
    }
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

const StyledSWLettersSVG = styled(SWLettersSVG)`
  position: absolute;
  height: 30vmax;
  /* max-height: 700px; */
  top: 5vw;
  right: 0;
  opacity: 20%;
  z-index: -1;
  @media(max-width: 850px) {
    display: none;
  }
`

export default About
