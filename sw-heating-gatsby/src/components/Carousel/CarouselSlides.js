import React from 'react'
import { CarouselDroplet } from '../../assetsjs/index'


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