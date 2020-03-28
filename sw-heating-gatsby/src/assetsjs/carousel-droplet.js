import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { CarouselDropletMaskSVG } from './index'
import Image from 'gatsby-image'

// import CarouselButtons from '../components/Carousel/CarouselButton'


const CarouselDropletHousing = ({ style, click, imageSRC, alt }) => {
  return (
    // <S.CarouselDropletHousing style={style} >
    //   <CarouselDropletMaskSVG click={click} imageSRC={imageSRC} alt={alt} />
    //   {/* <CarouselButtons index={index} item={item} click={click} /> */}
    // </S.CarouselDropletHousing>
    <S.Square style={style} onClick={click}>
      <div onClick={click}>
        <Image fluid={imageSRC} alt={alt} style={{ width: '100%', height: '100%' }} />
      </div>
    </S.Square>
  )
}

const AnimSquare = animated.div
const AnimCarouselDropletHousing = animated.div


const S = {
  CarouselDropletHousing: styled(AnimCarouselDropletHousing)`
    position: relative;
    right: -3.75vw;
    width: 44%;
    height: calc(100% - (126.4px - 15px));
    top: calc(126.4px - 15px);
    @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
    }
  `,


  Square: styled(AnimSquare)`
    /* left: 0; */
    width: 480px;
    height: 480px;
    top: 50%;
    /* right: 0; */
    left: 8vw;
    /* top: 140px; */
    overflow: hidden;
    border: 15px solid white;
    box-shadow: 40px 55px 40px rgba(0, 0, 0, .5);
    /* @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
    } */
    cursor: pointer;
    > div {
      height: 100%;
      width: 100%;
    }
  `
}

export default CarouselDropletHousing
