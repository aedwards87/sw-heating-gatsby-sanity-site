import React, { useContext } from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { UserContext, Carousel, GradientButton } from './index'
import { HeadFlameBackground } from '../assetsjs/index'
import { scrollToElement, scrollToParent, getOffSetTopValue } from '../helpers/scrollTo'


const Head = ({ sanityLandingPage }) => {
  const navBarHeight = useContext(UserContext)

  return (
    <StyledHeadContainer navBarHeight={navBarHeight}>
      <div>
        <StyledContent>
          <h1>{sanityLandingPage.title}</h1>
          <p>{sanityLandingPage.strapLine}</p>
          <Link to='/#Contact'>
            <GradientButton children="Contact us"
              // onClick={(() =>
              //   getOffSetTopValue('Contact') < 400 ?
              //   scrollToParent('Contact') : scrollToElement('Contact')
              // )} 
            />
          </Link>
        </StyledContent>

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
    }
  }


`


const StyledContent = styled.div`
  margin-bottom: 40px;
  width: 75%;
  z-index: 1;
  h1 {
    font-size: 2.8rem;
    font-weight: var(--boldest);
    margin-bottom: 5vh;
    transition: font-size 0.5s ease;
  }
  p {
    font-size: 1.11rem;
    padding: 0;
    margin-bottom: 5vh;
    width: 80%;
    line-height: 1.8rem;
  }
  /* Tablet */
  @media (min-width: 770px) {
      width: 100%;
      grid-column: 1 / span 2;
  }
  @media (min-width: 1300px) {
    :first-of-type {
      width: 110%;
    }
  }
  @media (min-width: 1500px) {
      width: 110%;
  }
  /* Large screens */
  @media (min-width: 1600px) {
      width: 120%;
  }
  @media (min-width: 1800px) {
      width: 100%;
  }



  @media (min-width: 980px) {
    h1 { font-size: 3.2rem; }
  }
  @media (min-width: 1100px) {
    h1 { font-size: 3.6rem; }
  }
  /* Large screens */
  @media (min-width: 1400px) {
    h1 {
      font-size: 4.6rem;
    }
  }
`



export default Head
