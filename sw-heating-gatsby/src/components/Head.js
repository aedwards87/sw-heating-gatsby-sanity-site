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
        <img src={require("../images/pico2.png")} alt={/* {sanityLandingPage.blah} */ 'To come'} />
      </StyledMainImageContainer>

    </StyledHeadContainer>
  )
}


const StyledHeadContainer = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 5%;
  height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6%;
  align-items: center;
  h1 {
    font-size: 3.8rem;
    font-weight: var(--bolder);
    margin-bottom: 2.5rem;
    transition: font-size 0.3s ease;
  }
  p {
    font-size: 1rem;
  }
  > div:first-of-type {
    grid-column: 1 / span 2;
    margin-bottom: 40px;
    width: 100%;
  }
  @media (min-width: 1700px) {
    h1 {
      font-size: 4.4rem;
    }
    > div:first-of-type {
      width: 125%;
    }

  @media (min-width: 1550px) {
    > div:first-of-type {
      width: 100%;
    }
  }
  /* @media (min-width: 1300px) {
    > div:first-of-type {
      width: 125%;
    }
  } */
  @media (min-width: 1280px) {
    > div:first-of-type {
      width: 120%;
    }
  }
`

const StyledMainImageContainer = styled.header`
  position: absolute;
  top: -${({ navBarHeight }) => navBarHeight.navBarHeight}px;
  /* top: -118.6px; */
  right: 0;
  height: 100vh;
  width: 61%;
  z-index: -1;
  overflow: hidden;
  img {
    position: absolute;
    /* left: 3%; */
    object-fit: cover;
    /* object-position: 70% 50%; */
    object-position: 5vw 0;
    height: 100vh;
    width: 100%;
    transform: scale(1.03);
    transition: object-position 1s ease;
  }
  @media (min-width: 1280px) {
    img {
      object-position: 7vw 0;
    }
  }
`

const StyledButtonBorder = styled.div`
  padding: 0.2rem;
  border-radius: 10px;
  background: var(--gradient-one);
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  :hover button {
    background: transparent;
    color: white;
  }
  :hover {
    transform: translate(0, -2px);
    box-shadow: 0 5px 12px 0 rgba(49, 42, 113,0.08), 
                  0 12px 30px 0 rgba(49, 42, 113,0.2),
                  0 22px 60px 0 rgba(49, 42, 113,0.25);
  }
`

const StyledButton = styled.button`
  padding: 1.3rem 2.8rem;
  color: white;
  background: white;
  color: var(--main-text);
  font-weight: var(--bolder);
  font-size: 1.2rem;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.1px;
`




export default Head
