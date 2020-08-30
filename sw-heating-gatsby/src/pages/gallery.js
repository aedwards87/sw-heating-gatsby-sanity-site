import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { graphql } from "gatsby"
import { Services, Modal } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import Carousel from '../components/Carousel-2.0'
import { useTrail, animated, useTransition } from 'react-spring'
import Layout from "../components/layout"
import SEO from "../components/seo"


export const pageQuery = graphql`
  query GalleryQuery {
    allSanityImages {
      edges {
        node {
          id
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
  }
`


const Gallery = ({ data: { allSanityImages }, location }) => {

  const [index, setIndex] = useState(0)
  const [on, toggle] = useState(false)

  const allImages = allSanityImages.edges.map(({ node: images }) => images)

  const trail = useTrail(allImages.length, {
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 400, friction: 60 }
  })

  const targetSlide = (e) => (
    setIndex(parseInt(e.currentTarget.value))
  )

  const transitionFade = useTransition(on, null, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    config: { tension: 400, friction: 60 }
  })

  const handleClick = useCallback((e) => {
    return [toggle(!on), targetSlide(e)]
  }, [on])

  return (
    <Layout>
      <SEO title="Gallery" />
      <S.Gallery>
        <div>
          <div style={{ marginBottom: '6rem' }}>
            <StyledTitle className="moz" heading>Gallery</StyledTitle>
          </div>

          <S.GalleryImageContainer>
            {trail.map(({ opacity }, i) =>
              <animated.button
                aria-label="Open fullsize image"
                id={allImages[i].id}
                key={i}
                value={i}
                style={{ opacity }}
                onClick={handleClick}
              >
                <S.Image
                  id={allImages[i].id}
                  fluid={allImages[i].image.asset.fluid}
                  alt={allImages[i].title}
                  active={index === i ? true : false}
                />
              </animated.button>
            )}
          </S.GalleryImageContainer>

          {transitionFade.map(({ item, props, key }) =>
            item && (
              <Modal toggle={toggle} key={key} allImages={allImages} index={index} location={location}>
                <Carousel
                  on={on}
                  toggle={toggle}
                  data={allImages}
                  index={index}
                  setIndex={setIndex}
                  animation={props}
                  fromNext={{ opacity: 1, position: 'absolute', transform: 'translate3d(100%,0%,0) scale(1)' }}
                  fromPrev={{ opacity: 1, position: 'absolute', transform: 'translate3d(-100%,0%,0) scale(1)' }}
                  enter={{ opacity: 1, transform: 'translate3d(0%,0%,0) scale(1)' }}
                  leaveNext={{ opacity: 1, transform: 'translate3d(-100%,0%,0) scale(1)' }}
                  leavePrev={{ opacity: 1, transform: 'translate3d(100%,0%,0) scale(1)' }}
                />
              </Modal>
            )
          )}

        </div>
      </S.Gallery>
      <Services />
    </Layout>
  )
}

// pathName={location.pathname}

const S = {
  Gallery: styled.section`
    width: 100%;
    height: 100%;
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: calc(4% + 6.5rem) 5%;
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
      background: ${({ active, hero }) => active || hero ? 'none' : 'rgba(0,0,0,0.3)'};
      transition: all .3s ease;
      opacity: 1;
    }
    &.active.gatsby-image-wrapper:first-child::after {
      opacity: 0;
    }
    `,
  GalleryImageContainer: styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 2vmax;
    align-content: start;
    z-index: 0;
    button {
      background: none;
      border: none;
      border-radius: 10px;
      width: 100%;
      height: 36vh;
    }
    div,
    button {
      transition: all .3s ease;
    }
    > div:hover,
    button:hover,
    button:focus {
      overflow: hidden;
      cursor: pointer;
      transform: translate3d(0, -0.3vmax, 0) scale(1.05);
    }
    button:hover,
    button:focus {
      .gatsby-image-wrapper:first-child::after {
        opacity: 0;
      }
    }
    button:active {
      transform: translate3d(0, 0, 0) scale(1);
    }
    .animated-div {
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      z-index: 99;
    }
    .gatsby-image-wrapper:first-of-type {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    @media (min-width: 480px) and (max-width: 980px) {
      grid-gap: 3.4vmin;
    }
    @media (min-width: 980px) {
      grid-template-rows: repeat(2, auto);
      margin-bottom: 5vmax;
      margin: 0;
      grid-gap: 2vmax;
    }
    @media (min-width: 980px) and (min-height: 1020px) {
      grid-gap: 2vmin;
      .gatsby-image-wrapper:first-of-type {
      }
    }
    @media (min-width: 2000px) {
      grid-gap: 40px;
    }

    @media (max-width: 480px) and (min-height: 600px) {
      grid-gap: 3.7vmin;
    }
  `,
}

export default Gallery
