import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'

const ContactForm = () => {
  const inputTitles = [
    {
      name: 'Full name',
      type: 'text'
    },
    {
      name: 'Email',
      type: 'text'
    },
    {
      name: 'Subject',
      type: 'text'
    },
    {
      name: 'Message',
      type: 'textarea'
    }
  ]


  return (
    <StyledContactForm>
      <div>
        <StyledTitle center lineColor="white" color="white">Contact us</StyledTitle>
        <form>
          <input type="hidden" name="form-name" value="contact-form" />
          <StyledListContainer>
            <li>
              <p>If you have any questions or queries, or would like to request a quote or even book an appointment, please get in touch with a member of our team using the form below:</p>
            </li>
            {inputTitles.map(({ name, type }) =>
              <li key={name}>
                <label>{name}: </label>
                {type === 'text' ?
                  <Input
                    type={type}
                    name={`${name.toLowerCase().replace(/\s+/g, '-')}`}
                    placeholder={`${name} here...`}
                  />
                  :
                  <Input
                    as={type}
                    name={`${name.toLowerCase().replace(/\s+/g, '-')}`}
                    placeholder={`${name} here...`}
                  />
                }
              </li>
            )}
            <li>
              <button type="submit" children="Send" />
            </li>
          </StyledListContainer>
        </form>
      </div>
    </StyledContactForm>
  )
}

const StyledContactForm = styled.section`
  width: 100%;
  /* height: 105vh; */
  background: var(--gradient-one);
  color: white;
  > div {
    max-width: 1900px;
    height: 100%;
    padding: 7rem 5%;
    /* text-align: left; */
    margin: auto auto;
  }
  @media(min-width: 480px) {
    > div {
      text-align: center;
    }
  }
`

const StyledListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  list-style: none;
  margin-left: 0;
  transition: all .3s ease;
  /* padding: 0; */
  > li {
    display: grid;
    grid-template-columns: 150px 1fr;
    border-radius: 12px;
    border: 2px solid white;
    font-size: 1.05rem;
    justify-items: start;
    :first-child {
      border: none;
      text-align: left;
      margin-bottom: 2rem;
      grid-template-columns: 1fr;
    }
    :last-child {
      grid-template-columns: 1fr;
      justify-self: center;
      width: 50%;
      padding: 0;
      border: none;
      outline: none;
    }
    > label {
      height: 100%;
      display: grid;
      /* align-items: center; */
      padding-left: 1.8rem;
      font-weight: var(--bold);
      margin-top: 1rem;
    }
    > button {
      background: transparent;
      outline: none;
      border: none;
      padding: 1rem;
      color: white;
      width: 100%;
      border-radius: 12px;
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
  }

  @media (min-width: 880px) {
    grid-template-columns: repeat(6, 1fr);
    > li {
      grid-column: 2 / span 4;
      :last-child {
        justify-self: center;
        width: auto;
        min-width: 250px;
      }
    }
  }
`

const Input = styled.input`
  background: transparent;
  color: white;
  outline: none;
  border: none;
  width: 100%;
  padding: 1rem;
  font-weight: 400;
  display: inline-block;
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;
  resize: none;
  height: ${({ as }) => as && '300px'};
  :focus {
    background: rgba(var(--primary-one-raw),0.3);
  }
`

export default ContactForm
