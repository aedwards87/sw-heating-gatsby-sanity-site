/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useLayoutEffect, useRef, createContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import Footer from "./footer"
import "./layout.css"

export const UserContext = createContext()

const Layout = ({ allSanityWork, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [navBarHeight, setNavBarHeight] = useState('')
  const ref = useRef(null)
  useLayoutEffect(() => {
    try { setNavBarHeight(ref.current.clientHeight) }
    catch { return }
  }, [ref])

  return (
    <UserContext.Provider value={{ 
        navBarHeight: navBarHeight,  
        allSanityWork: allSanityWork
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} ref={ref} />
      <div
        style={{
          margin: `${navBarHeight}px auto 0`,
        }}
      >
        <main>{children}</main>
      </div>
      {/* <Footer navBarHeight={navBarHeight} /> */}
    </UserContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
