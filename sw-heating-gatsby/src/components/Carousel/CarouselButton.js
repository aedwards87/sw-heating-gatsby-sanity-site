import React from 'react'
import styled from 'styled-components'


const CarouselButton = ({ index, value, click }) => {
  return (
    <S.CarouselButton
      aria-label="next image"
      onClick={click}
      value={value}
      className={index === value && 'active'}
    />
  )
}

const S = {
  CarouselButton: styled.button`
    border-radius: 100%;
    height: .5rem;
    width: .5rem;
    border: 2px solid var(--primary-three);
    background: transparent;
    margin: 3px;
    cursor: pointer;
    :hover,
    &.active {
      background: var(--primary-three);
      border: 2px solid var(--primary-three);
    }
  `
}

export default CarouselButton
