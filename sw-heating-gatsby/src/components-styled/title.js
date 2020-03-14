import styled from 'styled-components'

export const StyledTitle = styled.h2`
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
    /* height: 7rem; */
    height: ${({ heading }) => !heading ? '14vmax' : '4%'};
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
    width: 100%;
    background: ${({ lineColor }) => !lineColor ? 'var(--gradient-one)' : lineColor};
  }
  @media (min-width: 980px) {
    font-size: 2.4rem;
  }
  @media(min-width: 800px) {
    ::before {
      height: ${({ tall, heading }) => heading ? 0 : !tall ? '8rem' : 'calc(7rem + 3vw)'};
    }
  }
`
