import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { CarouselDropletMaskSVG } from './index'
// import CarouselButtons from '../components/Carousel/CarouselButton'


const CarouselDropletHousing = ({ style, click, imageURI }) => {

  return (
    <S.CarouselDropletHousing style={style} >
      <CarouselDropletMaskSVG click={click} imageURI={imageURI} />
      {/* <CarouselButtons index={index} item={item} click={click} /> */}
    </S.CarouselDropletHousing>
  )
}

const AnimCarouselDropletHousing = animated.div

const S = {
  CarouselDropletHousing: styled(AnimCarouselDropletHousing)`
    position: relative;
    right: -3.75vw;
    /* width: 476px; */
    width: 44%;
    /* height: ${({ navBarHeight }) => `calc(100% - (${navBarHeight.navBarHeight}px) - 15px)`}; */
    height: calc(100% - (126.4px - 15px));
    top: calc(126.4px - 15px);
    @media (min-width: 1680px) {
      min-height: 800px;
      transition: min-height 0.5s ease;
    }
  `,
}

export default CarouselDropletHousing
