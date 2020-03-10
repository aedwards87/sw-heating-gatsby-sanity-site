import React from 'react'
import { navLinks } from './navLinks'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import { Link } from "gatsby"


const NavMenu = ({ on, location }) => {
  return (
    <S.NavMenu>
      <ul>
        {navLinks.map(navLink =>
          <li key={navLink.title} style={{ position: 'relative' }} >
            {!navLink.dropdown ?
              <Link
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

  `
}

export default NavMenu
