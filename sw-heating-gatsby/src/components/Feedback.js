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
        <StyledTitle id="feed">Feedback</StyledTitle>
      </div>
        <StyledListContainer className="items" ref={ref} >
        {/* {allSanityWork.edges.map(({ node: work }) => (
          <li>{work.text}</li> */}
        {/* <ul className="items" ref={ref}> */}
          <li>1</li>
          {/* {console.log(ref)} */}
          <li>2</li>
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
  
  > div {
    max-width: 1900px;
    padding: 7rem 5% 0;
    margin: 0 auto;
  }
`

const StyledListContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 7rem;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  will-change: transform;
  user-select: none;
  padding-left: 5%;

  /* width: calc(100vw - (100vw - 100%)); */
  li {
    height: 200px;
    min-width: 500px;
    margin-right: 5%;
    background: var(--primary-one);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    flex: 0 0 auto;
    /* :first-of-type {
      margin-left: 5%;
    }
    :last-of-type {
      margin-right: 5%;
    } */
  }
  :hover {
    cursor: grab;
  }
  :active {
    cursor: grabbing
  }
`



export default Feedback
