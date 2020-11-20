import React, { useEffect, useRef } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'
import { horizontalDraggableScroll } from '../helpers/horizontalDraggableScroll'
import { SWDropletQuotes } from '../assetsjs/index';
import TitleAnimation from './TitleAnimation';

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
        <TitleAnimation>
          <StyledTitle id="feedback" className="moz" heading>
            What our customers<br />say about us
          </StyledTitle>
        </TitleAnimation>
        <StyledLink to="/reviews/#reviews">
          Leave a review <div>→</div>
        </StyledLink>
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
  padding-top: calc(4% + 6.5rem);
  h2 {
    margin-bottom: 0;
  }
  > div {
    padding-right: 5%;
    padding-left: 5%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto;
    align-items: baseline;
    justify-items: space-between;
    grid-row-gap: 5rem;
    @media(min-width: 700px) {
      grid-template-columns: auto auto;
    }
  }
  
`
const StyledLink = styled(Link)`
  font-weight: var(--bolder);
  font-size: 1rem;
  position: relative;
  color: var(--primary-four);
  transition: all 0.3s ease;
  text-align: left;
  margin-left: .5rem;
  :hover, 
  :focus {
    color: var(--primary-two);
    > div {
      transform: translate3d(10px, 0, 0);
    }
  }
  > div {
    transition: transform 0.3s ease;
    display: inline-block;
  }
  @media(min-width: 700px) {
    text-align: right;
  }
`


const StyledListContainer = styled.ul`
  list-style: none;
  padding: 4rem 0 14vmax;
  margin: 0;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 80vw;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  /* scroll-snap-type: both mandatory;  */
  ::-webkit-scrollbar {
    display: none;
  }
  :before,
  :after {
    content: '';
    width: 10px;
  }
  @media(min-width: 700px) {
    padding: 9rem 0 14vmax;
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
