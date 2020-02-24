// import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { navLinks } from './header'
import { SWHeatingLogo, Facebook, BritishGas, Ciphe, EnvAgency, Vaillant, Phone, Email, Mobile } from "../assetsjs/index";

const uuidv4 = require('uuid/v4')

const footer = () => {
  return (
    <StyledFooterContainer>
      <StyledTopFooter>
        <ul>
          <li className="item1">
            <Link to='/'>
              <SWHeatingLogo />
            </Link>
            <p>Fully insured</p>
          </li>
          <li className="item2">
            <a href="/">
              <strong>Like us on</strong>
              <Facebook />
            </a>
          </li>
          <li className="item3">
            <h3>Contact info:</h3>
            <address>
              <Phone /><a href="tel:+441268778501">01268 778501</a>
              <Mobile /><a href="tel:+447852128577">07852 128577</a>
              <Email /><a href="mailto:sw-heating@icloud.com">sw-heating@icloud.com</a>
              <p>
                <strong>Company No.</strong> 9948546<br />
                <strong>VAT No.</strong> 132032668
              </p>
            </address>
          </li>
          <li className="item4">
            <h3>Opening hours:</h3>
            <div>
              <strong>Mon-Fri:</strong>
              <time>8am - 6pm</time>
              <strong>Sat-Sun:</strong>
              <div>By arrangement or emergency only</div>
            </div>
          </li>
          <li className="item5">
            <a href="/"><BritishGas /></a>
            <a href="/"><Vaillant /></a>
            <a href="/"><Ciphe /></a>
            <a href="/"><EnvAgency /></a>
          </li>
        </ul>
      </StyledTopFooter>
      <StyledBottomFooter>
        <div>
          <ul>
            {navLinks.map(navLink =>
              <li key={`${navLink.title}-${Date.now()}`}>
                <Link to={`/${navLink.title.toLowerCase()}`}>
                  {navLink.title}
                </Link>
              </li>
            )}
          </ul>
          <p>© SW Heating | Website by Adam Edwards</p>
        </div>
      </StyledBottomFooter>
    </StyledFooterContainer>
  )
}

const StyledFooterContainer = styled.footer`
  background: var(--light-bg);
  font-size: 0.9rem;
  ul {
    list-style: none;
    height: 100%;
    margin: 0;
    > li {
      margin-bottom: 0;
    }
  }
  h3 {
    font-size: 1rem;
    font-weight: var(--bolder);
  }
  strong {
    font-weight: var(--bolder);
  }
`

const StyledTopFooter = styled.div`
  max-width: 1900px;
  margin: 0 auto;
  padding: 5rem 5%;
  height: 100%;
  a:hover {
    color: var(--primary-two)
  }
  > ul {
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: repeat(3, auto);
    grid-gap: 8vmax 3vw;
  }
  .item1 > p {
    font-family: var(--fancy-font);
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  .item2 {
    justify-self: end;
    align-self: start;
    > a {
      color: #1877F2;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      > strong {
        margin-right: 1rem;
      }
    }
  }
  .item3, .item4 {
    grid-column: span 2;
  }
  .item4 > div {
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 0.8rem;
  }
  .item5 {
    grid-column: span 2;
    /* grid-row: 3; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, auto));
    justify-items: center;
    justify-content: start;
    align-items: end;
    grid-gap: 1.5rem 2rem;
    > svg {
      align-self: end;
    }
  }
  address {
    width: 110%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 0.8rem;
    align-items: center;
    > svg {
      justify-self: center;
      color: var(--main-text);
    }
    > p {
      grid-column: span 2;
    }
  }
  
  @media (min-width: 480px) {
    .item3, .item4 {
      grid-column: auto;
    }
  }

  @media (max-width: 650px) {
    .item5 {
      grid-gap: 2.5rem 2.2rem;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      justify-items: start;
    }
    > ul {
      grid-template-columns: minmax(230px, 43%) auto;
    }
    address {
      width: 100%;
    }
    .item2 > a > strong {
      display: none;
    }
  }

  @media (min-width: 600px) {
    .item4 {
      width: 240px;
    }
  }


  @media (min-width: 980px) {
    font-size: 0.82rem;
    > ul {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto auto;
    }
    .item1 {
      grid-column: 1 / span 2
    }
    .item2 {
      grid-column: 3 / span 2;
      > strong {
        display: inline-block;
      }
    }
    .item4 {
      width: 120%;
      margin-left: 30px;
      > div {
        width: auto;
      }
    }
    .item5 {
      grid-column: 3 / span 2;
      grid-row: 2;
      justify-items: end;
      grid-template: auto auto / 1fr auto;
      display: grid;
    }
    
  }
  
`


















const StyledBottomFooter = styled.div`
  width: 100%;
  background: var(--main-text);
  > div {
    max-width: 1900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 5%;
    justify-content: start;
    align-content: center;
    align-items: baseline;
    > p, a, ul, li {
      color: var(--color-light-2);
      margin: 0;
      padding: 0;
      justify-self: center;
    }
    > p {
      padding-top: 0.4rem;
      font-size: 0.6rem;
    }
    > ul {
      display: none;
      align-items: center;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      > li {
        margin-right: 2.3rem;
        > a {
          position: relative;
          :hover {
            color: white;
          }
          ::after {
            content: "";
            position: absolute;
            bottom: -16px;
            left: 50%;
            height: 3px;
            width: 0;
            background: var(--primary-one);
            transition: all 0.3s ease;
          }
          :hover::after,
          :active::after {
            left: 0;
            width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 480px) {
    > div {
      justify-content: space-between;
    }
  }
  @media (min-width:651px) {
    > div {
      > ul {
        display: flex;
      }
    }
  }
  
`


export default footer
