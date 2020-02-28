import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"


export const TempSanityWork = {
  edges: [
    {
      node: {
        title: 'Servicing & Maintenance',
        slug: { current: 'servicing' },
      }
    },
    {
      node: {
        title: 'Property Maintenance',
        slug: { current: 'property-maintenance' },
      }
    },
    {
      node: {
        title: 'Gas',
        slug: { current: 'gas' },
      }
    },
    {
      node: {
        title: 'Power Flushing',
        slug: { current: 'power-flushing' },
      }
    },
    {
      node: {
        title: 'Plumbing',
        slug: { current: 'plumbing' },
      }
    },
    {
      node: {
        title: 'Boiler Installations',
        slug: { current: 'plumbing-job-004' },
      }
    },
    {
      node: {
        title: 'Heating & Hot Water',
        slug: { current: 'heating-and-hot-water' },
      }
    },
    {
      node: {
        title: 'Bespoke Bathrooms',
        slug: { current: 'bespoke-bathrooms' },
      }
    },
  ]
}


const Dropdown = ({ className, ToggleOn, ToggleOff, style }) => {
  console.log(TempSanityWork)
  return (
    <S.DropdownHousing
      className={className}
      style={style}
      onMouseEnter={ToggleOn}
      onMouseLeave={ToggleOff}
    >
      <S.DropdownListHousing>
        {TempSanityWork.edges.map(({ node: work }) => (
          <li
            key={work.slug.current}
          >
            <Link to={`/${work.slug.current}`}>
              <span>{work.title}</span>
            </Link>
          </li>
        ))}
      </S.DropdownListHousing>
    </S.DropdownHousing>
  )
}


const S = {
  DropdownHousing: styled.div`
    position: absolute;
    top: 3.3rem;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 295px;
    padding: 5px;
    background: var(--gradient-one);
    border-radius: 10px;
    box-shadow: var(--shadow-one);
    z-index: 99;
    /* Triangle arrow at top of dropdown */
    ::before {
      content: "";
      height: 22px;
      width: 22px;
      border-radius: 3px;
      background: #f0610a;
      z-index: -1;
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translate(-50%, 0) rotate(45deg);
    }
    ::after {
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 2px;
      background: #ffffff;
      z-index: 999;
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translate(-50%, 0) rotate(45deg);
    }

  `,
  DropdownListHousing: styled.ul`
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
      :hover, :active, :focus {
        color: var(--primary-two);
        transform: translate(5%, 0) scale(1.07);
      }
    }
  `
}


export default Dropdown