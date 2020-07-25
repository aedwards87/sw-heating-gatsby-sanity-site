import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useTransition, config, animated } from 'react-spring'
import { ArrowButton } from "../assetsjs/index"


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
  index = 0,
  setIndex,
  animation,
}) => {

  const [slideState, setSlideState] = useState('')
  // const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => setIndex(state => (state + 1) % slides.length), [slides.length])
  const prevSlide = useCallback(() => setIndex(state => (state === 0) ? state = slides.length - 1 : (state - 1) % slides.length), [slides.length])

  const handlePrev = useCallback(() => setSlideState('prev'), [])
  const handleNext = useCallback(() => setSlideState('next'), [])

  const transitionSlider = useTransition(index, p => p, {
    from: slideState === '' ? from : slideState === 'next' ? fromNext : fromPrev,
    enter: enter,
    leave: slideState === '' ? leave : slideState === 'next' ? leaveNext : leavePrev,
    config: config.molasses
  })

  return (
    <>
      <animated.div style={animation}>
        <S.ImageContainer>
          {transitionSlider.map(({ item, props, key }) => {
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

          <S.Button
            previous
            onClick={prevSlide}
            onMouseDown={handlePrev}
          >
            <ArrowButton />
          </S.Button>

          <S.Button next onClick={nextSlide} onMouseDown={handleNext}>
            <ArrowButton flip />
          </S.Button>

        </S.ImageContainer>
      </animated.div>
    </>
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
    display: flex;
    align-items: center;
    justify-content: ${({ next }) => next ? 'flex-end' : 'flex-start'};
    padding: 0 5% 0 5%;
    :hover {
      cursor: pointer;
      span {
        display: block;
      }
    }
    span {
      display: none;
    }
    :active svg {
      transform: ${({ next }) => next ?
      'translate3d(-2vmax, 0, 0) scale(-.6)' :
      'translate3d(2vmax, 0, 0) scale(.6)'};
    }
    svg { 
      display: block; 
      transition: transform .3s ease;
      transform: ${({ next }) => next ?
      'translate3d(0.3vmax, 0, 0) scale(-0.9)' :
      'translate3d(-0.3vmax, 0, 0) scale(.9)'};
    }
    @media(min-width: 680px) {
      width: 20%;
      justify-content: center;
      :hover {
        background: rgba(0,0,0,.2);
      }
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
  `,
  CloseButton: styled.button`
    background: none;
    border: 0;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    font-weight: var(--bolder);
    font-size: 1.3rem;
    z-index: 102;
  `
}

export default Carousel
