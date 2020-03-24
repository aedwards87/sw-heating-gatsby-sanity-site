import React from 'react'
import styled from 'styled-components'

const SWLettersSVG = ({ className }) => {
  return (
    // <StyledSVG className={props.className} height={props.height} viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <StyledSVG className={className} enable-background="new 0 0 63.4 30.5" viewBox="0 0 63.4 30.5">
      <radialGradient id="a" cx="9.5769" cy="691.28" r="60.753" gradientTransform="translate(0 -686)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDC500" offset=".095954" />
        <stop stopColor="#FAB500" offset=".1464" />
        <stop stopColor="#F28C00" offset=".2006" />
        <stop stopColor="#EC6707" offset=".2768" />
        <stop stopColor="#E84610" offset=".3385" />
        <stop stopColor="#E52C12" offset=".3972" />
        <stop stopColor="#E41513" offset=".4514" />
        <stop stopColor="#E30613" offset=".497" />
        <stop stopColor="#C9182B" offset=".5501" />
        <stop stopColor="#A22344" offset=".6303" />
        <stop stopColor="#7D2956" offset=".7072" />
        <stop stopColor="#5D2B63" offset=".7785" />
        <stop stopColor="#462B6B" offset=".8431" />
        <stop stopColor="#372A70" offset=".8988" />
        <stop stopColor="#312A71" offset=".9391" />
      </radialGradient>
      <path class="st0" d="m54.4 0.6-3.6 17-5.7-17h-9l-5.7 17-3.6-17h-8.4c-1.6-0.4-3.4-0.6-5.4-0.6-7 0-11.6 3.8-11.6 9.7 0 6.2 4.9 7.8 11.3 9.3 4.1 1 5.1 1.2 5.1 2.6 0 1.3-1.2 2.1-3.5 2.1-3.4 0-6.7-1.2-9.7-3.6l-4.6 5.5c3.7 3.3 8.7 4.9 13.9 4.9s9.1-1.9 11-5.2l1.3 4.7h8.4l6.2-17 6.1 17h8.4l8.1-29.4h-9zm-39.5 11.1c-4.2-0.9-5.2-1.4-5.2-2.9 0-1.1 1-1.9 3-1.9 2.4 0 5.1 0.8 7.6 2.5l1.3 4.4c-1.8-0.9-4-1.5-6.7-2.1z" />
    </StyledSVG>
  )
}

const StyledSVG = styled.svg`
  .st0 {
    fill:url(#a)
  }
`


export default SWLettersSVG