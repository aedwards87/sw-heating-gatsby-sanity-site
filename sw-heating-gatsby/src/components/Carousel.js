import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useTransition, config } from 'react-spring'
import { CarouselSlides } from './Carousel/CarouselSlides'
// import CarouselButton from '../components/Carousel/CarouselButton'


const Carousel = ({ navbarheight, sanityLandingPage }) => {
  const [index, setIndex] = useState(0)

  const nextSlide = useCallback(() => setIndex(state => (state + 1) % CarouselSlides.length), []) // Increments index state by 1
  // const targetSlide = (e) => setIndex(parseInt(e.target.value)) // Selects slide matching button value

  // CODE to go to the previous slide - decrements index state by 1
  // const prevSlide = useCallback(() => setIndex(state => (state === 0) ? state = slides.length - 1 : (state - 1) % slides.length), [])

  // Timer to change images after 4 seconds
  // useEffect(() => {
  //   const Timer = setInterval(() => {
  //     setIndex(state => (state + 1) % 5)
  //   }, 4000)
  //   return () => clearInterval(Timer)
  // })


  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute', transform: 'translate3d(60%,5%,0) scale(0.5)', zIndex: 4 },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0) scale(1)', zIndex: 5 },
    leave: { opacity: 0, transform: 'translate3d(0%,0,0) scale(1)', zIndex: 6 },
    config: config.molasses
  })

  return (
    <S.Carousel navbarheight={navbarheight} >
      {transitions.map(({ item, props, key }) => {
        const Slide = CarouselSlides[item]
        return (
          <Slide
            key={key}
            style={props}
            click={nextSlide}
            sanityLandingPage={sanityLandingPage}
          />
        )
      })}
      {/* <S.ButtonsContainer>
        {slides.map((_, i) =>
          <CarouselButton key={uuidv4()} click={targetSlide} value={i} index={index} />
        )}
      </S.ButtonsContainer> */}

      {/* <button onClick={prevSlide} style={{ zIndex: 99999999, position: 'absolute', top: 50 }}>back</button> */}
    </S.Carousel>
  )
}

const S = {
  Carousel: styled.div`
    position: absolute;
    right: 0;
    top: -${({ navbarheight }) => navbarheight.navBarHeight}px;
    width: 100%;
    min-height: 500px;
    height: 120vh;
    overflow: hidden;
    @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
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
