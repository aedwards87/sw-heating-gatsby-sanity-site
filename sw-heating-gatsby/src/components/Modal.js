import React from 'react'
import Portal from './Portal'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'


const Modal = ({ children, toggle }) => {
  return (
    <Portal>
      <S.ModalContainer>
        <S.CloseButton onClick={() => toggle(false)}>X</S.CloseButton>
        {children}
      </S.ModalContainer>
    </Portal>
  )
}

const S = {
  ModalContainer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(16, 20, 26,.94);
    z-index: 999;
    display: grid;
    align-items: center;
  `,
  CloseButton: styled.button`
    background: none;
    border: 0;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    font-weight: var(--bolder);
    font-size: 1.3rem;
    z-index: 102;
  `
}

export default Modal
