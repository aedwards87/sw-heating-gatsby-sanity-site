import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../components-styled/index'
import SWLettersSVG from "../assetsjs/sw-letters";
import PortableText from '@sanity/block-content-to-react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { GasSafe, Ciphe, EnvAgency, Vaillant } from "../assetsjs/index";
import TitleAnimation from './TitleAnimation';
import { animated, config, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const About = () => {
  const [show, setShow] = useState(false)

  const { sanityAbout } = useStaticQuery(
    graphql`
      query AboutQuery {
        sanityAbout {
          title
          _rawContent
          profileImage {
            asset {
              fluid(maxWidth: 200, maxHeight: 200)  {
                ...GatsbySanityImageFluid
              }
            }
          }
          _rawBio
        }
      }
    `
  )

  const SpringAnimation = useSpring({ 
    opacity: show ? 1 : 0,
    transform: show ? 'translate3d(0vw,0,0)' : 'translate3d(-10vw,0,0)',
    config: config.molasses, 
  })
  
  return (
    <StyledAboutContainer >
      <div>
        <TitleAnimation>
          <StyledTitle id="about" tall className="moz" >Who we are?</StyledTitle>
        </TitleAnimation>
        
        <StyledContentContainer>
          <div>
            <PortableText
              blocks={sanityAbout._rawContent}
            />
          </div>
        </StyledContentContainer>
      </div>
      <StyledSWLettersSVG />
      <ProfileContainer>
        <div>
          <Profile>
            <div>
              <Waypoint 
                onEnter={() => setShow(true)} 
                bottomOffset='80px'
              >
                <ProImageContainer style={SpringAnimation}>
                  <Image fluid={sanityAbout.profileImage.asset.fluid} alt="Steven, SW Heating's engineer, director" />
                </ProImageContainer>
              </Waypoint>
              <div className='name-and-title' >
                <h3>Steven Whitaker</h3>
                <p>Engineer, director and dad of twins</p>
              </div>
              <CertifiedLogos>
                <a href="https://www.gassaferegister.co.uk/" target="_blank" rel="noopener noreferrer" aria-label="Gas Safe"><GasSafe /></a>
                <a href="https://www.vaillant.co.uk/" target="_blank" rel="noopener noreferrer" aria-label="Vaillant"><Vaillant /></a>
                <a href="https://www.ciphe.org.uk/" target="_blank" rel="noopener noreferrer" aria-label="Ciphe"><Ciphe /></a>
                <a href="https://www.gov.uk/government/organisations/environment-agency" target="_blank" rel="noopener noreferrer" aria-label="Environment Agency"><EnvAgency /></a>
              </CertifiedLogos>
              <Bio>
                <PortableText
                  blocks={sanityAbout._rawBio}
                />
              </Bio>
            </div>
          </Profile>
        </div>
      </ProfileContainer>
    </StyledAboutContainer>
  )
}

const AnimatedProImageContainer = animated.div

const StyledAboutContainer = styled.section`
  position: relative;
  > div {
    max-width: 1900px;
    margin: 0 auto;
    padding: 0 5% 3rem;
    &:first-of-type > div:first-of-type {
      padding-bottom: 6rem;
    }
    :last-of-type {
      padding-top: 1.5rem;
      padding-bottom: 14vmax;
    }
  }
  @media(min-width: 850px) {
    > div {
      padding-top: 8vw;
      :last-of-type {
        padding-bottom: 8rem;
      }
    }
  }
`

const StyledContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  p:last-of-type {
    margin-bottom: 0;
  }
  @media(min-width: 575px ) {
    width: 90%;
  }
`

const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  && {
    padding-top: 4rem;
  }
  > div {
    display: grid;
    grid-gap: 3.5rem;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const Profile = styled.div`
  width: 100%;
  position: relative;
  > div {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    max-width: 850px;
    grid-gap: 2.5rem;
    align-items: center;
    margin: 0 auto;
    :after {
      content: "";
      position: absolute;
      top: 50px;
      left: 0; 
      right: 0;
      width: 100vw;
      margin-left: -5vw;
      height: 130px;
      background: var(--primary-one);
      z-index: -1;
    }
  }
  @media (min-width: 620px) {
    > div {
      grid-template-columns: auto 1fr;
    }
  }
  h3 {
    margin-bottom: 0.3rem;
    text-align: center;
    @media (min-width: 620px) {
      margin-top: 2rem;
      text-align: left;
    }
  }
  .image {
    width: 200px;
    height: 200px;
    /* margin-right: 2rem; */
    /* margin-bottom: 2rem; */
    background: white;
  }
  .name-and-title {
    p {
      margin-bottom: 1rem;
      text-align: center;
      @media (min-width: 620px) {
        margin-bottom: 1.6rem;
        text-align: left;
      }
    }
  }
  > div > div > .gatsby-image-wrapper {
    overflow: visible !important;
    > div {
      padding-bottom: 100% !important;
    }
    img {
      height: auto !important;
      bottom: 0 !important;
      top: auto !important;
      margin-bottom: 0;
    }
  }
`

const ProImageContainer = styled(AnimatedProImageContainer)`
  height: 228px;
  width: 220px;
  background: white;
  border: 14px solid white;
  border-top: 22px solid white;
  border-radius: 10px;
  box-shadow: var(--shadow-two);
  justify-self: center;
`

const Bio = styled.div`
  width: 100%;
  max-width: 700px;
  ul {
    margin-bottom: 0;
  }
  ul > li {
    margin-bottom: calc(0.45rem / 2);
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 620px) {
    grid-column: span 2;
  }
  @media(min-width: 710px) {
    grid-column: 2
  }
`

const StyledSWLettersSVG = styled(SWLettersSVG)`
  position: absolute;
  height: 32vmax;
  /* max-height: 700px; */
  top: 5vw;
  right: -2vw;
  fill-opacity: .1;
  z-index: -1;
  @media(max-width: 850px) {
    display: none;
  }
`

const CertifiedLogos = styled.div`
  display: none;
  @media(min-width: 710px) {
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-gap: 2rem;
  }
`

export default About
