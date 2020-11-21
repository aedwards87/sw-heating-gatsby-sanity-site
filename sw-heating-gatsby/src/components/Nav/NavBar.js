import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { useTransition, animated } from 'react-spring'
import { Dropdown } from '../index'


const NavBar = ({
  on,
  ToggleOn,
  ToggleOff,
  location,
  navLinks,
  setHideOnScroll
}) => {

  const transition = useTransition(on, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const handleClick = () => {
    ToggleOff()
    setTimeout(() => {
      setHideOnScroll(false)
    }, 100)
  }

  return (
    <S.NavBar>
      <ul>
        {navLinks.map(navLink =>
          <li key={navLink.title} style={{ position: 'relative' }} >
            {!navLink.dropdown ?
              <S.Link
                to={navLink.link
                  ? `/${navLink.title.toLowerCase()}`
                  : `/#${navLink.title.toLowerCase()}`
                }
                activeClassName="active"
                onClick={navLink.hideNav ? handleClick : null}
              >
                {navLink.title}
              </S.Link>
              :
              <S.Link
                to={`${location.pathname}#${navLink.title.toLowerCase()}`}
                aria-haspopup="true"
                aria-expanded={on ? true : null}
                // TODO: Add the hanhtag to the URL when section scrolled into view
                // in turn gving the link an activeClassName
                onMouseOver={ToggleOn}
                onMouseLeave={ToggleOff}
                onClick={handleClick}
                onFocus={ToggleOn}
                onBlur={ToggleOff}
                className="dropdown"
              >
                {navLink.title}
              </S.Link>
            }
            {transition.map(({ item, key, props }) => (
              item && navLink.dropdown &&
              <AnimDropdown
                key={key}
                ToggleOn={ToggleOn}
                ToggleOff={ToggleOff}
                style={props}
                className={!on && 'hide'}
              />
            ))}
          </li>
        )}
      </ul>
    </S.NavBar>
  )
}

const AnimDropdown = animated(Dropdown)

const S = {
  NavBar: styled.nav`
    height: 100%; 
    display: none;
    & > ul {
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0;
      > li {
        margin: 0;
        padding: 0 1.15rem;
        transition: all 0.3s ease;
      }
      > li:last-child {
        padding-right: 0;
      }
    }
    @media (min-width: 980px) {
      display: block;
      > ul > li { padding-left: 1.4rem; padding-right: 1.4rem }
      transition: li 0.3s ease;
    }
    @media (min-width: 1600px) {
      > ul > li { padding-left: 2.15rem; padding-right: 2.15rem }
    }
  `,
  Link: styled(Link)`
    color: var(--main-text);
    font-weight: var(--bolder);
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0;
    position: relative;
    transition: all 0.3s ease;
    padding: 1rem 0;
    :hover, &.active {
      color: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--main-text)' : 'var(--primary-two)'}
    }
    ::after {
      content: "";
      position: absolute;
      bottom: -3.5px;
      left: 50%;
      height: 3px;
      width: 0;
      background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--primary-two)' : 'var(--primary-one)'};
      transition: all .3s ease;
      opacity: 0;
    }
    :hover::after,
    :focus::after,
    &.active::after {
      left: 0;
      width: 100%;
      opacity: 1;
    }
  `
}


export default NavBar
