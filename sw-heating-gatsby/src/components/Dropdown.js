import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from './index'
import { Link } from "gatsby"



const Dropdown = ({ children, toggle, className, on, setOn }) => {
  const { allSanityWork } = useContext(UserContext)

  return (
    <S.DropdownHousing className={className}>
      <S.DropdownListHousing>
        {allSanityWork.edges.map(({ node: work }) => (
          <li key={work.slug.current}>
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
    top: 2.6rem;
    left: -100%;
    transform: translate(9%, 0);
    min-width: 280px;
    padding: 5px;
    background: var(--gradient-one);
    border-radius: 10px;
    box-shadow: var(--shadow-one);
    z-index: 99;
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
      /* font-size: 0.85rem; */
      /* font-weight: var(--bold); */
      line-height: 1.3rem;
      transition: all .3s ease;
      width: 100%;
      display: block;
      :hover {
        color: var(--primary-two);
        transform: translate(5%, 0) scale(1.05);
    }
  `
}


export default Dropdown