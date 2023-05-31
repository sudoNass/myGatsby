/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Nasser's resume",
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
  resolve: {
    alias: {
      'styled-components': require.resolve('styled-components'),
    },
  };
