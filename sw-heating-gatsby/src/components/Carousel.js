import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, config } from 'react-spring'
import { CarouselDroplet as ImageContainer } from '../assetsjs/index'


const Carousel = ({ navbarheight, sanityLandingPage }) => {
  const [index, setIndex] = useState(0)

  const nextSlide = useCallback(() => setIndex(state => (state + 1) % sanityLandingPage.images.length), []) // Increments index state by 1

  // Timer to change images after 4 seconds
  useEffect(() => {
    const Timer = setInterval(() => {
      setIndex(state => (state + 1) % 5)
    }, 4000)
    return () => clearInterval(Timer)
  })

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute', transform: 'translate3d(60%,-25%,0) scale(0.5)', zIndex: 4, borderRadius: 500 },
    enter: { opacity: 1, transform: 'translate3d(0%,-50%,0) scale(1)', zIndex: 5, borderRadius: 40 },
    leave: { opacity: 0, transform: 'translate3d(0%,-50%,0) scale(1)', zIndex: 6, borderRadius: 40 },
    config: config.molasses
  })

  return (
    <S.Carousel navbarheight={navbarheight} >
      {transitions.map(({ item, props, key }) =>
        <ImageContainer
          key={key}
          style={props}
          click={nextSlide}
          fluid={sanityLandingPage.images[item].image.asset.fluid}
          alt={sanityLandingPage.images[item].title}
        />
      )}
    </S.Carousel>
  )
}


const S = {
  Carousel: styled.div`
    position: relative; 
    height: 100%;
    grid-column: 3 / span 2;
    transition: transform 0.5s ease;

    @media (min-width: 1680px) {
      /* min-height: 800px; */
      transition: min-height 0.5s ease;
      transition: transform 0.5s ease;
      grid-column: 3 / span 1;
      transform: scale(1.1);
    }
  `,
  ButtonsContainer: styled.div`
    position: absolute;
    left: 5%;
    bottom: 240px;
    z-index: 99999;
    input {
      border: 2px solid var(--primary-two);
      background: transparent;
    }
  `
}




export default Carousel
