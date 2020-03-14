import React from 'react'
import styled from 'styled-components'
// import { Link } from "gatsby"
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import Carousel from '../components/Carousel-2.0'
import { slidev2 } from '../components/Carousel/CarouselSlides'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query GalleryQuery {
    sanityLandingPage {
      title
      strapLine
      mainImageAltTag
      mainImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      secondImageAltTag
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
      fourthImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      fifthImage {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const Gallery = ({ data: { sanityLandingPage } }) => (
  <Layout>
    <SEO title="Gallery" />
    <S.Gallery>
      <div>
        <div style={{ marginBottom: '6rem' }}>
          <StyledTitle heading>Gallery</StyledTitle>
        </div>
        <Carousel
          data={sanityLandingPage}
          slides={slidev2}
          fromNext={{ opacity: 1, position: 'absolute', transform: 'translate3d(100%,0%,0) scale(1)' }}
          fromPrev={{ opacity: 1, position: 'absolute', transform: 'translate3d(-100%,0%,0) scale(1)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0%,0) scale(1)' }}
          leaveNext={{ opacity: 1, transform: 'translate3d(-100%,0%,0) scale(1)' }}
          leavePrev={{ opacity: 1, transform: 'translate3d(100%,0%,0) scale(1)' }}
        />
      </div>
    </S.Gallery>
    <Services />
  </Layout>
)


// pathName={location.pathname}

const S = {
  Gallery: styled.section`
    width: 100%;
    height: 100%;
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: 4% 5%;
    }
  `
}

export default Gallery
