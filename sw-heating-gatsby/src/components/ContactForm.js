import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from '../components-styled/index'
import useForm from '../hooks/useForm'
import { validateContact } from '../hooks/validate';
// const uuidv4 = require('uuid/v4')
import { Warning } from '../assetsjs/index'
import { Link } from "gatsby"


const inputTitles = [
  {
    name: 'Name',
    type: 'text',
    required: true
  },
  {
    name: 'Email',
    type: 'email',
    required: true
  },
  {
    name: 'Subject',
    type: 'text',
    required: true
  },
  {
    name: 'Message',
    type: 'textarea',
    required: true
  }
]


const ContactForm = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(submit, validateContact)

  function submit(e) {
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'contact-form': form.getAttribute('name'),
        ...values,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }


  return (
    <S.ContactForm>
      <div>
        <div style={{ marginBottom: '6rem', display: 'grid' }}>
          <StyledTitle
            center
            lineColor="white"
            color="white"
            id="contact"
          >
            Contact us
          </StyledTitle>
        </div>
        <form onSubmit={handleSubmit} noValidate name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
        // action="/form-success"
        >
          <input
            type="hidden"
            name="contact-form"
            value="contact-form"
          // hidden input for Netlify to do there magic
          />
          <S.ListContainer>
            <li>
              <p>If you have any questions or queries, or would like to request a quote or even book an appointment, please get in touch with a member of our team using the form below:</p>
              <p style={{ /*fontSize: '0.8rem'*/ }}>Alternatively, if you would like to see more <Link to="/#footer" style={{ color: 'var(--primary-one' }}>details <span>→</span></Link></p>
            </li>
            {inputTitles.map(({ name, type }) => {
              const _name = name.toLowerCase().replace(/\s+/g, '')
              return (
                <li
                  key={name}
                  className={errors[_name] && 'error'}
                >
                  <label
                    htmlFor={_name}
                    type={type}
                    style={{
                      alignItems: type === 'textarea' && 'baseline',
                      paddingTop: type === 'textarea' && 18
                    }}
                  >
                    {name}:
                    </label>
                  <S.Input
                    as={type !== 'textarea' ? null : type}
                    type={type !== 'textarea' ? type : null}
                    name={_name}
                    onChange={handleChange}
                    value={values[_name]}
                    className={errors[_name] && 'error'}
                    required
                  />

                  {((errors[_name] && _name === Object.keys(values)[0]) || errors[_name]) && (
                    <S.ErrorMessage>
                      <Warning /><span>{errors[_name]}</span>
                    </S.ErrorMessage>
                  )}
                </li>
              )
            })}
            <li>
              <button aria-label="Send" type="submit" children="Send" onSubmit={handleSubmit} />
            </li>
          </S.ListContainer>

          {Object.values(errors).some(e => e !== '') &&
            <div>
              <Warning />
              <span>There are invalid fields, please check these and try again</span>
            </div>
          }
        </form>
      </div>
    </S.ContactForm>
  )
}


const S = {
  ContactForm: styled.section`
    width: 100%;
    background: var(--gradient-one);
    color: white;
    > div {
      max-width: 1900px;
      height: 100%;
      padding: 0.1vmax 5% 14vmax;
      margin: auto auto;
      @media(min-width: 850px) {
        padding-bottom: 6rem;
      }
    }
    form {
      margin-bottom: 0;
      > div {
        justify-content: center;
        color: var(--primary-one);
        display: flex;
        align-items: center;
        padding-top: 1rem;
        font-size: 0.75rem;
        > span {
          margin-top: 1.5px;
          padding-left: 0.7rem;
        }
      }
    }
  `,
  ListContainer: styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.4rem;
    list-style: none;
    margin-left: 0;
    margin-bottom: 0;
    transition: all .3s ease;
    /* padding: 0; */
    > li {
      display: grid;
      border-radius: 12px;
      border: 2px solid white;
      font-size: 1rem;
      grid-template-columns: 110px 1fr;
      justify-items: start;
      :first-child {
        border: none;
        text-align: left;
        margin-bottom: 2rem;
        grid-template-columns: 1fr;
      }
      :last-of-type {
        grid-template-columns: 1fr;
        justify-self: start;
        width: 50%;
        padding: 0;
        margin-bottom: 0;
        border: none;
        /* outline: none; */
      }
      > label {
        height: 100%;
        width: 100%;
        display: grid;
        align-items: center;
        padding-left: 1.1rem;
        font-weight: var(--bold);
        cursor: text;
      }
      > button {
        background: transparent;
        /* outline: none; */
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
        :hover,
        :focus {
          background: white;
          color: var(--primary-two);
          cursor: pointer;
          transform: translate(0, -2px);
          box-shadow: var(--shadow-one);
        }
      }
      a:hover > span {
        transform: translate3d(10px, 0, 0);
      }
      a {
        font-weight: var(--bold);
        > span {
          display: inline-block;
          transition: transform 0.3s ease;
        }
      }
    }
    
    
    @media (min-width: 440px) {
      > li {
        grid-template-columns: 150px 1fr;
        > label {
          padding-left: 1.8rem;
        }
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
    /* outline: none; */
    border: none;
    width: 100%;
    padding: 1rem;
    font-weight: 400;
    display: inline-block;
    border-radius: 0 10px 10px 0;
    box-sizing: border-box;
    resize: none;
    height: ${({ as }) => as && '275px'};
    :hover,
    :focus {
      background: rgba(var(--primary-one-raw),0.3);
    }
    p {
      display: none;
    }
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
    &.error {
      border-radius: 0 10px 0 0;
    }
  `,
  ErrorMessage: styled.div`
    grid-column: 1 / -1;
    width: 100%;
    padding: 0.1rem 1.8rem;
    background: var(--primary-one);
    color: var(--primary-two);
    font-weight: var(--bolder);
    font-size: 0.7rem;
    border-radius: 0 0 8px 8px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 0.7rem;
    > span {
      margin-top: 1.5px;
    }
  `
}


export default ContactForm

  // const [state, setState] = useState([{
  //   fullname: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // }])
  // const [disable, setDisable] = useState("")

  // Disable button in initial render.
  // useEffect(() => {
  //   setDisable(true);
  // }, []);
  // const handleChange = useCallback(e => {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setState(state => ([{
  //     [name]: state[0][name] = value
  //   }]))
  // }, [])

  // console.log(state[0])

  // const handleSubmit = useCallback(
  //   () => {
  //     null
  //   },
  //   [],
  // )
