import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
import { Services, Feedback } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import Form from '../components/Form'
import Layout from "../components/layout"
import SEO from "../components/seo"


const Reviews = () => {

  const inputTitles = [
    {
      name: 'Name',
      type: 'text',
    },
    {
      name: 'Email',
      type: 'email',
    },
    {
      name: 'Message',
      type: 'textarea',
      required: true
    }
  ]

  return (
    <Layout>
      <SEO title="Reviews" />
      <S.Reviews>
        <Feedback />
        <div>
          <div style={{ marginBottom: '6rem' }}>
            <StyledTitle id="reviews">We would love <br />to hear from you</StyledTitle>
          </div>
          <Form
            inputTitles={inputTitles}
            message="Feel free to leave us a review, your reviews help us to ensure we provide a quality service every visit."
          />
        </div>
      </S.Reviews>
      <Services />
    </Layout>
  )
}


const S = {
  Reviews: styled.section`
    width: 100%;
    height: 100%;
    > div {
      max-width: 1900px;
      margin: 0 auto;
      padding: 0 5% 14vmax;
    }
    @media(min-width: 850px) {
      > div {
        padding-bottom: 7rem;
      }
    }
  `

}


export default Reviews
