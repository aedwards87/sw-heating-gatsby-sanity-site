import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'

const inputTitles = [
  {
    name: 'Full name',
    type: 'text'
  },
  {
    name: 'Email',
    type: 'email'
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


const ContactForm = () => {

  const [state, setState] = useState([{
    fullname: "",
    email: "",
    subject: "",
    message: "",
  }])
  // const [disable, setDisable] = useState("")

  // Disable button in initial render.
  // useEffect(() => {
  //   setDisable(true);
  // }, []);


  const handleChange = useCallback(e => {
    const name = e.target.name
    const value = e.target.value
    setState(state => ([{
      [name]: state[0][name] = value
    }]))
  }, [])

  console.log(state[0])

  return (
    <S.ContactForm>
      <div>
        <div style={{marginBottom: '6rem', display: 'grid'}}>
          <StyledTitle
            center
            lineColor="white"
            color="white"
            id="Contact"
          >
            Contact us
          </StyledTitle>
        </div>
        <form>

          <input
            type="hidden"
            name="form-name"
            value="contact-form"
          // hidden input for Netlify to do there magic
          />
          <S.ListContainer>
            <li>
              <p>If you have any questions or queries, or would like to request a quote or even book an appointment, please get in touch with a member of our team using the form below:</p>
            </li>
            {inputTitles.map(({ name, type }) =>
              <li key={`${name}-${Date.now()}`}>
                <label>{name}:
                  {type !== 'textarea' ? // not equal to
                    <>
                      <S.Input
                        type={type}
                        name={`${name.toLowerCase().replace(/\s+/g, '')}`}
                        onChange={handleChange}
                      />
                    </>
                    :
                    <S.Input
                      as={type}
                      name={`${name.toLowerCase().replace(/\s+/g, '-')}`}
                      onChange={handleChange}
                    />
                  }
                </label>
              </li>
            )}
            <li>
              <button type="submit" children="Send" />
            </li>
          </S.ListContainer>
        </form>
      </div>
    </S.ContactForm>
  )
}


const S = {
  ContactForm: styled.section`
    width: 100%;
    /* height: 105vh; */
    background: var(--gradient-one);
    color: white;
    > div {
      max-width: 1900px;
      height: 100%;
      padding: 0 5% 7rem;
      /* text-align: left; */
      margin: auto auto;
    }
    @media(min-width: 480px) {
      > div {
        /* text-align: center; */
      }
    }
  `,
  ListContainer: styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    list-style: none;
    margin-left: 0;
    transition: all .3s ease;
    /* padding: 0; */
    > li {
      display: grid;
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
        width: 100%;
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: baseline;
        justify-items: start;
        padding-left: 1.1rem;
        font-weight: var(--bold);
        cursor: text;
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

    @media (min-width: 440px) {
      > li > label {
        padding-left: 1.8rem;
        grid-template-columns: 120px 1fr;
      }
      /* > li {
        grid-template-columns: 120px 1fr;
      } */
    }
    @media (min-width: 481px) {
      > li > label {
        /* grid-template-columns: 150px 1fr; */
      }
    }
    @media (min-width: 980px) {
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
  `,
  Input: styled.input`
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
    :hover,
    :focus {
      background: rgba(var(--primary-one-raw),0.3);
    }
  `
}


export default ContactForm
