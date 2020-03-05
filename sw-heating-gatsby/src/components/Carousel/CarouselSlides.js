import React from 'react'
import { CarouselDroplet } from '../../assetsjs/index'
import { animated } from 'react-spring'
import Image from 'gatsby-image'


export const CarouselSlides = [
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.mainImage.asset.fluid.src}
      alt={sanityLandingPage.mainImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.secondImage.asset.fluid.src}
      alt={sanityLandingPage.secondImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.thirdImage.asset.fluid.src}
      alt={sanityLandingPage.thirdImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.fourthImage.asset.fluid.src}
      alt={sanityLandingPage.fourthImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.fifthImage.asset.fluid.src}
      alt={sanityLandingPage.fifthImageAltTag}
    />
  )
]


const AnimImage = animated(Image)


export const slidev2 = [
  ({ style, sanityLandingPage }) => (
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.mainImage.asset.fluid}
        alt={sanityLandingPage.mainImageAltTag}
      />
    
  ),
  ({ style, sanityLandingPage }) => (
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.secondImage.asset.fluid}
        alt={sanityLandingPage.secondImageAltTag}
      />
  ),
  ({ style, sanityLandingPage }) => (
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.thirdImage.asset.fluid}
        alt={sanityLandingPage.thirdImageAltTag}
      />
  ),
  ({ style, sanityLandingPage }) => (
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.fourthImage.asset.fluid}
        alt={sanityLandingPage.fourthImageAltTag}
      />
  ),
  ({ style, sanityLandingPage }) => (
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.fifthImage.asset.fluid}
        alt={sanityLandingPage.fifthImageAltTag}
      />
  )
]