export const pageQuery2 = graphql`
  query HomePageQuery2 {
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
    allSanityLandingPage {
      edges {
        node {
          title
        }
      }
    }
  }
`