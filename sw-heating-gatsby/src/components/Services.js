import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { StyledTitle } from '../components-styled/index'
import { useStaticQuery, graphql } from "gatsby"
import TitleAnimation from './TitleAnimation'
import { useTrail, animated } from 'react-spring'

const Services = () => {
  const { allSanityWork } = useStaticQuery(
    graphql`
      query ServicesQuery {
        allSanityWork(sort: {fields: order}) {
          edges {
            node {
              title
              order
              slug {
                current
              }
              images {
                title
                image {
                  asset {
                    fluid(maxWidth: 300, maxHeight: 300) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const trail = useTrail(8, {
    from: { opacity: 0, transform: 'translate3d(0,10%,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0%,0)' },
    config: { tension: 150, friction: 50 }
  })

  const allWork = allSanityWork.edges.map(({ node: work }) => work)

  return (
    <S.Services>
      <div>
        <TitleAnimation>
          <StyledTitle id="services" className="moz" >Our services</StyledTitle>
        </TitleAnimation>
        <S.List>
          {trail.map((props, i) => (
            <animated.li key={allWork[i].slug.current} style={props} >
              <Link to={`/${allWork[i].slug.current}`}>
                <S.ImageContainer>
                  <S.Image
                    fluid={allWork[i].images[0].image.asset.fluid}
                    alt={allWork[i].images[0].title}
                  />
                </S.ImageContainer>
                <div className="list-heading-container">
                  <h3>{allWork[i].title}</h3>
                </div>
              </Link>
            </animated.li>
          ))}
        </S.List>

      </div>
    </S.Services>
  )
}

const S = {
  Services: styled.section`
    height: 100%;
    width: 100%;
    background: var(--light-bg);
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: 0 5% 6rem;
      & > div:first-of-type {
        padding-bottom: 6rem;
      }
    }
  `,
  ImageContainer: styled.div`
    overflow: hidden;
    > div {
      height: 100%;
    }
    height: 150px;
    @media (min-width: 500px) {
      height: 200px;
    }
    @media (min-width: 727px) {
      height: 190px;
    }
  `,
  Image: styled(Image)`
    border-radius: 10px 10px 0 0;
  `,
  List: styled.ul`
    list-style: none;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-gap: 2rem;
    @media(min-width: 500px) {
      grid-gap: 2.5rem;
    }
    li {
      border-radius: 10px;
      height: 100%;
      margin: 0;
      padding: 0;
      transition: all 0.3s ease;
    }
    .list-heading-container {
      padding: 14px 26px;
      margin: auto 0;
      height: 100%;
      @media (min-width: 500px) {
        padding: 20px 26px;
      }
    }
    div {
      transition: all 1s ease;
    }
    a:hover div > div, 
    a:focus div > div {
      transform: scale(1.1);
    }
    a h3 {
      font-weight: var(--bolder);
      font-size: 1rem;
      line-height: 1.2;
      color: var(--main-text);
      transition: color 0.3s ease;
      height: 100%;
    }
    a {
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-two);
      background: white;
      :hover,
      :focus {
        box-shadow: var(--shadow-one);
        transform: translate(0, -10px);
        outline-offset: .3rem;
      }
      :hover h3,
      :focus h3 {
        color: var(--primary-two);
      }
    }
    @media(min-width: 1500px) {
      a h3 {
        font-weight: var(--bolder);
        font-size: 1.15rem;
      }
    }
    @media(min-width: 1820px) {
      grid-gap: 4rem;
    }
  `
}


export default Services
