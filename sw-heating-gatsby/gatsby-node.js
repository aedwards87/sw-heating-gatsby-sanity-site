/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityWork {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const works = result.data.allSanityWork.edges.map(({ node }) => node)

  works.forEach(work => {
    actions.createPage({
      path: work.slug.current,
      component: path.resolve('./src/templates/work.js'),
      context: {
        slug: work.slug.current
      }
    })
  })

}
