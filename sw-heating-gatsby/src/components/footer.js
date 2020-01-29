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
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: rgba(0,0,0,0.09);
  margin-top: 6rem;
  > div {
    margin: 0 auto;
    max-width: 1300px;
    padding: 5rem 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6%;
    align-items: center;
    height: 100%;
  }
`

export default footer
