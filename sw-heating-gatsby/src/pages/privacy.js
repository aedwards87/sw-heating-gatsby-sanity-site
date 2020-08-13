import React from 'react'
import styled from 'styled-components'
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from '@sanity/block-content-to-react'


export const pageQuery = graphql`
  query PrivacyPageQuery {
    sanityPrivacy {
      title
      _rawDescription
    }
  }
`

const privacy = ({ data: { sanityPrivacy } }) => {
  return (
    <Layout>
      <SEO title="Reviews" />
      <S.Privacy>
        <div>
          <div style={{ marginBottom: '6rem' }}>
            <StyledTitle id="privacy" heading>{sanityPrivacy.title}</StyledTitle>
          </div>
          <div>
            <PortableText
              blocks={sanityPrivacy._rawDescription}
            />
          </div>
        </div>
      </S.Privacy>
      <Services />
    </Layout>
  )
}

const S = {
  Privacy: styled.section`
    width: 100%;
    height: 100%;
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: calc(4% + 6.5rem) 5%;
      > div:last-of-type {
        width: 60%;
      }
    }
    h3 {
      padding-top: 30px;
    }
    @media(min-width: 850px) {
      > div {
        padding-bottom: 7rem;
      }
    }
  `
}

export default privacy
