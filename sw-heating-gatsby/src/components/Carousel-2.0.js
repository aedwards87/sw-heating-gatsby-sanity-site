import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useTransition } from 'react-spring'


const Carousel = ({
  // Component,
  // navbarheight,
  data,
  slides,
  from,
  enter,
  leave,
  className
}) => {

  const [index, setIndex] = useState(0)

  const nextSlide = useCallback(() => setIndex(state => (state + 1) % slides.length), []) // Increments index state by 1
  // const targetSlide = (e) => setIndex(parseInt(e.target.value)) // Selects slide matching button value
  // // CODE to go to the previous slide - decrements index state by 1
  // const prevSlide = useCallback(() => setIndex(state => (state === 0) ? state = slides.length - 1 : (state - 1) % slides.length), [])

  const transitions = useTransition(index, p => p, {
    from: from,
    enter: enter,
    leave: leave,
    config: { mass: 11, tension: 300, friction: 120 }
  })

  return (
    <StyledDiv style={{ width: '100%', height: '500px', overflow: 'hidden', position: 'relative' }}>
      {transitions.map(({ item, props, key }) => {
        const Slide = slides[item]
        return (
          <Slide
            key={key}
            style={props}
            click={nextSlide}
            sanityLandingPage={data}
          />
        )
      })}

      {/* {Buttons && (
        <ButtonsContainer>
          {slides.map((_, i) =>
            <CarouselButton key={uuidv4()} click={targetSlide} value={i} index={index} />
          )}
        </ButtonsContainer>
      )} */}


      {/* <button onClick={prevSlide} style={{ zIndex: 99999999, position: 'absolute', top: 50 }}>back</button> */}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export default Carousel
