import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from "../components/layout"
import { StyledTitle } from '../components-styled/index'

export const query = graphql`
  query ($slug: String) {
    sanityWork(slug: {current: {eq: $slug}}) {
      title
      _rawDescription
      mainImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => {

  return (
    <Layout>
      <S.Housing>
        <div>
          <div>
            <StyledTitle as="h1" main >{data.sanityWork.title}</StyledTitle>
          </div>
          <article>
            <Image fluid={data.sanityWork.mainImage.asset.fluid} alt={data.sanityWork.title} />
          </article>
          <div>
            <p>{data.sanityWork._rawDescription[0].children[0].text}</p>
          </div>
        </div>
      </S.Housing>
    </Layout>
  )
}


const S = {
  Housing: styled.section`
    > div {
      margin: 0 auto;
      max-width: 1900px;
      padding: 1.8rem 5%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-column-gap: 10%;
      > article {
        grid-column-start: 2;
        grid-row: 1 / span 2;
        border-radius: 10px;
        height: 500px;
      }
    }
  `
}