import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useCallback, useMemo } from "react"
import styled from 'styled-components'
import { SWHeatingLogo } from "../assetsjs/index";
import { Dropdown } from './index'
import { scrollToElement } from '../helpers/scrollTo'
import { useTransition, animated } from 'react-spring'
// import { navigate } from '@reach/router';


export const navLinks = [
  { title: 'Services', dropdown: true, link: false },
  { title: 'Gallery', dropdown: false, link: true },
  { title: 'About', dropdown: false, link: false },
  { title: 'Reviews', dropdown: false, link: true },
  { title: 'Contact', dropdown: false, link: false }
]

const Header = (props, ref) => {
  const [on, setOn] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(window.pageYOffset)
  const [scrollUp, setScrollUp] = useState(false)

  const ToggleOn = useCallback(() => { setOn(true) }, [on])
  const ToggleOff = useCallback(() => { setOn(false) }, [on])

  // Listens for the when the page is scrolled up
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
  }, [scrollUp, currentPosition])

  const transition = useTransition(on, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <S.Header
      id="header"
      goingUp={scrollUp ? true : false}
      position={currentPosition}
      ref={ref}
    >
      <div>
        <div>
          <Link to="/">
            <SWHeatingLogo height="49" />
          </Link>
        </div>
        <nav>
          <ul>
            {navLinks.map(navLink =>
              <li key={navLink.title} style={{ position: 'relative' }} >
                {!navLink.dropdown ?
                  <S.Link
                    to={navLink.link ? `/${navLink.title.toLowerCase()}` : `/#${navLink.title.toLowerCase()}`}
                    // TODO: take code from conference app, we need to add navLink.title to search
                    // bar and create a function that takes us to the desired section/id 

                    // onClick={!navLink.link ? (() =>
                    //   getOffSetTopValue(navLink.title) < 400 ?
                    //   scrollToParent(navLink.title) : scrollToElement(navLink.title)
                    // ) : null}
                    activeClassName="active"
                  >
                    {navLink.title}
                  </S.Link>
                  :
                  <S.Link
                    as="button"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={on ? true : null}
                    // activeClassName="active" Doesnt work because it is a button,
                    // TODO: give it an active class when #hashtag in the url
                    // className={url === `#${navLink.title}` && "active"}
                    onClick={() => scrollToElement(navLink.title)}
                    onMouseOver={ToggleOn}
                    onMouseLeave={ToggleOff}
                    onMouseUp={ToggleOff}
                    onFocus={ToggleOn}
                    onBlur={ToggleOff}
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
        </nav>
      </div>
    </S.Header >
  )
}

const AnimDropdown = animated(Dropdown)

const S = {
  Link: styled(Link)`
    color: var(--main-text);
    font-weight: var(--bolder);
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0;
    position: relative;
    transition: all 0.3s ease;
    :hover {
      color: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--main-text)' : 'var(--primary-two)'}
    }
    /* ::after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 50%;
      height: 3px;
      width: 0;
      background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--primary-two)' : 'var(--primary-one)'};
      transition: all 0.3s ease;
    } */
    :hover::after,
    :focus::after,
    :active::after,
    &.active::after,
    button.active::after {
      left: 0;
      width: 100%;
    }
    
    :hover .dropdown {
      display: none;
    }
  `,
  Header: styled.header`
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
    button {
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
    }
    .hide {
      display: none;
    }
    .show {
      display: block;
    }
    
    div > nav > ul > li:hover .dropdown {
      display: block;
    }
    nav { height: 100%; display: none; }
    /* a {
      color: var(--main-text);
      font-weight: var(--bolder);
      font-weight: 600;
      font-size: 0.9rem;
      margin: 0;
      position: relative;
    } */
    div > nav > ul > li > button, 
    div > nav > ul > li > a {
      transition: all 0.3s ease;
      padding: 1rem 0;
      :hover, &.active {
        color: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--primary-three)' : 'var(--primary-two)'}
      }
    }
    div > nav > ul > li > a::after,
    button.active::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 50%;
      height: 3px;
      width: 0;
      background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'var(--primary-two)' : 'var(--primary-one)'};
      transition: all 0.3s ease;
    }

    /* div > nav > ul > li > a:hover::after,
    div > nav > ul > li > a:active::after {
      left: 0;
      width: 100%;
    }
    a:hover .dropdown {
      display: none;
    } */

    div > nav > ul {
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
    }
    
    div > nav > ul > li:last-child {
      padding-right: 0;
    }
    @media (min-width: 980px) {
      svg { height: 55px; }
      nav { display: block; }
      nav > ul > li { padding-left: 1.4rem; padding-right: 1.4rem }
      transition: li 0.3s ease;
    }
    @media (min-width: 1600px) {
      nav > ul > li { padding-left: 2.15rem; padding-right: 2.15rem }
    }
  `
}



const forwardedHeader = React.forwardRef(Header)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default forwardedHeader
