import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'


import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <S.Reviews>
      <div>
        <div style={{ marginBottom: '6rem' }}>
          <StyledTitle>Gallery</StyledTitle>
        </div>
      </div>
    </S.Reviews>
    <Services />
  </Layout>
)

const S = {
  Reviews: styled.section`
    width: 100%;
    height: 100%;
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: 0 5% 7rem;
    }
  `
}

export default Gallery
