import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { TempSanityWork } from '../../data/dropdown-data'

const Dropdown = ({ className, ToggleOn, ToggleOff, style }) => {
  // console.log(TempSanityWork)
  return (
    <S.Dropdown
      className={className}
      style={style}
      onMouseEnter={ToggleOn}
      onMouseLeave={ToggleOff}
    >
      <S.ListContainer>
        {TempSanityWork.edges.map(({ node: work }) => (
          <li key={work.slug.current}>
            <Link to={`/${work.slug.current}`} activeClassName="active">
              <span>{work.title}</span>
            </Link>
          </li>
        ))}
      </S.ListContainer>
    </S.Dropdown>
  )
}


const S = {
  Dropdown: styled.div`
    position: absolute;
    top: 2.3rem;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 295px;
    padding: 5px;
    background: var(--gradient-one);
    border-radius: 10px;
    box-shadow: var(--shadow-one);
    z-index: 99;
    /* Triangle arrow at top of dropdown */
    ::before,
    ::after {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0) rotate(45deg);
    }
    ::before {
      content: "";
      height: 22px;
      width: 22px;
      border-radius: 3px;
      background: #f37c29;
      z-index: -1;
      top: -7px;
    }
    ::after {
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 2px;
      background: #ffffff;
      z-index: 999;
      top: -2px;
    }

  `,
  ListContainer: styled.ul`
    display: grid;
    list-style: none;
    background: #ffffff;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 1.8rem 2rem;
    /* margin: 5px; */
    > li > a {
      font-size: 0.9rem;
      font-weight: var(--bold);
      line-height: 1.4rem;
      transition: all .3s ease;
      width: 100%;
      display: block;
      :hover, :focus {
        color: var(--primary-two);
        transform: translate(5%, 0) scale(1.07);
        font-weight: var(--bolder);
      }
      &.active { 
        color: var(--primary-two);
        pointer-events: none;
        font-weight: var(--bolder);
        :focus, :hover {
          transform: translate(0, 0) scale(1);
        }
      }
    }
  `
}


export default Dropdown