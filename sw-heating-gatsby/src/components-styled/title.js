import styled from 'styled-components'

export const StyledTitle = styled.h2`
  font-size: 2.2rem;
  margin: ${({ center }) => center && '0 auto'};
  text-align: left;
  margin-top: ${({ main }) => main && '2rem'};
  margin-bottom: 6rem;
  position: relative;
  display: inline-block;
  color: ${({ color }) => !color ? 'var(--main-text)' : color};
  font-weight: var(--boldest);
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
  @media (min-width: 420px) {
    ::after {
      width: ${({ smallerLine }) => !smallerLine ? '100%' : '61.5%'};
    }
  }
`
