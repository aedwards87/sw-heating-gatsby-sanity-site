import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div>
        <StyledTitle lineColor="white" color="white" >Contact</StyledTitle>
        <p>Some sentence here...</p>
        <StyledListContainer>
          <li>
            <div>Full name: </div>
            <input type="text" placeholder="Type full name here..." />
          </li>
          <li>
            <div>Email: </div>
            <input type="text" placeholder="Type email here..." />
          </li>
          <li>
            <button type="submit" children="Send" />
          </li>
        </StyledListContainer>
      </div>
    </StyledContactForm>
  )
}

const StyledContactForm = styled.section`
  width: 100%;
  height: 105vh;
  background: var(--gradient-one);
  color: white;
  > p {
    justify-self: start;
  }
  > div {
    max-width: 1900px;
    margin: 0 auto;
    padding: 7rem 5%;
    height: 100%;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-content: center;
  }
`

const StyledListContainer = styled.ul`
  min-width: 700px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 3rem;
  > li {
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    border-radius: 500px;
    border: 2px solid white;
    font-size: 1.05rem;
    > div {
      height: 100%;
      display: inline-block;
      width: 150px;
      display: grid;
      align-items: center;
      justify-items: start;
      padding-left: 2.5rem;
    }
  }
  > li:last-child {
    grid-template-columns: 1fr;
    width: 50%;
    padding: 0;
    border: none;
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 1.1rem;
    color: white;
    border-radius: 500px;
    border: 2px solid white;
    font-size: 1.1rem;
    font-weight: 600;
    :hover {
      background: white;
      color: var(--primary-two);
      cursor: pointer;
      transform: translate(0, -2px);
      box-shadow: 0 3px 7px 0 rgba(0,0,0,0.06), 0 8px 20px 0 rgba(0,0,0,0.15);
    }
  }
  > li > input {
    background: transparent;
    color: white;
    outline: none;
    border: none;
    padding: 1.1rem;
    font-weight: 400;
    display: inline-block;
    border-radius: 0 500px 500px 0;
  }
`

export default ContactForm
