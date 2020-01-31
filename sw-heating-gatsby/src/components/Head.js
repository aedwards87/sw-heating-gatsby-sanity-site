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
  max-width: 2000px;
  padding: 0 5%;
  height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6%;
  align-items: center;
  h1 {
    font-size: 3.2rem;
    font-weight: var(--bolder);
    margin-bottom: 2.5rem;
  }
  p {
    font-size: 1rem;
  }
  > div:first-of-type {
    grid-column: 1 / span 2;
    margin-bottom: 40px;
    width: 95%;
  }
  > div > a > div:hover button {
    background: transparent;
    color: white;
  }
  > div > a > div {
    transition: all 0.3s ease;
  }
  > div > a > div:hover {
    transform: translate(0, -2px);
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.06), 0 8px 20px 0 rgba(0,0,0,0.15);
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
    object-position: -10px 0;
    height: 100vh;
    width: 100%;
    transform: scale(1.03)
  }
`

const StyledButtonBorder = styled.div`
  padding: 0.2rem;
  border-radius: 10px;
  background: var(--gradient-one);
  display: inline-block;
  margin-top: 1.5rem;
`

const StyledButton = styled.button`
  padding: 2.6vmin 6vmin;
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
