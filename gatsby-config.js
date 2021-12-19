module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Gatsby Portfolio Site',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mak Irwin`,
        short_name: `Mak Irwin`,
        start_url: `/`,
        background_color: `#dedfe1`,
        theme_color: `#dedfe1`,
        display: `standalone`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito Sans\:300,400,600,700`,
          `Caveat\:400,500,600`,
          `Roboto Mono\:400,500`,
        ],
        display: 'block',
      },
    },
  ],
};
