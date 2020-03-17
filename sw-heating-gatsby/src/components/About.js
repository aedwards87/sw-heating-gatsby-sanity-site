import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from '../components-styled/index'
import SWLettersSVG from "../assetsjs/sw-letters";

const About = ( /* allSanityAboutUs */) => {

  const changeURL = () => {
    let params = new URL(document.location).hash = '#about'
    window.history.pushState({}, null, params)
  }

  const removeURL = () => {
    let params = new URL(document.location).pathname = '/'
    window.history.pushState({}, null, params)
  }

  return (
    <StyledAboutContainer>
      <div>
        <div style={{ marginBottom: '6rem' }}>
          <StyledTitle id="about" tall >Who we are?</StyledTitle>
        </div>
        <StyledContentContainer>
          <div>
            <p>
              <strong>At SW Heating, our mission is to keep your taps running and your house warm.</strong>
              <br /><br />
            We offer a trust worthy, reliable, professional service in Essex, Kent, Southeast/west London. Plumbing, gas and heating are our core services, but we can offer so much more should the project require it.
            <br /><br />
            A design to build bathroom and kitchen services is also available.
            </p>
          </div>

        </StyledContentContainer>
      </div>
      <StyledSWLettersSVG />
      <ProfileContainer>
        <div>
          <Profile>
            <div>
              <div>
                <div className='image' />
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
            <p>
              <p>
                Over 15 years ago Steven set out on his own journey and started SW Heating, along the way his picked up some specialist skills and craftmanship.</p>
              <br /><br />
              <strong>He is a fully qualified and insured engineer, accredited with:</strong>
              <br /><br />
              <ul>
                <li>Gas Safe Registered </li>
                <li>Fault Finding</li>
                <li>Boiler Installation</li>
                <li>System Design</li>
                <li>Unvented Hot Water Systems</li>
                <li>Energy Efficiency</li>
                <li>Water Regulations</li>
                <li>Part P Electrical</li>
                <li>Legionnaires Prevention & Treatment</li>
                <li>The Chartered Institute of Plumbing & Heating <br />(Full member for over 10 years)</li>
              </ul>
            </p>
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
    padding-top: 2rem;
  }
  > div {
    display: grid;
    grid-gap: 3rem;
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
    max-width: 560px;
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
`

const Bio = styled.div`
  width: 100%;
  max-width: 560px;
  > p > ul > li {
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
