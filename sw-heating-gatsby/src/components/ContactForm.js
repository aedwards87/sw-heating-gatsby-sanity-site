import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div>
        <StyledTitle center lineColor="white" color="white" >Contact</StyledTitle>
        <StyledListContainer>
          <li>
            <p>Don't eat yellow snow</p>
          </li>
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
  > div {
    max-width: 1900px;
    height: 100%;
    padding: 7rem 5%;
    text-align: center;
    margin: auto auto;
  }
`

const StyledListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  list-style: none;
  margin-left: 0;
  /* padding: 0; */
  > li {
    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: 500px;
    border: 2px solid white;
    font-size: 1.05rem;
    > div {
      height: 100%;
      /* display: inline-block; */
      width: 150px;
      display: grid;
      align-items: center;
      justify-content: end;
      padding-right: 0.2rem;
      font-weight: var(--bold);
    }
  }
  
  > li:first-child {
    border: none;
    justify-self: center;
  }
  > li:last-child {
    grid-template-columns: 1fr;
    justify-self: center;
    padding: 0;
    width: 50%;
    border: none;
    outline: none;
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    padding: 1rem;
    color: white;
    border-radius: 500px;
    border: 2px solid white;
    font-size: 1.1rem;
    font-weight: var(--bolder);
    transition: box-shadow 0.3s ease;
    transition: transform 0.3s ease;
    :hover {
      background: white;
      color: var(--primary-two);
      cursor: pointer;
      transform: translate(0, -2px);
      box-shadow: var(--shadow-one);
    }
  }
  > li > input {
    background: transparent;
    color: white;
    outline: none;
    border: none;
    padding: 1rem;
    font-weight: 400;
    display: inline-block;
    border-radius: 0 500px 500px 0;
  }
  @media (min-width: 880px) {
    grid-template-columns: repeat(6, 1fr);
    > li {
      grid-column: 2 / span 4;
      /* :first-child {
        justify-self: start;
      } */
      :last-child {
        grid-column: 3 / span 2;
        width: 100%;
      }
    }
  }
`

export default ContactForm
