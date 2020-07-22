import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Location } from "@reach/router";
import { SWHeatingLogo } from "../../assetsjs/index";
import { NavBar, NavMenu, navLinks, Toggle } from '../index'
import { Desktop, SmallScreen } from '../../hooks/useMedia'
import { useScrollPosition, useBodyLockScroll } from '../../hooks/index'


const Header = (props, ref) => {
  const [on, toggle] = useState(false)
  const [scrollUp, setScrollUp, currentPosition] = useScrollPosition()

  return (
    <Location>
      {({ location }) =>
        <Toggle>
          {({ on: isDropDownOpen, toggleOff, toggleOn }) =>
            <Toggle>
              {({ on: isMenuOpen, toggle: toggleMenu }) =>
                <S.Header
                  // on={on}
                  id="header"
                  scrollUp={scrollUp ? true : false}
                  position={currentPosition}
                  ref={ref}
                  isMenuOpen={isMenuOpen}
                >
                  <div>
                    <Link to="/">
                      <SWHeatingLogo height="42" />
                    </Link>
                    <Desktop>
                      <NavBar
                        on={isDropDownOpen}
                        ToggleOn={toggleOn}
                        ToggleOff={toggleOff}
                        location={location}
                        navLinks={navLinks}
                      />
                    </Desktop>
                    <SmallScreen>
                      <S.MenuButton
                        className={`hamburger hamburger--collapse ${isMenuOpen ? 'is-active' : null}`}
                        type="button"
                        onClick={() => {
                          toggleMenu()
                          setScrollUp(!scrollUp)
                          toggle(!on)
                        }}
                      >
                        <span id="menu" className="hamburger-box">
                          <span className="hamburger-inner" />
                        </span>
                      </S.MenuButton>
                      <NavMenu
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                        location={location}
                        navLinks={navLinks}
                        scrollUp={scrollUp}
                      />
                    </SmallScreen>
                  </div>
                </S.Header >
              }
            </Toggle>
          }
        </Toggle>
      }
    </Location >
  )
}


const S = {
  Header: styled.header`
    position: fixed;
    transition: all 0.5s ease;
    top: 0;
    left: 0px;
    right: 0px;
    z-index: 99999;
    transform: ${({ scrollUp, position, isMenuOpen }) =>
      `translate3d(0, ${position <= 0 || scrollUp || isMenuOpen ? 0 : '-100%'}, 0)`
    };
    background: ${({ scrollUp, position, isMenuOpen }) => position <= 0 && !isMenuOpen || !scrollUp ? 'transparent' : 'white'};
    > div {
      margin: 0 auto;
      max-width: 1900px;
      padding: 1.8rem 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    
  `,
  MenuButton: styled.button`
    outline: 0;
    border: none;
    background: none;
    cursor: pointer;
    &.hamburger {
      display: grid;
      cursor: pointer;
      transition-property: opacity, filter;
      transition-duration: 0.15s;
      transition-timing-function: linear;
      font: inherit;
      color: inherit;
      text-transform: none;
      background-color: transparent;
      border: 0;
      margin: 0;
      overflow: visible; 
    }
    &.hamburger:hover {
      opacity: 0.7; 
    }
    &.hamburger.is-active:hover {
      opacity: 0.7; 
    }
    &.hamburger.is-active .hamburger-inner,
    &.hamburger.is-active .hamburger-inner::before,
    &.hamburger.is-active .hamburger-inner::after {
      background-color: #000; 
    }
    .hamburger-box {
      width: 28px;
      height: 24px;
      display: inline-block;
      position: relative; 
    }
    .hamburger-inner {
      display: block;
      top: 50%;
      margin-top: -2px; 
    }
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      width: 30px;
      height: 3px;
      background-color: #000;
      border-radius: 4px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease; 
    }
    &.hamburger--collapse.is-active .hamburger-inner,
    &.hamburger--collapse.is-active .hamburger-inner::before, 
    &.hamburger--collapse.is-active .hamburger-inner::after {
      background-color: var(--primary-two);
    }
    .hamburger-inner::before, .hamburger-inner::after {
      content: "";
      display: block; 
    }
    .hamburger-inner::before {
      top: -8px; 
    }
    .hamburger-inner::after {
      bottom: -8px; 
    }
    &.hamburger--collapse .hamburger-inner {
      top: auto;
      bottom: 0;
      transition-duration: 0.13s;
      transition-delay: 0.13s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &.hamburger--collapse .hamburger-inner::after {
      top: -16px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; 
    }
    &.hamburger--collapse .hamburger-inner::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
    }
    &.hamburger--collapse.is-active .hamburger-inner {
      transform: translate3d(0, -10px, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
    }
    &.hamburger--collapse.is-active .hamburger-inner::after {
      top: 0;
      opacity: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; 
    }
    &.hamburger--collapse.is-active .hamburger-inner::before {
      top: 0;
      transform: rotate(-90deg);
      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); 
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
