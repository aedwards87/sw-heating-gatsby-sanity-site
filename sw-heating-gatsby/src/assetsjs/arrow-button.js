import React from 'react'
import styled from 'styled-components'


const ArrowButton = ({
  height = '2.2rem',
  className,
  stroke = 'white',
  fill = 'none',
  flip
}) => {
  return (
    <S.ArrowButtonSVG height={height} className={className} viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg" flip={flip} >
      <circle cx="21.5" cy="21.5" r="20.5"
        fill={fill}
        stroke="white" strokeWidth="2" />
      <path d="M31.1187 21.4997L12.7305 21.4997M12.7305 21.4997L20.0858 14.1445M12.7305 21.4997L20.0858 28.855"
        stroke={stroke}
        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </S.ArrowButtonSVG>
  )
}

const S = {
  ArrowButtonSVG: styled.svg`
    transform: ${({ flip }) => flip && 'scaleX(-1)'};
    filter: drop-shadow( 1px 1px 2px rgba(49, 42, 113, .6) );
    transition: height .3s ease;
    @media(min-width: 1500px) {
      height: calc(2.5rem + 0.5vmax);
    }
  `
}

export default ArrowButton
