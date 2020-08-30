import React from 'react'
import { navLinks } from './navLinks'
import styled from 'styled-components'
import { Link } from "gatsby"
import { useSpring, animated, config } from 'react-spring'
import { useMeasure, usePrevious } from '../../hooks/index'


const NavMenu = ({
  on,
  toggleMenu,
  location,
}) => {

  const previous = usePrevious(on)
  const [bind, { height: viewHeight }] = useMeasure()

  const { height, opacity } = useSpring({
    from: {
      height: 0,
      opacity: 0,
    },
    to: {
      height: on ? viewHeight : 0,
      opacity: on ? 1 : 0,
    },
    config: config.slow
  })

  return (
    <S.NavMenuContainer
      className={`${on ? 'is-active' : null}`}
      style={{
        opacity,
        background: on ? '#00000060' : null,
        pointerEvents: on ? 'auto' : 'none'
      }}>
      <S.NavMenu
        style={{
          opacity,
          height: on && previous === on ? 'auto' : height
        }}>
        <div {...bind}>
          <ul style={{ overflow: 'hidden' }}>
            {navLinks.map(navLink =>
              <li key={navLink.title} >
                {!navLink.dropdown ?
                  <S.Link
                    onClick={toggleMenu}
                    to={navLink.link
                      ? `/${navLink.title.toLowerCase()}`
                      : `/#${navLink.title.toLowerCase()}`
                    }
                    activeClassName="active">
                    <span>
                      {navLink.title}
                    </span>
                  </S.Link>

                  :

                  <S.Link
                    to={`${location.pathname}#${navLink.title.toLowerCase()}`}
                    style={{ position: 'relative' }}
                    onClick={toggleMenu}
                  >
                    {navLink.title}
                  </S.Link>
                }
              </li>
            )}
          </ul>
        </div>
      </S.NavMenu >
    </S.NavMenuContainer>
  )
}

const AnimNavMenu = animated.nav

const S = {
  NavMenuContainer: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: -2;
    height: 100vh;
  `,
  NavMenu: styled(AnimNavMenu)`
    position: fixed;
    will-change: transform, opacity, height;
    top: 0;
    right: 0;
    left: 0;
    background: white;
    max-height: 100vh;
    z-index: -1;
    overflow: hidden;
    font-size: 2rem;
    letter-spacing: 0.7px;
    overflow-y: ${({ on }) => on ? 'scroll' : 'hidden'};
    button { 
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      &.active {
        color: var(--primary-two);
      }
    }
    ul {
      margin-left: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-end;
      justify-items: auto;
      padding: 9rem 5% 2.5rem;
      text-align: right;
      font-weight: var(--bolder);
    }
    li {
      transition: transform .3s ease;
      :hover {
        transform: translate3d(-25px, 0, 0) scale(1.05);
      }
    }
  `,
  Link: styled(Link)`
  display: block;
    transition: all 0.3s ease;
    width: 100%;
    padding: 1.25rem 0;
    :last-of-type {
      padding: 1.25rem 0;
    }
    &:hover, &.active {
      color: var(--primary-two);
    }
    &.active {
      pointer-events: none;
    }
    span {
      position: relative;
    }
    :hover span::after,
    :focus span::after,
    &.active span::after {
      left: 0;
      width: 99%;
    }
    &.sub-link-hover {
      padding: 2rem 0;
    }
  `
}

export default NavMenu
