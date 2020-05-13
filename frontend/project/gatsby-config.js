module.exports = {
  siteMetadata: {
    title: `The Story Of`,
    description: `Accessible website that allows voice recording and saving of clips with the intention to send recordings to family members as keepsakes.`,
    author: `@douglasshmuglas`,
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
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://damp-coast-29233.herokuapp.com/prompt"],
      },
    },
  ],
}
