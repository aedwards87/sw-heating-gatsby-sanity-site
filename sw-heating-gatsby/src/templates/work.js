import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import PortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import Layout from "../components/layout"
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import { useTransition, animated, config } from 'react-spring'

const AnimImage = animated(Image)

const slides = [
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }}>
      <S.Image fluid={sanityWork.mainImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.secondImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.thirdImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.fourthImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.fifthImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.sixthImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.seventhImage.asset.fluid} alt={sanityWork.title} style={style} />
    </animated.div>
  ),
  ({ style, click, sanityWork }) => (
    <animated.div className="bob" onClick={click} style={{ ...style, gridColumn: '1 / -1', width: '100%' }} >
      <S.Image fluid={sanityWork.eighthImage.asset.fluid} alt={sanityWork.title} style={style} onClick={click} />
    </animated.div>
  )
]


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
  const [index, setIndex] = useState(0)
  const nextSlide = useCallback(() => setIndex(state => (state + 1) % slides.length), [])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

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
            {transitions.map(({ item, props, key }) => {
              const Slide = slides[item]
              return (
                <Slide
                  key={key}
                  style={props}
                  click={nextSlide}
                  sanityWork={sanityWork}
                />
              )
            })}
          </S.ImageContainer>

          {/* <S.ImageContainer>
            <S.Image fluid={sanityWork.mainImage.asset.fluid} alt={sanityWork.title} style={{display: 'none' }} />
            <S.Image fluid={sanityWork.secondImage.asset.fluid} alt={sanityWork.title} />
            <S.Image fluid={sanityWork.thirdImage.asset.fluid} alt={sanityWork.title} />
            <S.Image fluid={sanityWork.fourthImage.asset.fluid} alt={sanityWork.title} />
            <S.Image fluid={sanityWork.fifthImage.asset.fluid} alt={sanityWork.title} />
            <S.Image fluid={sanityWork.sixthImage.asset.fluid} alt={sanityWork.title} />
            <S.Image fluid={sanityWork.seventhImage.asset.fluid} alt={sanityWork.title} />
            <S.Image fluid={sanityWork.eighthImage.asset.fluid} alt={sanityWork.title} />
          </S.ImageContainer> */}

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
      padding: 4% 5%;
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
    position: relative;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    grid-template-rows: repeat(3, auto);
    grid-gap: 3.2vmin;
    align-content: start;
    min-height: 39vw;
    margin-top: 5vmax;
    margin-bottom: 5vmax;
    div {
      transition: all .3s ease;
    }
    > div:hover {
      box-shadow: var(--shadow-one);
      overflow: hidden;
      /* transform: translate3d(0, -0.3vmax, 0) scale(1.05); */
      cursor: pointer;
    }
    > div:first-of-type:hover {
      /* transform: translate3d(0, -1vmax, 0) scale(1.05); */
    }
    .bob {
      border-radius: 10px;
      overflow: hidden;
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
    /* @media (min-width: 480px) and (max-width: 980px) {
      grid-gap: 3vmin;
    } */

    @media (min-width: 980px) {
      grid-column-start: 2;
      grid-row: 1 / span 2;
      grid-gap: 2vmax;
      margin: 0;
      .gatsby-image-wrapper:first-of-type {
        min-height: 35vw;
      }
      .gatsby-image-wrapper {
        max-height: 8vmax;
      }
      .gatsby-image-wrapper:not(:first-child) {
        min-height: 8vmax;
      }
    }
    @media (min-width: 2000px) {
      grid-gap: 40px;
      .gatsby-image-wrapper:first-of-type {
        min-height: 700px;
      }
      .gatsby-image-wrapper {
        max-height: 160px;
      }
      .gatsby-image-wrapper:not(:first-child) {
        min-height: 160px;
      }
    }
    

    @media (max-width: 480px) and (min-height: 600px) {
      grid-gap: 3.7vmin;
    }
  `,
  Image: styled(Image)`
    &.gatsby-image-wrapper:not(:first-child)::after {
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(var(--primary-one-raw), 0.2);
    }
    &.active.gatsby-image-wrapper:not(:first-child)::after,
    &.gatsby-image-wrapper:not(:first-child):hover::after {
      background: none;
    }
  `
}