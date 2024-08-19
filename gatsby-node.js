const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/blockchain-for-financial-inclusion`,
    toPath: `https://mintblue.com/blockchain-for-financial-inclusion/`,
   })

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const staticPageTemplate = path.resolve(
    `src/templates/staticPageTemplate.js`
  );
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { draft: { eq: false } } } # add
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component:
        node.frontmatter.template === "StaticPage"
          ? staticPageTemplate
          : blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

const { execSync } = require("child_process");

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const gitAuthorTime = execSync(
      `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    ).toString();
    actions.createNodeField({
      node,
      name: "gitAuthorTime",
      value: gitAuthorTime,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type links implements Node {
      link: String, 
      linkURL: String,
    }
  `;
  createTypes(typeDefs);
};
