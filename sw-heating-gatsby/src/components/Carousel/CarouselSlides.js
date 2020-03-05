import React from 'react'
import { CarouselDroplet } from '../../assetsjs/index'
import { animated } from 'react-spring'


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





export const slidev2 = [
  ({ style, click, sanityLandingPage }) => (
    <animated.img
      style={style}
      onClick={click}
      src={sanityLandingPage.mainImage.asset.fluid.src}
      alt={sanityLandingPage.mainImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.img
      style={style}
      onClick={click}
      src={sanityLandingPage.secondImage.asset.fluid.src}
      alt={sanityLandingPage.secondImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.img
      style={style}
      onClick={click}
      src={sanityLandingPage.thirdImage.asset.fluid.src}
      alt={sanityLandingPage.thirdImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.img
      style={style}
      onClick={click}
      src={sanityLandingPage.fourthImage.asset.fluid.src}
      alt={sanityLandingPage.fourthImageAltTag}
    />
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.img
      style={style}
      onClick={click}
      src={sanityLandingPage.fifthImage.asset.fluid.src}
      alt={sanityLandingPage.fifthImageAltTag}
    />
  )
]