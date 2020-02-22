import React, { useContext } from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { UserContext, Carousel, GradientButton } from './index'
import { HeadFlameBackground } from '../assetsjs/index'


const Head = ({ sanityLandingPage }) => {
  const navBarHeight = useContext(UserContext)

  return (
    <StyledHeadContainer navBarHeight={navBarHeight}>
      <div>
        <div>
          <h1>{sanityLandingPage.title}</h1>
          <p>{sanityLandingPage.strapLine}</p>
          {console.log(navBarHeight)}
          <Link to='/'>
            <GradientButton children="Contact us" />
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

        <HeadFlameBackground navbarheight={navBarHeight} />
        <Carousel navbarheight={navBarHeight} />
      </div>
    </StyledHeadContainer>
  )
}


const StyledHeadContainer = styled.header`
  position: relative;
  width: 100%;
  min-height: ${({ navBarHeight }) => `calc(650px - ${navBarHeight.navBarHeight}px)`};
  height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
  @media (min-width: 1680px) {
    min-height: 800px;
  }
  > div {
    max-width: 1900px;
    height: 100%;
    padding: 0 5%;
    display: grid;
    width: 80%;
    grid-gap: 6%;
    align-items: center;
    transition: height .3s ease;
    > div:first-of-type {
      margin-bottom: 40px;
      width: 75%;
      z-index: 1;
    }
  }
  h1 {
    font-size: 2.8rem;
    font-weight: var(--boldest);
    margin-bottom: 2.5rem;
    transition: font-size 0.5s ease;
  }
  p {
    font-size: 1rem;
    padding: 0;
    margin-bottom: 2.5rem;
  }
  img {
    height: 100%;
  }
  /* Tablet */
  @media (min-width: 770px) {
    > div {
      grid-template-columns: repeat(4, 1fr);
      margin: 0 auto;
      width: 100%;
      > div:first-of-type {
        width: 100%;
        grid-column: 1 / span 2;
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



export default Head
