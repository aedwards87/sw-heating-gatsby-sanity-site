import styled from 'styled-components'

export const StyledTitle = styled.h2`
  font-size: 2.5rem;
  /* margin-top: 8rem; */
  margin-bottom: 6rem;
  position: relative;
  display: inline-block;
  color: ${({color}) => !color ? 'var(--main-text)' : color};
  font-weight: var(--bolder);
  ::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 5px;
    width: 100%;
    background: ${({lineColor}) => !lineColor ? 'var(--gradient-one)' : lineColor};
  }
`
