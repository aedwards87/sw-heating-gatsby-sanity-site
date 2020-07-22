import React, { useContext } from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { UserContext, Carousel, GradientButton, MobileCarousel } from './index'
import { HeadFlameBackground } from '../assetsjs/index'
import { SmallScreen, Default } from '../hooks/useMedia'

// import { CarouselSlides } from '../components/Carousel/CarouselSlides'


const Head = ({ sanityLandingPage }) => {
  const navBarHeight = useContext(UserContext)

  return (
    <S.Head navBarHeight={navBarHeight}>
      <div>
        <S.Content>
          <h1>{sanityLandingPage.title}</h1>
          <p>{sanityLandingPage.strapLine}</p>
          <Link to='/#contact'>
            <GradientButton children="Contact us" />
          </Link>
        </S.Content>
        <SmallScreen>
          <MobileCarousel sanityLandingPage={sanityLandingPage} />
        </SmallScreen>
        <Default>
          <HeadFlameBackground navbarheight={navBarHeight} />
          <Carousel
            navbarheight={navBarHeight}
            sanityLandingPage={sanityLandingPage}
          />
        </Default>
      </div>
    </S.Head>
  )
}

const S = {
  Head: styled.header`
    position: relative;
    width: 100%;
    padding-top: 6.5rem;
    /* min-height: calc(100vh - 113px); */
    > div {
      /* almost there */
      width: 100%;
      max-width: 1900px;
      padding: 4% 5% 6%;
      display: grid;

      /* almost there */
      align-items: end;

      grid-gap: 2.7rem;
      transition: height .3s ease;
    }
    img {
      height: 100%;
    }
    @media (max-width: 980px) and (max-height: 1000px) {
      > div {
        min-height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
      }
    }
    /* Default */
    @media (min-width: 980px) {
      /* min-height: ${({ navBarHeight }) => `calc(650px - ${navBarHeight.navBarHeight}px)`}; */
      min-height: 700px;
      /* height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`}; */
      height: 100vh;
      > div {
        grid-template-columns: repeat(4, 1fr);
        min-height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`}; 
        margin: 0 auto;
        width: 100%;
        align-items: center;
        align-content: stretch;
        position: relative;
      }
    }
    
    /* Large screens */
    @media (min-width: 1680px) {
      /* min-height: 800px; */
    }
  `,

  Content: styled.div`
    width: 100%;
    z-index: 1;
    > h1 {
      width: 90%
    }
    > p {
      padding: 0;
      margin-bottom: 2.5rem;
      width: 100%;
    }
   
    
    @media(min-width: 548px) {
      > h1 {
        width: 85%;
      }
      > p {
        width: 70%;
      }
    }

    /* @media (max-width: 630px) {
      > h1 {
        width: 100%;
      }
    }
    @media (max-width: 674px) {
      > h1 {
        width: 75%;
      }
    } */

    @media (min-width: 794px) {
      > h1 {
        width: 64%;
        font-size: 2.6rem;
      }
      > p {
        width: 75%;
      }
    }
    /* Tablet */
    @media (min-width: 980px) {
      /* margin-bottom: 40px; */
      width: 100%;
      grid-column: 1 / span 2;
      > h1 {
        width: 90%
      }
      > div {
        width: 80%;
      }
    }
    /* Mid-tier screens */
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
    /* Laptop */
    @media (min-width: 980px) {
      h1 { 
        font-size: 3.2rem; 
      }
    }
    @media (min-width: 1100px) {
      h1 { font-size: 3.3rem; }
    }
    /* Large screens */
    @media (min-width: 1600px) {
      h1 { font-size: 4rem; }
    }
  `
}

export default Head
