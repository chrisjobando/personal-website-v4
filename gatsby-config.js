/**
 * @format
 */

module.exports = {
  siteMetadata: {
    url: 'chrisjobando.com',
    title: 'Christopher Obando',
    author: 'Christopher Obando',
    description: "Christopher Obando's Portfolio Website",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /vectors/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Mukta`,
            variants: [`400`, `600`],
          },
          {
            family: `Crimson Text`,
            variants: [`400`, `600`],
          },
        ],
        formats: [`woff`, `woff2`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        theme_color: `#FFF1E8`,
        short_name: `obando-site`,
        background_color: `#FFF1E8`,
        icon: `static/favicon.svg`,
        name: `obando-personal-site-v4`,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./types/graphql.d.ts`,
        codegenConfig: {
          typesPrefix: '',
          maybeValue: 'T',
          immutableTypes: true,
          preResolveTypes: true,
          addUnderscoreToArgsType: false,
          avoidOptionals: { object: true },
        },
        codegenPlugins: [
          {
            resolve: 'typescript',
            options: {
              namingConvention: `lower-case#lowerCase`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-minify-html`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-remove-trailing-slashes`,
  ],
};
