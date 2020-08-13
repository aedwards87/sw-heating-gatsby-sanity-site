import React from 'react'
import { CarouselDroplet } from '../../assetsjs/index'


export const CarouselSlides = [
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.mainImage.asset.fluid}
      alt={sanityLandingPage.mainImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.secondImage.asset.fluid}
      alt={sanityLandingPage.secondImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.thirdImage.asset.fluid}
      alt={sanityLandingPage.thirdImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.fourthImage.asset.fluid}
      alt={sanityLandingPage.fourthImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <CarouselDroplet
      style={style}
      click={click}
      imageSRC={sanityLandingPage.fifthImage.asset.fluid}
      alt={sanityLandingPage.fifthImageAltTag}
    />
  )
]

