/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fpzm9761a0p3`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    }
],
  siteMetadata: {
    title: "Gatsby Intro",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, alias.',
    author: 'cris a',
    data: [ "item1", "item2", "item3"],
    person: {
      name: "Jon",
      age: '37'
    }
  }
}
