import React, { useContext } from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { UserContext, Carousel, GradientButton } from './index'
import { HeadFlameBackground } from '../assetsjs/index'
import { CarouselSlides } from '../components/Carousel/CarouselSlides'


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
        <HeadFlameBackground navbarheight={navBarHeight} />
        {/* Maybe do a conditional to show different carousel components on media query */}
        {/* {Media > 980px ? (
          <HeadFlameBackground navbarheight={navBarHeight} />
          <Carousel navbarheight={navBarHeight} sanityLandingPage={sanityLandingPage} />
          :
          <div className="head-background">
            <MobileCarousel sanityLandingPage={sanityLandingPage} />
          </div>
        )} */}
        {console.log(CarouselSlides)}
        <Carousel navbarheight={navBarHeight} sanityLandingPage={sanityLandingPage} />
      </div>
    </S.Head>
  )
}

const S = {
  Head: styled.header`
    position: relative;
    width: 100%;
    min-height: ${({ navBarHeight }) => `calc(650px - ${navBarHeight.navBarHeight}px)`};
    height: ${({ navBarHeight }) => `calc(100vh - ${navBarHeight.navBarHeight}px)`};
    > div {
      height: 100%;
      width: 80%;
      max-width: 1900px;
      padding: 0 5%;
      display: grid;
      align-items: center;
      grid-gap: 6%;
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
    /* Large screens */
    @media (min-width: 1680px) {
      min-height: 800px;
    }
  `,
  Content: styled.div`
    margin-bottom: 40px;
    width: 75%;
    z-index: 1;
    > p {
      /* font-size: 1.11rem; */
      padding: 0;
      margin-bottom: 5vh;
      width: 80%;
      /* line-height: 1.8rem; */
    }
    /* Tablet */
    @media (min-width: 770px) {
      width: 100%;
      grid-column: 1 / span 2;
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
    /* @media (max-width: 980px) {
      ${HeadFlameBackground} {
        display: none;
      }
    } */
    @media (min-width: 1100px) {
      h1 { font-size: 3.3rem; }
    }
    /* Large screens */
    @media (min-width: 1600px) {
      h1 { font-size: 4.4rem; }
    }
  `
}

export default Head
