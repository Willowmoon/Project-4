const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      prompt: allContentfulPrompts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.prompt.edges.forEach(({ node }) => {
    createPage({
      path: `/prompts/${node.slug}`,
      component: path.resolve("./src/templates/prompt-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
