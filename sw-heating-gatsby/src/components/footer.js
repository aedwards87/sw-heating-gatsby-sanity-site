// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { navLinks } from './header'

const footer = ({ navBarHeight }) => {
  return (
    <StyledFooter style={{
      height: `calc(90vh - ${navBarHeight}px)`,
    }}>
      <div>
       
      </div>
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
        <p>
          © SW Heating  |  Website by Adam Edwards
        </p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: var(--light-bg);
  padding-top: 6rem;
  > div:first-of-type {
    margin: 0 auto;
    max-width: 2000px;
    padding: 5rem 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6%;
    align-items: center;
    height: 100%;
  }
  > div:last-of-type {
    display: flex;
    height: 120px;
    width: 100%;
    background: var(--main-text);
    > p, a, ul, li {
      color: var(--color-light-2);
      margin: 0;
      padding: 0;
    }
    > p {
      height: 100%;
    }
    > ul {
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0;
    }
  }
  
`

export default footer
