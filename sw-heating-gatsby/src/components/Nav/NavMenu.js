import React from 'react'
import { navLinks } from './navLinks'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import { Link } from "gatsby"


const NavMenu = ({ on, location, style, toggleMenu }) => {
  return (
    <S.NavMenu style={{ height: style.height }} onClick={toggleMenu}>
      <ul onClick={toggleMenu}>
        {navLinks.map(navLink =>
          <li 
          onClick={toggleMenu}
            key={navLink.title} 
            style={{ position: 'relative' }}
          >
            {!navLink.dropdown ?
              <Link
                onClick={toggleMenu}
                to={navLink.link
                  ? `/${navLink.title.toLowerCase()}`
                  : `/#${navLink.title.toLowerCase()}`
                }
                activeClassName="active"
              >
                {navLink.title}
              </Link>
              :
              <Link
                to={`${location.pathname}#${navLink.title.toLowerCase()}`}
                aria-expanded={on ? true : null}
                style={{ zIndex: -999999999 }}
              // TODO: Add the hanhtag to the URL when section scrolled into view
              // in turn gving the link an activeClassName
              // onClick={ToggleOff}
              // onFocus={ToggleOn}
              // onBlur={ToggleOff}
              >
                {navLink.title}
              </Link>
            }
          </li>
        )}
      </ul>
    </S.NavMenu>
  )
}

const S = {
  NavMenu: styled.nav`
    position: fixed;
    /* top: 120.78px; */
    top: 0;
    right: 0;
    left: 0;
    background: white;
    z-index: -1;
    overflow: hidden;
    font-size: 2.25rem;
    line-height: 3.5rem;
    /* font-weight: var(--bold); */
    letter-spacing: 1px;
    ul {
      margin-left: 0;
      list-style: none;
      display: grid;
      justify-content: end;
      padding: 160px 5% 1%;
      text-align: right;
    }
  `
}

export default NavMenu
