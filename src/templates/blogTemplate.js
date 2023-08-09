import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FastCommentsCommentWidget } from "fastcomments-react";

import moment from "moment";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;

  const { frontmatter, html, fields } = markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
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
          --featured-bg: #493b8a;
          --featured-text: #fff;
          --secondary-color: ${site.siteMetadata.theme.primaryColor};
          --background: ${site.siteMetadata.theme.backgroundColor};
        }
    `}</style>
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
            </div>
          )}
          <div className="post-meta">
            <p>By {frontmatter.author}</p>
            <p>
              Last Update on:{" "}
              {moment(fields.gitAuthorTime).format("MMMM Do YYYY")}
            </p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <div className="blog-post-comments">
          <FastCommentsCommentWidget
            tenantId={site.siteMetadata.accountIds.fastCommentsId}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
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
        }
        accountIds {
          fastCommentsId
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        thumbnail
        metaDescription
      }
      fields {
        gitAuthorTime(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
