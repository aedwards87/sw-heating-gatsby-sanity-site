import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
// import Arrow from "../assets/arrow.svg";
import { StyledTitle } from '../components-styled/index'

const Services = ({ allSanityWork }) => {
  return (
    <StyledServicesContainer>
      <StyledTitle>Our services</StyledTitle>
      <StyledList>
        {allSanityWork.edges.map(({ node: work }) => (
          <li key={work.slug.current}>
            <Link to={`/${work.slug.current}`}>
              <StyledImageContainer>
                <StyledImage 
                  fluid={work.mainImage.asset.fluid}
                  alt={work.title} 
                />
              </StyledImageContainer>
              <div className="list-heading-container">
                <h3>{work.title}</h3>
              </div>
            </Link>
              {/* {work._rawDescription.map(({ children }) => (
                children.map(({ text }) => (
                  <p key={children[0]._key}>
                    {text}
                  </p>
              ))))} */}
          </li>
        ))}
      </StyledList>
    </StyledServicesContainer>
  )
}

const StyledImage = styled(Image)`
  border-radius: 10px 10px 0 0;
`

const StyledServicesContainer = styled.section`
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    z-index: -1;
  } 
  h2 {
    font-size: 2.5rem;
    margin-top: 8rem;
    margin-bottom: 6rem;
    position: relative;
    display: inline-block;
    font-weight: var(--bolder);
  }
  h2::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 5px;
    width: 100%;
    background: var(--gradient-one);
  }
`

const StyledImageContainer = styled.div`
  overflow: hidden;
  > div {
    height: 100%;
  }
  height: 28vmin;
`

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 5.5vmin;
  li {
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.08);

    :hover {
      background: white;
      box-shadow: 0 3px 7px 0 rgba(0,0,0,0.06), 
                  0 8px 20px 0 rgba(0,0,0,0.15),
                  0 12px 40px 0 rgba(0,0,0,0.20);
      transform: translate(0, -10px);
    :hover a h3 {
      color: var(--primary-three);
    }
    /* :hover .list-heading-container {
      padding-left: 30px;
    } */
  }
  .list-heading-container {
    padding: 23px;
    padding-left: 30px;
    margin: auto 0;
    height: 100%;
  }
  div {
    transition: all 1s ease;
  }
  a:hover ${StyledImageContainer} > div {
    transform: scale(1.1);
  }
  a h3 {
    font-weight: var(--bolder);
    font-size: 1.1rem;
    line-height: 1.2;
    color: var(--main-text);
    transition: color 0.3s ease;
    height: 100%;
  }
  a {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.7;
  }
`




   /* <StyledButton>
      <Arrow style={{transform: 'scale(1.2)'}} />
    </StyledButton> */

/* // const StyledButton = styled.button`
//   display: flex;
//   justify-content: center;
//   height: 60px;
//   width: 60px;
//   background: white;
//   color: var(--primary-two);
//   font-weight: var(--bolder);
//   border: 2px solid var(--primary-two);
//   border-radius: 500px;
//   margin-top: 1.1rem;
//   cursor: pointer;
//   outline: none;
//   transition: all 0.3s ease;
//   :hover {
//     background: var(--primary-one);
//     border: 2px solid var(--primary-one);
//     color: white;
//     width: 120px;
//     box-shadow: 0 3px 7px 0 rgba(0,0,0,0.06), 0 8px 20px 0 rgba(0,0,0,0.15);
//     transform: translate(0, -2px);
//   }
// ` */

export default Services
