import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


export const query = graphql`
  {
    allSanityWork {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {console.log(data.allSanityWork.edges.map(({ node: work }) => work.slug.current))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
 
export default IndexPage
