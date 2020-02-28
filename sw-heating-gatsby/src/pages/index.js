import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Head,Services, About, Feedback, ContactForm } from '../components/index'

export const pageQuery = graphql`
  query HomePageQuery {
    allSanityWork {
      edges {
        node {
          title
          slug {
            current
          }
          _rawDescription
          mainImage {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    sanityLandingPage {
      title
      strapLine
      mainImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      secondImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      thirdImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }, props) => (
  <Layout allSanityWork={data.allSanityWork}>
    <SEO title="Home" />
    <Head sanityLandingPage={data.sanityLandingPage} />
    <Services allSanityWork={data.allSanityWork} />
    <About /* sanityAboutPage={data.sanityAboutPage} */ />
    <Feedback /*allSanityFeedbackPage={data.allSanityFeedbackPage}*/ />
    <ContactForm />
  </Layout>
)

export default IndexPage
