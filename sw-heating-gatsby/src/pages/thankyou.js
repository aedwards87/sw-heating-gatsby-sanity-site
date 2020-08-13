import React from 'react'
import styled from 'styled-components'
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import Layout from "../components/layout"
import SEO from "../components/seo"


const thankYou = () => {
  return (
    <Layout>
      <SEO title="Thank you" />
      <S.ThankYou>
        <div>
          <div style={{ marginBottom: '6rem' }}>
            <StyledTitle id="thank-you" heading>Thank you</StyledTitle>
          </div>
          <div>
            <p>Your form has been sent</p>
          </div>
        </div>
      </S.ThankYou>
      <Services />
    </Layout>
  )
}


const S = {
  ThankYou: styled.section`
    width: 100%;
    height: 100%;
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: calc(4% + 6.5rem) 5%;
    }
    @media(min-width: 850px) {
      > div {
        padding-bottom: 7rem;
      }
    }
  `
}


export default thankYou
