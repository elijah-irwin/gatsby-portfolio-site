module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Gatsby Portfolio Site',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Nunito Sans:300,400,600,700',
            'Caveat:400,500,600',
            'Roboto Mono:400,500',
          ],
        },
      },
    },
  ],
};
