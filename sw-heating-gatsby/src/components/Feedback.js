import React, { useEffect, useRef } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'
import { horizontalDraggableScroll } from '../helpers/horizontalDraggableScroll'
import { SWDropletQuotes } from '../assetsjs/index';

const Feedback = () => {
  const { allSanityFeedback } = useStaticQuery(
    graphql`
      query FeedbackQuery {
        allSanityFeedback {
          edges {
            node {
              id
              name
              message
            }
          }
        }
      }
    `
  )

  const ref = useRef(0)
  useEffect(() => {
    horizontalDraggableScroll(ref)
  }, [ref])


  return (
    <StyledFeedBack>
      <div>
        <StyledTitle id="feedback">What our customers<br />say about us</StyledTitle>
        {/* <StyledLink to="/reviews">Leave us a review</StyledLink> */}
      </div>
      <StyledListContainer className="items" ref={ref} >
        {allSanityFeedback.edges.map(({ node: { name, message, id } }) => (
          <li key={id}>
            <SWDropletQuotes />
            <blockquote>
              <p>{message}</p>
              <footer>{name}</footer>
            </blockquote>
          </li>
        ))}
      </StyledListContainer>
    </StyledFeedBack>
  )
}

const StyledFeedBack = styled.section`
  width: 100%;
  background: var(--light-bg);
  margin: 0 auto;
  h2 {
    margin-bottom: 0;
  }
  > div {
    max-width: 1900px;
    padding: 0 5%;
    margin: 0 auto;
  }
`
const StyledLink = styled(Link)`
  font-family: var(--fancy-font);
  font-size: 1.7rem;
  margin-left: 1.5rem;
  position: relative;
  color: var(--primary-four);
  transition: all 0.3s ease;
  /* :after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    height: 3px;
    width: 0;
    background: var(--primary-one);
    transition: all 0.3s ease;
  } */
  :hover, 
  :focus {
    color: var(--primary-two);
    /* ::after {
      width: 100%;
      left: 0;
    } */
  }
`


const StyledListContainer = styled.ul`
  list-style: none;
  /* padding: 8rem 0 7rem; */
  padding: 9rem 0 14vmax;
  margin: 0;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 80vw;
  overflow-x: scroll;
  /* scroll-snap-type: x proximity; */
  scrollbar-width: none;
  scroll-snap-type: both mandatory; 
  ::-webkit-scrollbar {
    display: none;
  }
  :before,
  :after {
    content: '';
    width: 10px;
  }
  > li {
    align-self: center;
    scroll-snap-align: center;
    position: relative;
    padding: 4rem 10% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: var(--shadow-two);
    :before, :after {
      position: absolute;
    } 
    > svg {
      position: absolute;
      top: -50px;
      left: calc(50% - (60px / 2));
      filter: drop-shadow( 0 4px 8px rgba(49, 42, 113, .3) );
      @media(min-width: 480px) {
        top: -60px;
        left: calc(50% - (70px / 2));
        width: 70px;
      }
    }
    /* :after {
      content: '"';
      top: 0;
      left: calc(50% - 1rem);
      font-size: 3rem;
      font-family: var(--fancy-font);
      color: #fff;
    }
    :before {
      content: "";
      top: -40px;
      left: calc(50% - 40px);
      height: 80px;
      width: 80px;
      background: #fff;
      background: var(--primary-four);
      border-radius: 100%;
      box-shadow: var(--shadow-two);
      border: 6px solid #fff;
    } */
  }
  :hover {
    cursor: grab;
  }
  :active {
    cursor: grabbing
  }
  @media(min-width: 850px) {
    padding-bottom: 8rem;
  }
  @media (min-width: 736px) {
    grid-auto-columns: minmax(500px, 1fr);
    > li {
      padding: 4rem 3.5rem 4.5rem;
    }
  }
  blockquote {
    margin: 0;
    position: relative;
    /* font-size: 0.9rem; */
    p {
      margin-bottom: 0;
    }
    footer {
      position: absolute;
      bottom: -2.7rem;
      right: 0;
      font-weight: var(--bolder);
      font-size: 0.8rem;
    }
  }
  
`



export default Feedback
