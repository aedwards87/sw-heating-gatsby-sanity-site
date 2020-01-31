// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const footer = ({ navBarHeight }) => {
  return (
    <StyledFooter style={{
      height: `calc(100vh - ${navBarHeight}px)`,
    }}>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>

        {/*

            4 column split
            3 rows
            

        */}
      </div>
      <div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: var(--light-bg);
  padding-top: 6rem;
  > div:first-of-type {
    margin: 0 auto;
    max-width: 2000px;
    padding: 5rem 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6%;
    align-items: center;
    height: 100%;
  }
  > div:last-of-type {
    height: 120px;
    width: 100%;
    background: var(--main-text);
  }
`

export default footer
