import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  const logoUrl = site.siteMetadata.siteUrl + site.siteMetadata.logo;
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en-US" }}>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:url" content={site.siteMetadata.siteUrl} />
        <meta
          property="og:description"
          content={site.siteMetadata.description}
        />
        <meta property="og:type" content="website" />

        {site.siteMetadata.logo && (
          <meta property="og:image" content={logoUrl} />
        )}
        <meta
          name="w3l-domain-verification"
          content="60b639090c559CF_Domain_verify"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={site.siteMetadata.theme.googleFontImport}
          rel="stylesheet"
        />
        <style type="text/css">{`
        body {
          font-family: ${site.siteMetadata.theme.googleFontName};
        }
        body.light a {
          color: ${site.siteMetadata.theme.linkColor};
        }
        body.light a:hover {
          color: ${site.siteMetadata.theme.linkHoverColor};
        }
        body.light .navigation a {
          color: ${site.siteMetadata.theme.navLinkColor};
        }
        body.light .navigation a:hover{
          color: ${site.siteMetadata.theme.navLinkHoverColor};
        }
        body.light { 
          --primary-color: ${site.siteMetadata.theme.primaryColor}; 
          --primary-text-color:${site.siteMetadata.theme.primaryTextColor};
          --primary-link-color:${site.siteMetadata.theme.linkColor};
          --primary-link-hover-color:${site.siteMetadata.theme.linkHoverColor};
          --featured-bg: ${site.siteMetadata.theme.primaryColor};
          --featured-text: #fff;
          --secondary-color: ${site.siteMetadata.theme.secondaryColor};
          --background: ${site.siteMetadata.theme.backgroundColor};
        }
        body.light .button.-primary {
          color: ${site.siteMetadata.theme.linkColor};
          background-color: ${site.siteMetadata.theme.ctaColor};
        }
        body.light .button.-primary:hover {
          color: ${site.siteMetadata.theme.linkColor};
          background-color: ${site.siteMetadata.theme.ctaHoverColor};
        }
        body.dark .button.-primary {
          color: ${site.siteMetadata.theme.darkModeLinkColor};
        }
    `}</style>
      </Helmet>
      <HeroHeader />
      <h2>Blog Posts &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        logo
        theme {
          primaryColor
          secondaryColor
          linkColor
          linkHoverColor
          backgroundColor
          navLinkColor
          navLinkHoverColor
          googleFontImport
          googleFontName
          ctaColor
          ctaHoverColor
        }
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { draft: { eq: false } }
        frontmatter: { template: { eq: "BlogPost" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
