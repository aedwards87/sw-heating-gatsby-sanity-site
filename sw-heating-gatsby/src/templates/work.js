import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Image from 'gatsby-image'
import PortableText from '@sanity/block-content-to-react'
import styled from 'styled-components'
import Layout from "../components/layout"
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import { useTransition, useTrail, animated } from 'react-spring'
import { ArrowButton } from "../assetsjs/index"


export const query = graphql`
  query ($slug: String) {
    sanityWork(slug: {current: {eq: $slug}}) {
      title
      _rawDescription
      images {
        title
        image {
          asset {
            id
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default ({ data: { sanityWork } }) => {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const sanityImages = sanityWork.images.map(node => node)

  // const sanityWorkImages = Object.keys(sanityWork).filter(images => images.includes('Image'))

  const nextSlide = useCallback(() => setIndex(state => (state + 1) % sanityImages.length), [sanityImages.length])
  const prevSlide = useCallback(() => setIndex(state => (state === 0) ? state = sanityImages.length - 1 : (state - 1) % sanityImages.length), [sanityImages.length])

  const handleHover = useCallback(() => setIsHovered(state => !state), [])
  // const handleHoverLeave = useCallback(() => setIsHovered(false), [])
  const handleFocus = useCallback(() => setIsFocused(state => !state), [])
  // const handleBlur = useCallback(() => setIsFocused(false), [])

  const targetSlide = (e) => (
    setIndex(parseInt(e.currentTarget.value))
  )



  const trail = useTrail(sanityImages.length, {
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 400, friction: 60 }
  })

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 400, friction: 30 }
  })

  return (
    <Layout>
      <SEO title={sanityWork.title} />
      <S.TemplateContainer>
        <div>
          <div
          // style={{ marginBottom: '6rem' }}
          >
            <StyledTitle className="moz" as="h1" heading>{sanityWork.title}</StyledTitle>
          </div>

          <div>
            <PortableText
              blocks={sanityWork._rawDescription}
            />
          </div>

          <S.ImageWrapper>

            <S.HeroImageContainer >
              {transitions.map(({ item, props, key }) =>
                <animated.div
                  className={`animated-div ${isHovered ? 'hovered' : null} ${isFocused ? 'focused' : null}`}
                  style={props}
                  key={key}
                >
                  <S.Image
                    hero
                    fluid={sanityImages[item].image.asset.fluid}
                    alt={sanityImages[item].title}
                    onClick={nextSlide}
                  />
                </animated.div>
              )}
              <S.Button
                previous
                onClick={prevSlide}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onFocus={handleFocus}
                onBlur={handleFocus}
              >
                <ArrowButton />
              </S.Button>
              <S.Button
                next
                onClick={nextSlide}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onFocus={handleFocus}
                onBlur={handleFocus}
              >
                <ArrowButton flip />
              </S.Button>
            </S.HeroImageContainer>

            <S.GalleryImageContainer>
              {trail.map(({ opacity }, i) =>
                <animated.button
                  style={{ opacity }}
                  value={i}
                  onClick={targetSlide}
                  key={sanityImages[i].image.asset.id}
                >
                  <S.Image
                    fluid={sanityImages[i].image.asset.fluid}
                    alt={sanityImages[i].title}
                    active={index === i ? true : false}
                  />
                </animated.button>
              )}
            </S.GalleryImageContainer>

          </S.ImageWrapper>
        </div>
      </S.TemplateContainer>
      <Services />
    </Layout >
  )
}




const S = {
  TemplateContainer: styled.section`
    > div {
      margin: 0 auto;
      max-width: 1900px;
      padding: calc(4% + 5rem) 5%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      grid-column-gap: 10%;
      grid-row-gap: 5rem;
    };
    @media (min-width: 480px) {

    }
    @media (min-width: 980px) {
      > div {
        grid-template-columns: 1fr 1fr;
        padding: calc(4% + 6rem) 5% 7rem;
        /* grid-row-gap: 0; */
      }
    }
  `,
  ImageWrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70vw 1fr;
    grid-gap: 3.4vmin;
    margin-top: -3rem;
    @media (min-width: 480px) {
      grid-template-rows: 55vw 1fr;
    }
    @media (min-width: 980px) {
      grid-column-start: 2;
      grid-row: 1 / -1;
      display: grid;
      grid-template-rows: 35vw 1fr;
      grid-gap: 2vmax;
      margin: 0;
    }
    @media (min-width: 2000px) {
      grid-template-rows: 700px 1fr;
      grid-gap: 40px;
    }
  `,
  HeroImageContainer: styled.div`
    position: relative;
    /* margin-top: 5vmax; */
    button {
      background: none;
      border: none;
      border-radius: 10px;
      outline: none;
    }
    div,
    button {
      transition: all .3s ease;
    }
    .hovered {
      overflow: hidden;
      cursor: pointer;
      transform: translate3d(0, -0.3vmax, 0) scale(1.05);
    }
    .focused {
      outline: rgb(47, 90, 189) auto 5px; 
      transform: translate3d(0, -0.3vmax, 0) scale(1.05);
    }
    .animated-div {
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      z-index: 99;
    }
    &, .gatsby-image-wrapper:first-of-type {
      min-height: 70vw;
      max-height: 70vw;
      border-radius: 10px;
    }
    @media (min-width: 480px) {
      &, .gatsby-image-wrapper:first-of-type {
        min-height: 55vw;
        max-height: 55vw;
        border-radius: 10px;
      }
      &, .gatsby-image-wrapper {
        max-height: 15vmax;
      }
    }
    @media (min-width: 980px) {
      /* min-height: 39vw; */
      margin: 0;
      &, .gatsby-image-wrapper:first-of-type {
        min-height: 35vw;
        max-height: 35vw;
      }
    }
    @media (min-width: 2000px) {
      &, .gatsby-image-wrapper:first-of-type {
        min-height: 700px;
        max-height: 700px;
      }
    }
  `,
  Button: styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${({ next }) => next && 0};
    left: ${({ previous }) => previous && 0};
    width: 50%;
    height: 100%;
    border: 0;
    z-index: 99;
    color: white;
    display: flex;
    align-items: center;
    justify-content: ${({ next }) => next ? 'flex-end' : 'flex-start'};
    padding: 0 3% 0 3%;
    :active svg {
      transform: ${({ next }) => next ?
      'translate3d(-1.3vmax, 0, 0) scale(-.6)' :
      'translate3d(1.3vmax, 0, 0) scale(.6)'};
    }
    svg { 
      display: block; 
      transition: transform .3s ease;
      transform: ${({ next }) => next ?
      'translate3d(0.3vmax, 0, 0) scale(-0.9)' :
      'translate3d(-0.3vmax, 0, 0) scale(.9)'};
    }
    @media(min-width: 480px) {
      /* padding: 0 ${({ next }) => next ? '7%' : 0} 0 ${({ next }) => next ? 0 : '7%'}
      ; */
      padding: 0 5% 0 5%;
      :active svg {
        transform: ${({ next }) => next ?
      'translate3d(-0.3vmax, 0, 0) scale(-1)' :
      'translate3d(0.3vmax, 0, 0) scale(1)'};
      }
      :hover,
      :focus {
        cursor: pointer;
        transform: ${({ next }) => next ?
      'translate3d(0.6vmax, -0.3vmax, 0) scale(1.05)' :
      'translate3d(-0.6vmax, -0.3vmax, 0) scale(1.05)'};
        span { display: block; }
        svg { display: block; }
      }
      svg {
        display: none; 
        transform: ${({ next }) => next ?
      'translate3d(0.3vmax, 0, 0) scale(-1.2)' :
      'translate3d(-0.3vmax, 0, 0) scale(1.2)'};
      }
    }
    @media(min-width: 980px) {
      padding: 0 7% 0 7%;
    }

  `,
  GalleryImageContainer: styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, minmax(50px, 1fr));
    grid-gap: 2vmax;
    align-content: start;
    z-index: 0;
    button {
      background: none;
      border: none;
      border-radius: 10px;
    }
    div,
    button {
      transition: all .3s ease;
    }
    > div:hover,
    > div:focus,
    button:hover,
    button:focus {
      overflow: hidden;
      cursor: pointer;
      transform: translate3d(0, -0.3vmax, 0) scale(1.05);
    }
    button:active {
      transform: translate3d(0, 0, 0) scale(1);
    }
    button:hover,
    button:focus {
      .gatsby-image-wrapper:first-child::after {
        opacity: 0;
      }
    }
    .animated-div {
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      z-index: 99;
    }
    .gatsby-image-wrapper:first-of-type {
      min-height: 18vw;
      max-height: 18vw;
      border-radius: 10px;
    }
    @media (min-width: 480px) and (max-width: 980px) {
      grid-gap: 3.4vmin;
    }
    @media (min-width: 980px) {
      grid-template-rows: repeat(2, auto);
      /* min-height: 39vw; */
      margin-bottom: 5vmax;
      margin: 0;
      grid-gap: 2vmax;
      .gatsby-image-wrapper:first-of-type {
        max-height: 8vmax;
        min-height: 8vmax;
      }
    }
    @media (min-width: 980px) and (min-height: 1020px) {
      grid-gap: 2vmin;
      .gatsby-image-wrapper:first-of-type {
        max-height: 8vmin;
        /* min-height: 8vmin; */
      }
    }
    @media (min-width: 2000px) {
      grid-gap: 40px;
      .gatsby-image-wrapper:first-of-type {
        max-height: 160px;
        min-height: 160px;
      }
    }

    @media (max-width: 480px) and (min-height: 600px) {
      grid-gap: 3.7vmin;
    }
  `,
  Image: styled(Image)`
    border: ${({ active }) => active ? '3px solid var(--primary-one)' : null};
    border: ${({ hero }) => hero && 'none'};
    &.gatsby-image-wrapper:first-child::after {
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ active, hero }) => active || hero ? 'none' : 'rgba(0,0,0,0.5)'};
      transition: all .3s ease;
      opacity: 1;
    }
    &.active.gatsby-image-wrapper:first-child::after {
      opacity: 0;
    }
  `
}