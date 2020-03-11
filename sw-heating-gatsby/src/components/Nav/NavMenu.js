import React from 'react'
import { navLinks } from './navLinks'
import styled from 'styled-components'
import { Link } from "gatsby"
import { useTransition, useSpring, animated, config } from 'react-spring'


const NavMenu = ({
  isMenuOpen,
  location,
  toggleMenu,
  scrollUp
}) => {

  const fade = useSpring({
    opacity: isMenuOpen || isMenuOpen && !scrollUp ? 1 : 0,
    height: isMenuOpen || isMenuOpen && !scrollUp ? 600 : 0,
    config: config.slow
  })

  return (
    <S.NavMenu isMenuOpen={isMenuOpen}>
      <animated.div style={fade}>
        <ul>
          {navLinks.map(navLink =>
            <li
              key={navLink.title}
              style={{ position: 'relative' }}
            >
              {!navLink.dropdown ?
                <S.Link
                  onClick={toggleMenu}
                  to={navLink.link
                    ? `/${navLink.title.toLowerCase()}`
                    : `/#${navLink.title.toLowerCase()}`
                  }
                  activeClassName="active"
                >
                  <span>
                    {navLink.title}
                  </span>
                </S.Link>
                :
                <S.Link
                  to={`${location.pathname}#${navLink.title.toLowerCase()}`}
                  aria-expanded={isMenuOpen ? true : null}
                  // TODO: Add the hanhtag to the URL when section scrolled into view
                  // in turn gving the link an activeClassName
                  // onClick={ToggleOff}
                  // onFocus={ToggleOn}
                  // onBlur={ToggleOff}
                  onClick={toggleMenu}
                >
                  <span>
                    {navLink.title}
                  </span>
                </S.Link>
                // {transition.map(({ item, key, props }) => (
                //   item && navLink.dropdown &&
                //   <AnimDropdown
                //     key={key}
                //     ToggleOn={ToggleOn}
                //     ToggleOff={ToggleOff}
                //     style={props}
                //     className={!on && 'hide'}
                //   />
                // ))}
              }
            </li>
          )}
        </ul>
      </animated.div>
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
    height: 600px;
    background: transparent;
    z-index: -1;
    overflow: hidden;
    font-size: 2rem;
    line-height: 3.5rem;
    /* font-weight: var(--bold); */
    letter-spacing: 1px;
    pointer-events: ${({ isMenuOpen }) => !isMenuOpen ? 'none' : 'auto'};

    > div {
      background: white;
    overflow: hidden;

    }
    ul {
      margin-left: 0;
      list-style: none;
      display: flex;
      /* grid-template-columns: auto; */
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-end;
      justify-items: auto;
      padding: 160px 5% 5%;
      text-align: right;
    }
  `,
  Link: styled(Link)`
    transition: all 0.3s ease;
    font-weight: var(--bold);
    :hover, &.active {
      color: var(--primary-two);
    }
    &.active {
      pointer-events: none;
    }
    span {
      position: relative;
    }
    span::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      height: 3px;
      width: 0;
      background: var(--primary-one);
      transition: all 0.3s ease;
    }
    :hover span::after,
    :focus span::after,
    &.active span::after {
      left: 0;
      width: 99%;
    }

  `
}

export default NavMenu
