import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { CarouselDropletMaskSVG } from './index'
// import CarouselButtons from '../components/Carousel/CarouselButton'


const CarouselDropletHousing = ({ style, click, imageSRC, alt }) => {
  return (
    <S.CarouselDropletHousing style={style} >
      <CarouselDropletMaskSVG click={click} imageSRC={imageSRC} alt={alt} />
      {/* <CarouselButtons index={index} item={item} click={click} /> */}
    </S.CarouselDropletHousing>
  )
}

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
}

export default CarouselDropletHousing
