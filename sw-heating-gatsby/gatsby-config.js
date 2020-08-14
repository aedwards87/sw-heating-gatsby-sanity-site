require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `SW Heating`,
    description: `Plumbing, heating and gas services`,
    author: `Adam Edwards`,
    // siteUrl: `https://www.example.com`,
    siteUrl: `https://boring-murdock-f3520c.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'z4ilqqhg',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        // projectId: process.env.SANITY_PROJECT_ID,
        // dataset: process.env.SANITY_PROJECT_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        // token: 'skowJfP7FOsDhtTcI3YiEWpaAvkP84BxUqPCsTvIR9WDHSFfxwuZyz2eV9UaLDqjiKjVJzoZvyPJt4Vj2Ryb99TQwyVeZiQjpKhPtEOiCL1hXZgPh5JNdebV0pyaLIyp8KmTHVsz3K8GWvvsLR0U00Vvb2UhzTI7QrRF9rbdmWSMRTvq8Ym6',
        // token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: process.env.SANITY_PROJECT_ID,
    //     dataset: process.env.SANITY_DATASET,
    //     token: process.env.SANITY_TOKEN
    //     // ...
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sw-heating-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}
