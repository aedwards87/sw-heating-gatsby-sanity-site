import React, { useContext } from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { UserContext } from './index'
import { StyledMainImageContainer } from '../components-styled/index'
import { HeadFlameBackground, SWDropletMask } from '../assets/index'


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
        {/* 
        <StyledMainImageContainer navBarHeight={navBarHeight}>
          <img src={require("../assets/head-flame.svg")} alt={'To come'} />
        </StyledMainImageContainer> */}

        <HeadFlameBackground navBarHeight={navBarHeight} />
        <SWDropletMask navBarHeight={navBarHeight} />
      </div>
    </StyledHeadContainer>
  )
}


const StyledHeadContainer = styled.header`
  position: relative;
  width: 100%;
  /* min-height: ${({ navBarHeight }) => `calc(650px - ${navBarHeight.navBarHeight}px)`}; */
  min-height: ${({ navBarHeight }) => `calc(650px - ${navBarHeight.navBarHeight}px)`};
  height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
  @media (min-width: 1680px) {
    min-height: 800px;
  }
  > div {
    max-width: 1900px;
    height: 70%;
    padding: 0 5%;
    display: grid;
    width: 80%;
    grid-gap: 6%;
    align-items: center;
    transition: height .3s ease;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: var(--boldest);
    margin-bottom: 5vmin;
    transition: font-size 0.5s ease;
  }
  p {
    font-size: 1rem;
    padding: 0;
    margin-bottom: 6vmin;
  }
  img {
    height: 100%;
  }
  > div > div:first-of-type {
    grid-column: 1 / span 2;
    margin-bottom: 40px;
    width: 75%;
    z-index: 1;
  }
  /* Tablet */
  @media (min-width: 770px) {
    > div {
      grid-template-columns: repeat(4, 1fr);
      height: 100%;
      margin: 0 auto;
      width: 100%;
      > div:first-of-type {
        width: 100%;
      }
    };
  }

  @media (min-width: 980px) {
    h1 { font-size: 3.2rem; }
  }
  @media (min-width: 1100px) {
    h1 { font-size: 3.3rem; }
  }

  @media (min-width: 1300px) {
    > div > div:first-of-type {
      width: 110%;
    }
  }
  @media (min-width: 1500px) {
    > div > div:first-of-type {
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
  height: var(--head-gradient-height);
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--gradient-one);
  mix-blend-mode: multiply;
  ::after {
    content: "";
    height: var(--head-gradient-height);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--gradient-four);
  }
  ::before {
    content: "";
    height: var(--head-gradient-height);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--gradient-five);
  }
`



const StyledButtonBorder = styled.div`
  padding: 0.22rem;
  border-radius: 10px;
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
  padding: 1rem 2rem;
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
  @media (min-width: 1100px) {
    padding: 1rem 2.2rem;
    font-size: 1.2rem;
  }
`




export default Head
