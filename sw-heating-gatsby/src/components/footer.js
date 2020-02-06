// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { navLinks } from './header'
import { SWHeatingLogo, Facebook, BritishGas, Ciphe, EnvAgency, Vaillant, Phone, Email, Mobile } from "../assets/index";


const footer = ({ navBarHeight }) => {
  return (
    <StyledFooterContainer height={navBarHeight}>
      <StyledTopFooter>
        <ul>
          <li className="item1">
            <Link to='/'>
              <SWHeatingLogo />
            </Link>
            <p>Fully insured</p>
          </li>
          <li className="item2">
            <strong>Like us on</strong>
            <Facebook />
          </li>
          <li className="item3">
            <h3>Contact info:</h3>
            <address>
              <Phone /><a href="tel:+441268778501">01268 778501</a>
              <Mobile /><a href="tel:+447852128577">07852 128577</a>
              <Email /><a href="mailto:sw-heating@icloud.com">sw-heating@icloud.com</a>
              <p>Company No. 9948546</p>
            </address>
          </li>
          <li className="item4">
            <h3>Opening hours:</h3>
            <div>
              <strong>Mon-Fri:</strong>
              <time>8am - 6pm</time>
              <strong>Sat-Sun:</strong>
              <div style={{ width: '110%' }}>
                By arrangement or emergency only
              </div>
            </div>
          </li>
          <li className="item5">
            <BritishGas />
            <Vaillant />
            <Ciphe />
            <EnvAgency />
          </li>
        </ul>
      </StyledTopFooter>
      <StyledBottomFooter>
        <div>
          <ul>
            {navLinks.map(navLink =>
              <li key={navLink}>
                <Link to={`/${navLink.toLowerCase()}`}>
                  {navLink}
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
  /* height: ${({ height }) => `calc(90vh - ${height}px)`}; */
  background: var(--light-bg);
  font-size: 0.78rem;
  /* font-weight: var(--bold); */
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
  > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 8vw 3vw;
  }
  .item1 {
    grid-column: 1 / span 2
  }
  .item1 > p {
    font-family: var(--fancy-font);
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
  .item2 {
    grid-column: 3 / span 2;
    justify-self: end;
    align-self: start;
    display: flex;
    align-items: center;
  }
  .item2 > strong {
    color: #1877F2;
    font-size: 0.95rem;
    padding-right: 1rem;
  }
  .item3, .item4 {
    padding-top: 1rem;
  }
  .item4 > div {
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-template-rows: auto auto;
  }
  .item5 {
    grid-column: 3 / span 2;
    grid-row: 2;
    display: grid;
    grid-template: auto auto / 1fr auto;
    justify-items: end;
    grid-gap: 1.5rem 2rem;
    > svg {
      align-self: end;
    }
  }


  @media (max-width: 980px) {
 
  }
  @media (min-width: 980px) {
    font-size: 0.82rem;
  }
  address {
    width: 110%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 0.8rem;
    align-items: baseline;
    > svg {
      justify-self: center;
      color: var(--main-text);
    }
    > p {
      grid-column: span 2;
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
    justify-content: space-between;
    align-items: center;
    > p, a, ul, li {
      color: var(--color-light-2);
      margin: 0;
      padding: 0;
      justify-self: center;
    }
    > p {
      padding-bottom: 0.8rem;
      padding-top: 0.8rem;
    }
    > ul {
      display: flex;
      align-items: center;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      > li {
        margin-right: 2.5rem;
        > a {
          position: relative;
          :hover {
            color: white;
          }
          ::after {
            content: "";
            position: absolute;
            bottom: -20px;
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
  
`


export default footer
