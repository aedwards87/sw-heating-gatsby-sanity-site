import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../components-styled/index'
import SWLettersSVG from "../assetsjs/sw-letters";
import PortableText from '@sanity/block-content-to-react'
import Image from 'gatsby-image'
import { Link, useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { sanityAbout } = useStaticQuery(
    graphql`
      query AboutQuery {
        sanityAbout {
          title
          _rawContent
          profileImage {
            asset {
              fluid(maxWidth: 1000)  {
                ...GatsbySanityImageFluid
              }
            }
          }
          _rawBio
        }
      }
    `
  )


  return (
    <StyledAboutContainer>
      <div>
        <div style={{ marginBottom: '6rem' }}>
          <StyledTitle id="about" tall >Who we are?</StyledTitle>
        </div>
        <StyledContentContainer>
          <div>
            <PortableText
              blocks={sanityAbout._rawContent}
            />
            {/* <p>
              <strong>At SW Heating, our mission is to keep your taps running and your house warm.</strong>
              <br /><br />
            We offer a trust worthy, reliable, professional service in Essex, Kent, Southeast/west London. Plumbing, gas and heating are our core services, but we can offer so much more should the project require it.
            <br /><br />
            A design to build bathroom and kitchen services is also available.
            </p> */}
          </div>

        </StyledContentContainer>
      </div>
      <StyledSWLettersSVG />
      <ProfileContainer>
        <div>
          <Profile>
            <div>
              <div style={{ height: 200, width: 200, marginRight: '2rem' }}>
                <Image fluid={sanityAbout.profileImage.asset.fluid} alt={sanityAbout.title} />
              </div>
              <div className='name-and-title' >
                <h3>Steven Whitaker</h3>
                <p>Engineer, director and dad of twins</p>
              </div>
            </div>
          </Profile>

          {/* <Logos>
            Logos
          </Logos> */}
          {/* Bio */}
          <Bio>
            <PortableText
              blocks={sanityAbout._rawBio}
            />
          </Bio>
        </div>
      </ProfileContainer>
    </StyledAboutContainer>
  )
}


const StyledAboutContainer = styled.section`
  position: relative;
  > div {
    max-width: 1900px;
    margin: 0 auto;
    /* padding: 0 5% 7rem; */
    padding: 0 5% 3rem;
    :last-of-type {
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
  /* background: pink; */
  && {
    padding-top: 4rem;
  }
  > div {
    display: grid;
    grid-gap: 3.5rem;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  /* @media (min-width: 980px) {
    > div {
      grid-template-columns: auto 1fr;
      grid-auto-rows: auto 1fr;
    }
  } */
`

const Profile = styled.div`
  /* background: pink; */
  > div {
    display: flex;
    width: 100%;
    max-width: 580px;
    flex-wrap: wrap;
    grid-gap: 2rem;
    /* justify-content: center; */
    align-content: flex-end;
    margin: 0 auto;
    
  }
  width: 100%;
  position: relative;
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0; 
    right: 0;
    width: 100vw;
    margin-left: -5vw;
    height: 62.5%;
    background: var(--primary-one);
    z-index: -1;
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.3rem;
  }
  .image {
    width: 200px;
    height: 200px;
    margin-right: 2rem;
    /* margin-bottom: 2rem; */
    background: white;
  }
  .name-and-title {
    align-self: flex-end;
    p {
      margin-bottom: 1.6rem;
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
`

const Logos = styled.div`
  display: none;
  @media (min-width: 980px) {
    display: grid;
  }
`

const StyledSWLettersSVG = styled(SWLettersSVG)`
  position: absolute;
  height: 30vmax;
  /* max-height: 700px; */
  top: 5vw;
  right: 0;
  opacity: 20%;
  z-index: -1;
  @media(max-width: 850px) {
    display: none;
  }
`

export default About
