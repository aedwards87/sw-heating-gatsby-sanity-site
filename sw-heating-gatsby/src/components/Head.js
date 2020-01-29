import React from 'react'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"


const Head = ({ sanityLandingPage }) => {
  return (
    <StyledHeadContainer>
      <section style={{
        gridColumn: '1 / span 2',
        marginBottom: 40,
        width: '95%'
      }}>
        <h1 style={{
          // fontSize: '3.6vmax',
          fontSize: '3.2rem',
          fontWeight: 'var(--bolder)',
          // color: 'var(--primary-three)',
          // color: '#00A2DE',
          marginBottom: '2.5rem',
          // width: '120%'
        }}>
          {sanityLandingPage.title}
        </h1>
        <p>
          {sanityLandingPage.strapLine}
        </p>
        <Link to='/'>
          <div style={{
            padding: '0.2rem',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(253,198,0,1) 0%, rgba(227,6,21,1) 49%, rgba(49,42,113,1) 100%)',
            display: 'inline-block',
            marginTop: '1.5rem'
          }}>
            <StyledButton>Contact us</StyledButton>
          </div>
        </Link>
      </section>

      {/* <Image 
        style={{
          position: 'absolute',
          top: -125, 
          right: 0, 
          width: '47%', 
          gridColumn: '3 / span 2',
          height: '100vh',
          zIndex: -1,
        }} 
        fluid={sanityLandingPage.thirdImage.asset.fluid}
        alt={sanityLandingPage.title} 
      /> */}

      <StyledMainImageContainer>
        <img src={require("../images/pico2.png")} alt={/* {sanityLandingPage.blah} */ 'To come'} />
      </StyledMainImageContainer>

    </StyledHeadContainer>
  )
}


const StyledHeadContainer = styled.div`
  height: calc(100vh - 118.6px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 6%;
  align-items: center;
  p {
    font-size: 1rem;
  }
  > section > a > div:hover button {
    background: transparent;
    /* border: 2px solid var(--primary-one); */
    color: white;
  }
  > section > a > div {
    transition: all 0.3s ease;
  }
  > section > a > div:hover {
    transform: translate(0, -2px);
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.06), 0 8px 20px 0 rgba(0,0,0,0.15);
  }
`

const StyledMainImageContainer = styled.div`
  position: absolute;
  top: -118.6px;
  right: 0;
  height: 100vh;
  width: 61%;
  z-index: -1;
  overflow: hidden;
  img {
    position: absolute;
    /* left: 3%; */
    object-fit: cover;
    /* object-position: 70% 50%; */
    object-position: -10px 0;
    height: 100vh;
    width: 100%;
    transform: scale(1.03)
  }
`


const StyledButton = styled.button`
  padding: 2.6vmin 6vmin;
  color: white;
  background: white;
  /* background: var(--primary-two); */
  color: var(--main-text);
  /* color: black; */
  font-weight: var(--bolder);
  font-size: 1.2rem;
  /* border: 2px solid var(--primary-two); */
  /* border: 2px solid black; */
  border-radius: 7px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.1px;
  /* :hover {
    background: var(--primary-one);
    border: 2px solid var(--primary-one);
    color: white;
    box-shadow: 0 3px 7px 0 rgba(0,0,0,0.06), 0 8px 20px 0 rgba(0,0,0,0.15);
    transform: translate(0, -2px);
  } */
`




export default Head
