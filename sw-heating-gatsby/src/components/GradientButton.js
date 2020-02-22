import React from 'react'
import styled from 'styled-components'

const GradientButton = ({ children }) => {
  return (
    <S.GradientButtonOutside>
      <S.GradientButtonInside children={children} />
    </S.GradientButtonOutside>
  )
}

const S = {
  GradientButtonOutside: styled.div`
    padding: 0.22rem;
    border-radius: 10px;
    background: var(--gradient-one);
    display: inline-block;
    transition: all 0.3s ease;
    :hover button {
      background: transparent;
      color: white;
    }
    :hover {
      transform: translate(0, -2px);
      box-shadow: var(--shadow-one)
    }
  `,
  GradientButtonInside: styled.button`
    padding: 0.8rem 1.8rem;
    color: white;
    background: white;
    color: var(--main-text);
    font-weight: var(--bolder);
    font-size: 1.05rem;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.1px;
    @media (min-width: 980px) {
      padding: 1rem 2.2rem;
      font-size: 1.2rem;
    }
  `
}


export default GradientButton
