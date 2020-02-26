import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition } from 'react-spring'
import { CarouselDroplet } from '../assetsjs/index'
// import CarouselButton from '../components/Carousel/CarouselButton'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
// const uuidv4 = require('uuid/v4') // Creates Unique Identifier keu

const slides = [
  ({ style, click }) => <CarouselDroplet style={style} click={click} imageURI={image1} />,
  ({ style, click }) => <CarouselDroplet style={style} click={click} imageURI={image2} />,
  ({ style, click }) => <CarouselDroplet style={style} click={click} imageURI={image3} />,
  ({ style, click }) => <CarouselDroplet style={style} click={click} imageURI={image4} />,
  ({ style, click }) => <CarouselDroplet style={style} click={click} imageURI={image5} />
]


const Carousel = ({ navbarheight }) => {
  // const navBarHeight = useContext(UserContext)
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex(state => (state + 1) % 5)
  // const targetSlide = (e) => setIndex(parseInt(e.target.value)) // Selects slide matching button value

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
    config: { mass: 11, tension: 300, friction: 120 }
  })

  return (
    <S.Carousel navbarheight={navbarheight} >
      {transitions.map(({ item, props, key }) => {
        const Slide = slides[item]
        return <Slide key={key} style={props} click={nextSlide} />
      })}
      {/* <S.ButtonsContainer>
        {slides.map((_, i) =>
          <CarouselButton key={uuidv4()} click={targetSlide} value={i} index={index} />
        )}
      </S.ButtonsContainer> */}
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
