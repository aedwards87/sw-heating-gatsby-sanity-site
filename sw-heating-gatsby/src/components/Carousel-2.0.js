import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useTransition, config } from 'react-spring'

const Carousel = ({
  // Component,
  // navbarheight,
  data,
  slides,
  from,
  fromNext,
  fromPrev,
  enter,
  leave,
  leaveNext,
  leavePrev,
}) => {

  const [index, setIndex] = useState(0)
  const [slideState, setSlideState] = useState('')

  const nextSlide = useCallback(() =>
    setIndex(state => (state + 1) % slides.length),
    [slides.length]) // Increments index state by 1
  // const targetSlide = (e) => setIndex(parseInt(e.target.value)) // Selects slide matching button value
  // // CODE to go to the previous slide - decrements index state by 1

  const prevSlide = useCallback(() =>
    setIndex(state => (state === 0) ? state = slides.length - 1 : (state - 1) % slides.length),
    [slides.length])

  const handlePrev = useCallback(() => setSlideState('prev'), [])
  const handleNext = useCallback(() => setSlideState('next'), [])


  const transitions = useTransition(index, p => p, {
    from: slideState === '' ? from : slideState === 'next' ? fromNext : fromPrev,
    enter: enter,
    leave: slideState === '' ? leave : slideState === 'next' ? leaveNext : leavePrev,
    config: config.molasses
  })

  return (
    <S.ImageContainer
    // style={{ width: '100%', height: '80vh', overflow: 'hidden', position: 'relative' }}  
    >
      {transitions.map(({ item, props, key }) => {
        const Slide = slides[item]
        return (
          <Slide
            key={key}
            style={props}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            sanityLandingPage={data}
          />
        )
      })}

      <S.Button previous onClick={prevSlide} onMouseDown={handlePrev}>
        <span>{'Prev'}</span>
      </S.Button>

      <S.Button next onClick={nextSlide} onMouseDown={handleNext}>
        <span>{'Next'}</span>
      </S.Button>

      {/* {Buttons && (
        <ButtonsContainer>
          {slides.map((_, i) =>
            <CarouselButton key={uuidv4()} click={targetSlide} value={i} index={index} />
          )}
        </ButtonsContainer>
      )} */}


      {/* <button onClick={prevSlide} style={{ zIndex: 99999999, position: 'absolute', top: 50 }}>back</button> */}
    </S.ImageContainer>
  )
}

const S = {
  Button: styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${({ next }) => next && 0};
    left: ${({ previous }) => previous && 0};
    width: 50%;
    height: 100%;
    background: rgba(0,0,0,0);
    border: 0;
    outline: 0;
    z-index: 99;
    color: white;
    transition: all .3s ease;
    :hover {
      background: rgba(0,0,0,0.2);
      cursor: pointer;
      span {
        display: block;
      }
    }
    span {
      display: none;
    }
  `,
  ImageContainer: styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    display: grid;
    align-items: center;
    .gatsby-image-wrapper {
      max-width: 100%;
      max-height: 100%;
      img {
        object-fit: contain !important;
      }
    }
  `
}

export default Carousel
