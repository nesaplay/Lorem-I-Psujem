module.exports = {
  siteMetadata: {
    title: "Lorem I Psujem",
    author: "Nenad Radovanovic",
    description: "Kao lorem ipsum... ali masnije. - Lorem I Psujem"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
