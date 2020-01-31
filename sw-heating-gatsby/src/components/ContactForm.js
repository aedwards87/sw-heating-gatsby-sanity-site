import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div>
        <StyledTitle lineColor="white" color="white" >Contact</StyledTitle>
        <StyledListContainer>
          <li>Full name: <input type="text" /></li>
          <li>Email: <input type="text" /></li>
          <li><input type="submit" value="send" /></li>
        </StyledListContainer>
      </div>
    </StyledContactForm>
  )
}

const StyledContactForm = styled.section`
  width: 100%;
  height: 1000px;
  margin-top: 7rem;
  background: var(--gradient-one);
  > div {
    max-width: 2000px;
    padding: 7rem 5%;
    display: grid;
    justify-content: center;
    justify-items: center;
    
  }
  
`

const StyledListContainer = styled.ul`
  min-width: 600px;
  display: grid;
  grid-gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    width: 100%;
    border-radius: 500px;
    border: 2px solid white;
    padding-left: 2rem;    
    color: white;
  }
  > input {
    outline: none;
    border: none;
  }
`

export default ContactForm
