import React from 'react'
import { navLinks } from './navLinks'
import styled from 'styled-components'
import { Link } from "gatsby"
import { useSpring, animated, config } from 'react-spring'
// import { TempSanityWork } from '../../data/dropdown-data'
import { useMeasure, usePrevious } from '../../hooks/index'


const NavMenu = ({
  isMenuOpen,
  toggleMenu,
  location,
}) => {

  // const [on, toggle] = useState(false)
  const previous = usePrevious(isMenuOpen)
  const [bind, { height: viewHeight }] = useMeasure()


  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: {
      height: isMenuOpen ? viewHeight : 0,
      opacity: isMenuOpen ? 1 : 0,
      // transform: `translate3d(${on ? -20 : 0}px,0,0)`,
    },
    config: config.slow
  })

  // const fadeTwo = useSpring({
  //   opacity: on ? 1 : 0,
  //   height: on ? '24rem' : '0rem',
  //   config: config.slow
  // })

  return (
    <S.NavMenu
      isMenuOpen={isMenuOpen}
      style={{ opacity, height: isMenuOpen && previous === isMenuOpen ? 'auto' : height }}
    >
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
                  activeClassName="active"
                >
                  <span>
                    {navLink.title}
                  </span>
                </S.Link>

                :

                // Services button and dropdown
                //container
                <S.Link
                  to={`${location.pathname}#${navLink.title.toLowerCase()}`}
                  style={{ position: 'relative', fontWeight: 'var(--bold)', cursor: 'pointer' }}
                  onClick={toggleMenu}
                >
                  {/* Services button */}

                  {/* <button
                    className={on ? 'active' : undefined}
                    onClick={() => toggle(!on)}
                  > */}
                  {navLink.title}
                  {/* </button> */}

                  {/* Dropdown section */}
                  {/* <div>
                    <animated.ul
                      style={{ ...fadeTwo, transform, display: 'grid', padding: 0, overflow: 'hidden', borderRight: '1px dashed rgba(0, 0, 0, 0.4)' }}
                    >
                      {TempSanityWork.edges.map(({ node: work }) => (
                        <animated.li
                          key={work.slug.current}
                          style={{ transform, fontSize: '1.2rem', paddingBottom: '1.2rem', letterSpacing: .2 }}
                        >
                          <S.Link
                            to={`/${work.slug.current}`}
                            activeClassName="active"
                            onClick={toggleMenu}
                            className="sub-link-hover"
                          >
                            <span>{work.title}</span>
                          </div>
                        </animated.li>
                      ))}
                    </animated.ul>
                  </div> */}
                </S.Link>
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
    background: white;
    max-height: 100vh;
    z-index: -1;
    overflow: hidden;
    font-size: 2rem;
    letter-spacing: 0.7px;
    overflow-y: ${({ on }) => on ? 'scroll' : 'hidden'};
    pointer-events: ${({ isMenuOpen }) => !isMenuOpen ? 'none' : 'auto'};
    /* > div {
      background: white;
    } */
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
    &:hover, &.active {
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
    &.sub-link-hover {
      padding: 2rem 0;
    }
  `
}

export default NavMenu
