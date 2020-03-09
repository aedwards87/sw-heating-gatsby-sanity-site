import React from 'react'
import { animated } from 'react-spring'
import Image from 'gatsby-image'


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