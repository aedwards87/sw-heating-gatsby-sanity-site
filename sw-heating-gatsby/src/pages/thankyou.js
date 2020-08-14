import React from 'react'
import styled from 'styled-components'
import { Services } from '../components/index'
import { StyledTitle } from '../components-styled/index'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"



const thankYou = ({ location }) => {
  console.log(location)

  return (
    <Layout>
      <SEO title="Thank you" />
      <S.ThankYou>
        <div>
          <div style={{ marginBottom: '5rem' }}>
            <StyledTitle id="thank-you" heading>Thank you</StyledTitle>
          </div>
          <div>
            {(location.origin === '/reviews') ?
              <p>Your enquiry has successfully been sent, a member of our team will endeavour to respond within the next 48hours. Alternatively, if your matter is urgent, please refer to our <Link to="/thankyou/#footer" style={{ color: 'var(--primary-two' }}>contact details <span>→</span></Link></p>
              :
              <p>We appreciate you taking the time to send us a review, we look forward to reading it.</p>
            }
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
    a:hover > span {
        transform: translate3d(10px, 0, 0);
      }
      a {
        font-weight: var(--bold);
        > span {
          display: inline-block;
          transition: transform 0.3s ease;
        }
      }
    @media(min-width: 850px) {
      > div {
        padding-bottom: 4rem;
      }
    }
  `
}


export default thankYou
