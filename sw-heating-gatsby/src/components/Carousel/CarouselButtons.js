import React from 'react'
import styled from 'styled-components'
import CarouselButton from '../components/Carousel/CarouselButton'
// import { pages } from '../Carousel/pages'

const CarouselButtons = ({ index, click, item }) => {
  return (
    <S.CarouselButtons>
      {/* {pages.map((_, i) =>  */}
        <CarouselButton click={click} index={index} value={item} /> 
      {/* )} */}
    </S.CarouselButtons>
  )
}

const S = {
  CarouselButtons: styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 99999;
    input {
      border: 2px solid #000000;
      background: transparent;
    }
  `
}


export default CarouselButtons
