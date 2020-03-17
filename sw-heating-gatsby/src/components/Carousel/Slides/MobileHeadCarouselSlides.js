import React from 'react'
import Image from 'gatsby-image'
import { animated } from 'react-spring'

const AnimImage = animated(Image)

export const MobileHeadCarouselSlides = [
  ({ style, click, sanityLandingPage }) => (
    <animated.div onClick={click}>
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.mainImage.asset.fluid}
        alt={sanityLandingPage.mainImageAltTag}
      />
    </animated.div>
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.div onClick={click}>
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.secondImage.asset.fluid}
        alt={sanityLandingPage.secondImageAltTag}
      />
    </animated.div>
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.div onClick={click}>
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.thirdImage.asset.fluid}
        alt={sanityLandingPage.thirdImageAltTag}
      />
    </animated.div>
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.div onClick={click}>
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.fourthImage.asset.fluid}
        alt={sanityLandingPage.fourthImageAltTag}
      />
    </animated.div>
  ),
  ({ style, click, sanityLandingPage }) => (
    <animated.div onClick={click}>
      <AnimImage
        style={{ ...style, height: '100%', width: '100%' }}
        fluid={sanityLandingPage.fifthImage.asset.fluid}
        alt={sanityLandingPage.fifthImageAltTag}
      />
    </animated.div>
  )
]