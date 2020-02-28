import React from "react"
// import { Link } from "gatsby"
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'


import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    
    <div style={{marginBottom: '6rem'}}>
      <StyledTitle>Gallery</StyledTitle>
    </div>
    <Services />
  </Layout>
)

export default Gallery
