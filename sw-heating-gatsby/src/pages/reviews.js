import React from "react"
// import { Link } from "gatsby"
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'


import Layout from "../components/layout"
import SEO from "../components/seo"

const Reviews = () => (
  <Layout>
    <SEO title="Reviews" />
    <div style={{marginBottom: '6rem'}}>
      <StyledTitle>Reviews</StyledTitle>
    </div>
    <Services />
  </Layout>
)

export default Reviews
