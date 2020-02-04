import React, { useContext } from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { UserContext } from './index'


const Head = ({ sanityLandingPage }) => {
  const navBarHeight = useContext(UserContext)

  return (
    <StyledHeadContainer navBarHeight={navBarHeight}>
      <div>
      <div>
        <h1>
          {sanityLandingPage.title}
        </h1>
        <p>
          {sanityLandingPage.strapLine}
        </p>
        <Link to='/'>
          <StyledButtonBorder>
            <StyledButton>Contact us</StyledButton>
          </StyledButtonBorder>
        </Link>
      </div>

      {/* <Image 
        style={{
          position: 'absolute',
          top: -125, 
          right: 0, 
          width: '47%', 
          gridColumn: '3 / span 2',
          height: '100vh',
          zIndex: -1,
        }} 
        fluid={sanityLandingPage.thirdImage.asset.fluid}
        alt={sanityLandingPage.title} 
       /> */}

      <StyledMainImageContainer navBarHeight={navBarHeight}>
        <img src={require("../images/Flame-image-3.png")} alt={/* {sanityLandingPage.blah} */ 'To come'} />
      </StyledMainImageContainer>
      <StyledDiv />
      </div>
    </StyledHeadContainer>
  )
}



const StyledHeadContainer = styled.header`
  position: relative;
  width: 100%;
  height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
  > div {
    max-width: 1900px;
    height: 97%;
    margin: 0 auto;
    padding: 0 5%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 6%;
    align-items: center;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: var(--boldest);
    margin-bottom: 5vmin;
    transition: font-size 0.5s ease;
  }
  p {
    font-size: 1rem;
    padding: 0;
    margin-bottom: 6vmin;
  }
  > div > div:first-of-type {
    grid-column: 1 / span 2;
    margin-bottom: 40px;
    width: 100%;
  }
  /* Tablet */
  @media (min-width: 770px) {
    > div {grid-template-columns: repeat(4, 1fr)};
  }

  @media (min-width: 980px) {
    h1 { font-size: 3.2rem; }
  }
  @media (min-width: 1100px) {
    h1 { font-size: 3.6rem; }
  }

  @media (min-width: 1300px) {
    > div > div:first-of-type {
      width: 120%;
    }
  }
  @media (min-width: 1550px) {
    >  div > div:first-of-type {
      width: 110%;
    }
  }
  /* Large screens */
  @media (min-width: 1600px) {
    h1 {
      font-size: 4.4rem;
    }
    > div > div:first-of-type {
      width: 120%;
    }
  }
  @media (min-width: 1800px) {
    > div > div:first-of-type {
      width: 100%;
    }
  }
`

const StyledDiv = styled.div`
  position: absolute;
  height: 10vh;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
`

const StyledMainImageContainer = styled.div`
  position: absolute;
  top: -${({ navBarHeight }) => navBarHeight.navBarHeight}px;
  /* top: -118.6px; */
  right: 0;
  height: 100vh;
  width: 61%;
  z-index: -1;
  overflow: hidden;
  img {
    display: none;
  }
  @media (min-width: 768px) {
    img {
      display: block;
      position: absolute;
      /* left: 3%; */
      object-fit: cover;
      /* object-position: 70% 50%; */
      object-position: 2vw 50%;
      height: 100vh;
      width: 100%;
      transform: scale(1.03);
      transition: object-position 1s ease;
      opacity: 100%;
    }
  }
  @media (min-width: 1280px) {
    img {
      object-position: 8vw 50%;
    }
  }
  @media (min-width: 1600px) {
    img {
      object-position: 6vw 50%;
    }
  }
`

const StyledButtonBorder = styled.div`
  padding: 0.22rem;
  border-radius: 16px;
  background: var(--gradient-one);
  display: inline-block;
  transition: all 0.3s ease;
  :hover button {
    background: transparent;
    color: white;
  }
  :hover {
    transform: translate(0, -2px);
    box-shadow: var(--shadow-one)
  }
`

const StyledButton = styled.button`
  padding: 1rem 2.3rem;
  color: white;
  background: white;
  color: var(--main-text);
  font-weight: var(--boldest);
  font-size: 1.2rem;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.1px;
  @media (min-width: 1100px) {
    padding: 1.15rem 2.5rem;
    font-size: 1.2rem;
  }
`




export default Head
