import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'

const Feedback = ({ /* allSanityFeedBack */ }) => {
  return (
    <StyledFeedBack>
      <div>
        <StyledTitle>Feedback</StyledTitle>
      </div>
        <StyledListContainer>
        {/* {allSanityWork.edges.map(({ node: work }) => (
          <li>{work.text}</li> */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        {/* )} */}
        </StyledListContainer>
    </StyledFeedBack>
  )
}

const StyledFeedBack = styled.section`
  width: 100%;
  background: var(--light-bg);
  > div {
    max-width: 1600px;
    padding: 7rem 5% 0;
    margin: 0 auto;
  }
`

const StyledListContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 7rem;
  overflow-x: scroll;
  overflow-y: hidden;
  width: calc(100vw - (100vw - 100%));
  > li {
    height: 200px;
    min-width: 500px;
    margin-left: 3%;
    background: var(--primary-one);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    :first-of-type {
      margin-left: 5%;
    }
    :last-of-type {
      margin-right: 5%;
    }
  }
`



export default Feedback
