import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { UserContext } from '../components/index'
import { useTransition } from 'react-spring'
import { CarouselDropletMask } from '../assetsjs/index'


const Carousel = ({ height = '80vh', className }) => {
  const navBarHeight = useContext(UserContext)
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex(state => (state + 1) % 5)
  const targetedSlide = (e) => setIndex(parseInt(e.target.value)) 

  useEffect(() => {
    const Timer = setInterval(() => {
      setIndex(state => (state + 1) % 5)
    }, 4000)
    return () => clearInterval(Timer)
  })

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute', transform: 'translate3d(60%,5%,0) scale(0.5)', zIndex: 4 },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0) scale(1)', zIndex: 5 },
    leave: { opacity: 0, transform: 'translate3d(0%,0,0) scale(1)', zIndex: 6 },
    config: { mass: 11, tension: 300, friction: 120 }
  })

  return (
    <S.Carousel navBarHeight={navBarHeight} >
      {transitions.map(({ item, props, key }) => 
        item && (
          <CarouselDropletMask 
            key={key} 
            style={props} 
            navBarHeight={navBarHeight} 
            className={className} 
            height={height} 
            click={nextSlide} 
          />
        )
      )}
      <ButtonsContainer>
        <Button onClick={targetedSlide} value={0} className={index === 0 && 'active'} />
        <Button onClick={targetedSlide} value={1} className={index === 1 && 'active'} />
        <Button onClick={targetedSlide} value={2} className={index === 2 && 'active'} />
        <Button onClick={targetedSlide} value={3} className={index === 3 && 'active'} />
        <Button onClick={targetedSlide} value={4} className={index === 4 && 'active'} />
        {/* <label><input type="radio" /></label> */}
      </ButtonsContainer>
    </S.Carousel>
  )
}

const S = {
  Carousel: styled.div`
    position: absolute;
    right: 0;
    top: -${({ navBarHeight }) => navBarHeight.navBarHeight}px;
    width: 100%;
    min-height: 500px;
    height: 120vh;
    overflow: hidden;
    @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
    }
  `
}

const ButtonsContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99999;
  input {
    border: 2px solid #000000;
    background: transparent;
  }
`

const Button = styled.button`
  border-radius: 100%;
  height: 10px;
  width: 10px;
  border: 2px solid #000000;
  background: transparent;
  margin: 3px;
  cursor: pointer;
  :hover,
  &.active {
    background: #000000;
  }
`



export default Carousel
