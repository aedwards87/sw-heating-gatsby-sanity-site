import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { SWHeatingLogo } from "../assetsjs/index";

export const navLinks = ['Services', 'Gallery', 'About', 'Reviews', 'Contact']

const Header = (props, ref) => {

  // Nav Bar shows on scroll up and vanishes on scroll down
  const [currentPosition, setCurrentPosition] = useState(window.pageYOffset)
  const [scrollUp, setScrollUp] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.pageYOffset
      setScrollUp(currentPosition === 0 ? false : currentPosition > newPosition);
      setCurrentPosition(newPosition)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })

  // TODO: Create a hook to check if at top of page 
  // to change state in order to make the background transparent

  return (
    <StyledHeader id="header" goingUp={scrollUp ? true : false} position={currentPosition} ref={ref} >
      <div>
        <div>
          <Link to="/">
            <SWHeatingLogo height="49" />
          </Link>
        </div>
        <nav>
          <ul>
            {navLinks.map(navLink =>
              <li key={navLink}>
                <Link
                  to={`/${navLink.toLowerCase()}`}
                  className={scrollUp ? 'active' : null}
                >
                  {navLink

                    // if navLink.dropdown === true show component
                    // Have it display: none but with navLink:hover display: block;

                  
                  }
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  position: fixed;
  transition: all 0.5s ease;
  background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'transparent' : 'white'};
  top: ${({ goingUp, position }) => goingUp ? '0' : position === 0 ? '0' : '-130px'};
  left: 0px;
  right: 0px;
  z-index: 99;
  /* border-bottom: 1px solid #E6EAEA; */
  > div {
    margin: 0 auto;
    max-width: 1900px;
    padding: 1.8rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* > div > h1 {
    font-size: 1.5rem;
    margin: 0;
  } */
  nav { height: 100%; display: none; }
  a {
    color: var(--main-text);
    font-weight: var(--bolder);
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0;
    position: relative;
  }
  ul > li > a {
    transition: all 0.3s ease;
    :hover {
      color: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--main-text)' : 'var(--primary-two)'}
    }
  }
  ul > li > a::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    height: 3px;
    width: 0;
    background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--primary-two)' : 'var(--primary-one)'};
    transition: all 0.3s ease;
    /* mix-blend-mode: exclusion; */
  }
  ul > li > a:hover::after,
  ul > li > a:active::after {
    left: 0;
    width: 100%;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
  }
  li {
    margin: 0;
    padding: 0.5rem 1.15rem;
    transition: all 0.3s ease;
  }
  ul > li:last-child {
    padding-right: 0;
  }
  @media (min-width: 980px) {
    svg { height: 55px; }
    nav { display: block; }
    li { padding-left: 1.4rem; padding-right: 1.4rem }
    transition: li 0.3s ease;
  }
  @media (min-width: 1600px) {
    li { padding-left: 2.15rem; padding-right: 2.15rem }
  }
`

const forwardedHeader = React.forwardRef(Header)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default forwardedHeader
