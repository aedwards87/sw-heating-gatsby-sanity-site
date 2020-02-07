import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'
import { horizontalDraggableScroll } from '../helpers/horizontalDraggableScroll'

const Feedback = ({ /* allSanityFeedBack */ }) => {
  const ref = useRef(null)
  useEffect(() => {
    horizontalDraggableScroll(ref)
    // console.log(window.document.getElementById('feed').offsetLeft)
  }, [ref])


  return (
    <StyledFeedBack>
      <div>
        <StyledTitle>Feedback</StyledTitle>
      </div>
      <StyledListContainer className="items" ref={ref} >
        {/* {allSanityWork.edges.map(({ node: work }) => (
          <li>{work.text}</li> */}
        {/* <ul className="items" ref={ref}> */}
        <li>
          <blockquote>
            SW Heating is the best!
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        {/* {console.log(ref)} */}
        <li>
          <blockquote>
            <p>
              SW Heating is the best! SW Heating is
               the best! SW Heating is the best! SW Heating is the best! SW Heating is the best! SW Heating is the best! SW Heating is the best!
            </p>
            <footer>- Daron Fenton</footer>
          </blockquote>
        </li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        {/* </ul> */}
        {/* )} */}
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
    padding: 7rem 5% 0;
    margin: 0 auto;
  }
`

const StyledListContainer = styled.ul`
  list-style: none;
  padding: 8rem 0 7rem;
  margin: 0;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 10px;
  grid-auto-flow: column;
  grid-auto-columns: minmax(450px, 1fr);
  overflow-x: scroll;
  /* scroll-snap-type: x proximity; */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  :before,
  :after {
    content: '';
    width: 10px;
  }
  > li {
    scroll-snap-align: center;
    position: relative;
    padding: 4rem 3.5rem;
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
    :after {
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
      /* background: var(--gradient-one); */

      border-radius: 100%;
      box-shadow: var(--shadow-two);
      border: 6px solid #fff;
      /* border: 8px solid var(--gradient-one); */
    }
  }
  :hover {
    cursor: grab;
  }
  :active {
    cursor: grabbing
  }
  blockquote {
    margin: 0;
    position: relative;
    font-size: 0.9rem;
    p {
      margin-bottom: 0;
    }
    footer {
      position: absolute;
      bottom: -2rem;
      right: 0;
      font-weight: var(--normal);
      font-size: 0.7rem;
    }
  }
  
`



export default Feedback
