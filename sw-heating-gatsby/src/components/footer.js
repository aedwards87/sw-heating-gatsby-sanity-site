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
          <li className="items item1">
            <Link to='/'>
              <SWHeatingLogo height="60" />
            </Link>
            <p style={{ fontFamily: 'var(--fancy-font', marginTop: '0.5rem' }}>Fully insured</p>
          </li>
          <li className="items item2"
            style={{ justifySelf: 'end', alignSelf: 'start', display: 'flex', alignItems: 'center' }}
          >
            <strong
              style={{
                color: '#1877F2',
                fontSize: '0.95rem',
                paddingRight: '1rem',
              }}>
              Like us on
            </strong>
            <Facebook style={{ height: 45 }} />
          </li>
          <li className="items item3"
            style={{ paddingTop: '1rem' }}
          >
            <h3>Contact info:</h3>
            <address style={{ width: '110%' }}>
              <a style={{ paddingLeft: 20, }} href="tel:+441268778501">01268 778501</a><br />
              <a style={{ paddingLeft: 20, }} href="tel:+447852128577">07852 128577</a><br />
              <a style={{ paddingLeft: 20, }} href="mailto:sw-heating@icloud.com">sw-heating@icloud.com</a><br />
              <p>Company No. 9948546</p>
            </address>
          </li>
          <li className="items item4"
            style={{ paddingTop: '1rem' }}
          >
            <h3>Opening hours:</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr',
              gridTemplateRows: 'auto auto',
            }}>
              <strong>Mon-Fri:</strong>
              <time>8am - 6pm</time>
              <strong>Sat-Sun:</strong>
              <div style={{ width: '110%' }}>
                By arrangement or emergency only
              </div>
              <br />
            </div>
          </li>
          <li className="items item5" style={{
            // justifySelf: 'end',
            display: 'grid',
            gridTemplate: 'auto auto / 1fr auto',
            // alignItems: 'end',
            justifyItems: 'end',
            gridGap: '1.5rem 2rem'
          }}>
            <BritishGas style={{ height: 74 }} />
            <Vaillant style={{ height: 47 }} />
            <Ciphe style={{ height: 70 }} />
            <EnvAgency style={{ height: 60 }} />
          </li>
        </ul>
      </StyledTopFooter>
      <StyledBottomFooter>
        <ul>
          {navLinks.map(navLink =>
            <li key={navLink}>
              <Link to={`/${navLink.toLowerCase()}`}>
                {navLink}
              </Link>
            </li>
          )}
        </ul>
        <p>
          © SW Heating  |  Website by Adam Edwards
        </p>
      </StyledBottomFooter>
    </StyledFooterContainer>
  )
}

const StyledFooterContainer = styled.footer`
  /* height: ${({ height }) => `calc(90vh - ${height}px)`}; */
  background: var(--light-bg);
  font-size: 0.78rem;
  font-weight: var(--bold);
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
  .items {
    /* background: pink; */
  }
  .item1 {
    grid-column: 1 / span 2
  }
  .item2 {
    grid-column: 3 / span 2
  }
  .item5 {
    grid-column: 3 / span 2;
    grid-row: 2
  }
  @media (min-width: 980px) {

  }
`

const StyledBottomFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1900px;
  padding: 2rem 5%;
  justify-content: space-between;
  align-items: center;
  background: var(--main-text);
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
`


export default footer
