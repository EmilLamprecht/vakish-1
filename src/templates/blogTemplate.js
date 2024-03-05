import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FastCommentsCommentWidget } from "fastcomments-react";

import moment from "moment";

export default function Template({
  data,
  location, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;

  const { frontmatter, html, fields } = markdownRemark;
  const url = location.href ? location.href : "";
  const imageUrl = siteMetadata.siteUrl + frontmatter.thumbnail;
  const logoUrl = siteMetadata.siteUrl + siteMetadata.logo;
  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en-US" }}>
        <title>
          {frontmatter.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={frontmatter.thumbnail ? imageUrl : logoUrl}
        />
        {!!frontmatter.canonical && isValidHttpUrl(frontmatter.canonical) && (
          <link rel="canonical" href={frontmatter.canonical} />
        )}
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
        body.dark a {
          color: ${site.siteMetadata.theme.darkModeLinkColor};
        }
        body.dark a:hover {
          color: ${site.siteMetadata.theme.darkModeLinkHoverColor};
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
        .button {
          font-weight: bold;
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
        logo
        siteUrl
        theme {
          primaryColor
          secondaryColor
          linkColor
          linkHoverColor
          darkModeLinkColor
          darkModeLinkHoverColor
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
        canonical
      }
      fields {
        gitAuthorTime(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
