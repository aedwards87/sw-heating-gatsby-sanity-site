import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import PortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import Layout from "../components/layout"
import { Services } from '../components/index'
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
      secondImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
      thirdImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
      fourthImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
      fifthImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
      sixthImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
      seventhImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
      eighthImage {
        asset {
          fluid(maxWidth: 1000)  {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data: { sanityWork } }) => {

  return (
    <Layout>
      <S.TemplateContainer>
        <div>
          <div style={{ marginBottom: '6rem' }}>
            <StyledTitle as="h1" normal >{sanityWork.title}</StyledTitle>
          </div>
          <div>
            <PortableText
              blocks={sanityWork._rawDescription}
            />

          </div>
          <S.ImageContainer>
            <Image fluid={sanityWork.mainImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.mainImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.secondImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.thirdImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.fourthImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.fifthImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.sixthImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.seventhImage.asset.fluid} alt={sanityWork.title} />
            <Image fluid={sanityWork.eighthImage.asset.fluid} alt={sanityWork.title} />
            {console.log(sanityWork.eighthImage)}
          </S.ImageContainer>
        </div>
      </S.TemplateContainer>
      <Services />
    </Layout>
  )
}


const S = {
  TemplateContainer: styled.section`
    > div {
      margin: 0 auto;
      max-width: 1900px;
      padding: 6vmax 5%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      grid-column-gap: 10%;
    };
    @media (min-width: 980px) {
      > div {
        grid-template-columns: 1fr 1fr;
      }
    }
  `,
  ImageContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    grid-template-rows: repeat(3, auto);
    grid-gap: 3.5vmax;
    align-content: start;
    margin-top: 5vmax;
    margin-bottom: 5vmax;
    div {
      transition: all .3s ease;
    }
    > div:hover {
      box-shadow: var(--shadow-one);
      overflow: hidden;
      transform: translate3d(0, -0.5vmax, 0) scale(1.05);
      cursor: pointer;
    }
    > div:first-of-type:hover {
      transform: translate3d(0, -2vmax, 0) scale(1.05);
    }
    .gatsby-image-wrapper {
      border-radius: 10px;
      max-height: 15vw;
    }
    .gatsby-image-wrapper:not(:first-child) {
      min-height: 15vw;
    }
    .gatsby-image-wrapper:first-of-type {
      min-height: 55vw;
      grid-column: 1 / -1;
    }

    @media (min-width: 980px) {
      grid-column-start: 2;
      grid-row: 1 / span 2;
      grid-gap: 2vmax;
      margin: 0;
      .gatsby-image-wrapper:first-of-type {
        min-height: 35vw;
      }
      .gatsby-image-wrapper {
        max-height: 8vw;
      }
      .gatsby-image-wrapper:not(:first-child) {
        min-height: 8vw;
      }
    }

    @media (max-width: 480px) and (min-height: 600px) {
      grid-gap: 2.5vmax;
    }
  `
}