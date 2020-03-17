import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { MobileHeadCarouselSlides } from './Slides/MobileHeadCarouselSlides'
import { useTransition, config } from 'react-spring'

const MobileCarousel = ({ sanityLandingPage }) => {
  const [index, setIndex] = useState(0)
  const nextSlide = useCallback(() =>
    setIndex(state => (state + 1) % MobileHeadCarouselSlides.length), []
  )

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

  // Timer to change images after 4 seconds
  // useEffect(() => {
  //   const Timer = setInterval(() => {
  //     setIndex(state => (state + 1) % 5)
  //   }, 4000)
  //   return () => clearInterval(Timer)
  // })

  return (
    <S.MobileCarousel>
      {transitions.map(({ item, props, key }) => {
        const Slide = MobileHeadCarouselSlides[item]
        return (
          <Slide
            key={key}
            style={props}
            click={nextSlide}
            sanityLandingPage={sanityLandingPage}
          />
        )
      })}
    </S.MobileCarousel>
  )
}

const S = {
  MobileCarousel: styled.div`
    position: relative;
    width: calc(100%);
    height: 63vmin;
    cursor: pointer;
    > div > .gatsby-image-wrapper img {
      border-radius: 10px 10px 5px 5px;
    }
    :before {
      content: "";
      position: absolute;
      border-radius: 10px;
      background: #fff;
      top: -0.45rem;
      left: -0.45rem;
      width: calc(100% + 0.9rem);
      height: calc(100% + 0.9rem);
    }
    :after {
      content: "";
      position: absolute;
      background: var(--gradient-one);
      bottom: -14vmax;
      left: -5vw;
      right: 0;
      width: 100vw;
      height: 100%;
      z-index: -1;
    }
  `
}

export default MobileCarousel
