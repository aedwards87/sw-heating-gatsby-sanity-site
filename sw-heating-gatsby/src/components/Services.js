import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby"
import { StyledTitle } from '../components-styled/index'
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
  const { allSanityWork } = useStaticQuery(
    graphql`
      query ServicesQuery {
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
      }
    `
  )

  return (
    <S.Services>
      <div>
        <div style={{ marginBottom: '6rem' }}>
          <StyledTitle id="services" >Our services</StyledTitle>
        </div>

        <S.List>
          {allSanityWork.edges.map(({ node: work }) => (
            <li key={work.slug.current}>
              <Link to={`/${work.slug.current}`}>
                <S.ImageContainer>
                  <S.Image
                    fluid={work.mainImage.asset.fluid}
                    alt={work.title}
                  />
                </S.ImageContainer>
                <div className="list-heading-container">
                  <h3>{work.title}</h3>
                </div>
              </Link>
            </li>
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
      padding: 0 5% ${({ main }) => main ? '6rem' : '2rem'};
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
      overflow: hidden;
      height: 100%;
      margin: 0;
      padding: 0;
      transition: all 0.3s ease;
      box-shadow: var(--shadow-two);
      background: white;
      :hover,
      :focus {
        box-shadow: var(--shadow-one);
        transform: translate(0, -10px);
      }
      :hover a h3,
      :focus a h3 {
        color: var(--primary-two);
      }
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
