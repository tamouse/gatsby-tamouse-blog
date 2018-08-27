const config = require('./data/SiteConfig.js')
const path = require('path')
const urljoin = require('urljoin')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.userName,
    description: config.siteDescription,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-component',
          'gatsby-remark-attr',
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                verse: {
                  classes: ['verse'],
                },
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-tags',
      options: {
        templatePath: path.join(__dirname, 'src/templates/tag.js'),
      },
    },
  ],
}
