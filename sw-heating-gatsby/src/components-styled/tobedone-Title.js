import styled from 'styled-components'
import React from 'react'

const Title = ({ smallerLine, lineColor, center, normal, tall }) => {
  return (
    <S.Container style={{display: 'block'}}>
      <S.Title 
        smallerLine={smallerLine}
        lineColor={lineColor}
        center={center}
        normal={normal}
        tall={tall}
      />
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    margin-bottom: 6rem;
  `,
  Title: styled.h2`
    font-size: 2.2rem;
    margin: ${({ center }) => center && '0 auto'};
    text-align: left;
    /* margin-bottom: 6rem; */
    position: relative;
    display: inline;
    color: ${({ color }) => !color ? 'var(--main-text)' : color};
    font-weight: var(--boldest);
    /* A little hack to add space above the heading so the text isn't butting up against the top of the broswer  */
    ::before {
      content: "";
      display: block;
      height: 7rem;
      width: 100%;
      visibility: hidden;
      display: ${({ normal }) => !normal ? null : 'none'};
    }
    /* Custom underline */
    ::after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 0;
      height: 5px;
      width: ${({ smallerLine }) => !smallerLine ? '100%' : '61.5%'};
      min-width: ${({ smallerLine }) => !smallerLine ? 'auto' : `${smallerLine}px`};
      background: ${({ lineColor }) => !lineColor ? 'var(--gradient-one)' : lineColor};
    }
    @media (min-width: 980px) {
      font-size: 2.5rem;
    }
    @media(min-width: 800px) {
      ::before {
        height: ${({tall}) => !tall ? '7rem' : 'calc(7rem + 11vw)'};
      }
    }
    @media (min-width: 420px) {
      ::after {
        width: ${({ smallerLine }) => !smallerLine ? '100%' : '61.5%'};
      }
    }
  `
}

export default Title