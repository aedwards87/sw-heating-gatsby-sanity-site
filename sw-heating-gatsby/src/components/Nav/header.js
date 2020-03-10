import React, { useState, useEffect, useCallback } from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Location } from "@reach/router";
import { SWHeatingLogo, MenuIcon } from "../../assetsjs/index";
import { NavBar, NavMenu, navLinks, Toggle } from '../index'
import { Desktop, SmallScreen } from '../../hooks/useMedia'
import { useSpring, animated, config } from 'react-spring'


const Header = (props, ref) => {
  const [currentPosition, setCurrentPosition] = useState(window.pageYOffset)
  const [scrollUp, setScrollUp] = useState(false)
  const [open, setOpen] = useState(false)


  const toggleMenu = () => setOpen(!open)

  const fade = useSpring({ 
    opacity: open || open && !scrollUp ? 1 : 0,
    // transform: open ? `translate3d(0,0,0)` : `translate3d(0,-100%,0)`,
    height: open  || open && !scrollUp ? 700 : 0,
    config: config.slow
  })

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


  return (
    <Location>
      {({ location }) =>
        <Toggle>
          {({ on: isDropDownOn, toggleOff, toggleOn }) => 
            <S.Header
              id="header"
              goingUp={scrollUp ? true : false}
              position={currentPosition}
              ref={ref}
            >
              <div>
                {/* Add new div here? */}
                <Link to="/">
                  <SWHeatingLogo height="49" />
                </Link>
                <Desktop>
                  <NavBar
                    on={isDropDownOn}
                    ToggleOn={toggleOn}
                    ToggleOff={toggleOff}
                    location={location}
                    navLinks={navLinks}
                  />
                </Desktop>
                <SmallScreen>
                  <Toggle>
                    {({ on: isMenuOn, toggle }) => 
                      <>
                        <S.MenuButton onClick={() => {
                          toggleMenu(!open)

                          // setScrollUp(!scrollUp)
                          // setCurrentPosition(scrollUp ? 0 : 1)
                        }}>
                          <MenuIcon />
                        </S.MenuButton>
                        {/* {isMenuOn && */}
                          <AnimNavMenu
                            style={fade}
                            toggleMenu={toggleMenu}
                            location={location}
                            navLinks={navLinks}
                          />
                        {/* } */}
                      </>
                    } 
                  </Toggle>
                </SmallScreen>
              </div>
            </S.Header >
          }
        </Toggle>
      }
    </Location>
  )
}

const AnimNavMenu = animated(NavMenu)

const S = {
  Header: styled.header`
    position: fixed;
    transition: all 0.5s ease;
    background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'transparent' : 'white'};
    top: ${({ goingUp, position }) => goingUp ? '0' : position === 0 ? '0' : '-130px'};
    left: 0px;
    right: 0px;
    z-index: 99999;
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
