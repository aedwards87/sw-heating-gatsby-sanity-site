import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Location } from "@reach/router";
import { SWHeatingLogo, MenuIcon } from "../../assetsjs/index";
import { NavBar, NavMenu, navLinks, Toggle } from '../index'
import { Desktop, SmallScreen } from '../../hooks/useMedia'
import { useScrollPosition } from '../../hooks/index'


const Header = (props, ref) => {
  const [scrollUp, currentPosition] = useScrollPosition()

  return (
    <Location>
      {({ location }) =>
        <Toggle>
          {({ on: isDropDownOpen, toggleOff, toggleOn }) =>
            <S.Header
              id="header"
              goingUp={scrollUp ? true : false}
              position={currentPosition}
              ref={ref}
            >
              <div>
                <Link to="/">
                  <SWHeatingLogo height="49" />
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
                  <Toggle>
                    {({ on: isMenuOpen, toggle: toggleMenu }) =>
                      <>
                        <S.MenuButton onClick={toggleMenu}>
                          <MenuIcon />
                        </S.MenuButton>
                        <NavMenu
                          isMenuOpen={isMenuOpen}
                          toggleMenu={toggleMenu}
                          location={location}
                          navLinks={navLinks}
                          scrollUp={scrollUp}
                        />
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


const S = {
  Header: styled.header`
    position: fixed;
    transition: all 0.5s ease;
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
      background: ${({ goingUp, position }) => position === 0 || !goingUp ? 'transparent' : 'white'};
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
