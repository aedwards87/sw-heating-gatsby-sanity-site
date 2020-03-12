import React, { useState } from 'react'
import { navLinks } from './navLinks'
import styled from 'styled-components'
import { Link } from "gatsby"
import { useSpring, animated, config } from 'react-spring'
import { TempSanityWork } from '../../data/dropdown-data'
import { useMeasure, usePrevious } from '../../hooks/index'

const NavMenu = ({
  isMenuOpen,
  toggleMenu,
}) => {


  const [on, toggle] = useState(false)
  const previous = usePrevious(isMenuOpen)
  const [bind, { height: viewHeight }] = useMeasure()


  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isMenuOpen ? viewHeight : 0,
      opacity: isMenuOpen ? 1 : 0,
      transform: `translate3d(${on ? -20 : 0}px,0,0)`,
    },
    config: config.slow
  })

  const fadeTwo = useSpring({
    opacity: on ? 1 : 0,
    height: on ? '24rem' : '0rem',
    config: config.slow
  })

  return (
    <S.NavMenu
      on={on}
      isMenuOpen={isMenuOpen}
      style={{ opacity, height: isMenuOpen && previous === isMenuOpen ? 'auto' : height, maxHeight: '100vh' }}
    >
      <div {...bind}>
        <ul>
          {navLinks.map(navLink =>
            <li key={navLink.title} >
              {!navLink.dropdown ?
                <S.Link
                  onClick={toggleMenu}
                  onBlur={toggle}
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

                // Services button and dropdown
                <div
                  // aria-expanded={isMenuOpen ? true : null}
                  style={{ position: 'relative', fontWeight: 'var(--bold)', cursor: 'pointer' }}
                >
                  {/* Services button */}

                  <button className={on ? 'active' : null} onClick={() => toggle(!on)}>
                    {navLink.title}
                  </button>

                  {/* Dropdown section */}
                  <animated.ul
                    style={{ ...fadeTwo, transform, display: 'grid', padding: 0, overflow: 'hidden', borderRight: '1px dashed rgba(0, 0, 0, 0.4)' }}
                  >
                    {TempSanityWork.edges.map(({ node: work }) => (
                      <animated.li
                        key={work.slug.current}
                        style={{ transform, fontSize: '1.2rem', paddingBottom: '1.2rem', letterSpacing: .2 }}
                        className="tom margina"
                      >
                        <Link
                          to={`/${work.slug.current}`}
                          activeClassName="active"
                          onClick={toggleMenu}
                        >
                          <span>{work.title}</span>
                        </Link>
                      </animated.li>
                    ))}
                  </animated.ul>
                </div>
              }
            </li>
          )}
        </ul>
      </div>
    </S.NavMenu >
  )
}

const AnimNavMenu = animated.nav

const S = {
  NavMenu: styled(AnimNavMenu)`
    position: fixed;
    /* top: 120.78px; */
    will-change: transform, opacity, height;
    top: 0;
    right: 0;
    left: 0;
    /* height: 600px; */
    background: transparent;
    z-index: -1;
    overflow: hidden;
    font-size: 2rem;
    /* font-weight: var(--bold); */
    letter-spacing: 0.7px;
    overflow-y: ${({ on }) => on ? 'scroll' : 'hidden'};
    width: 100vw;
    pointer-events: ${({ isMenuOpen }) => !isMenuOpen ? 'none' : 'auto'};
    > div {
      background: white;
      padding: calc(100vw - 100%)
    }
    /* li.margina {
      padding-top: 3rem;
    } */
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
      /* grid-template-columns: auto; */
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-end;
      justify-items: auto;
      padding: 160px 5% 5%;
      text-align: right;
    }
    li {
      padding-bottom: 2.5rem;
      :last-of-type {
        padding-bottom: 2.5rem;
      }
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
    /* span::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      height: 3px;
      width: 0;
      background: var(--primary-one);
      transition: all 0.3s ease;
    } */
    :hover span::after,
    :focus span::after,
    &.active span::after {
      left: 0;
      width: 99%;
    }

  `
}

export default NavMenu
