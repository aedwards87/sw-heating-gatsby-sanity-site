require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `SW Heating`,
    description: `Plumbing, heating and gas services`,
    author: `Adam Edwards`,
    siteUrl: `https://www.swheatingandsons.co.uk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        overlayDrafts: !process.env.production,
        watchMode: true,
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sw-heating-and-sons`,
        short_name: `SW Heating`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        description: `Plumbing, heating and gas services`,
        // display: `minimal-ui`,
        display: `standalone`,
        icon: `src/images/sw-heating-app-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
