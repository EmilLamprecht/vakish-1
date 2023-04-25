import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import moment from "moment";

import { DiscussionEmbed } from "disqus-react";

const disqusConfig = {
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: slug, title },
};


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;

  const { frontmatter, html, fields } = markdownRemark;

  const gtm = () => {};
  if (data.site.siteMetadata.gtm) {
    return (
      <Fragment>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${pdata.site.siteMetadata.gtm}`}
          strategy="off-main-thread"
          forward={[`gtag`]}
        />
        <Script
          id="gtag-config"
          strategy="off-main-thread"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(){ window.dataLayer.push(arguments);}
      gtag('js', new Date()); 
      gtag('config', '${data.site.siteMetadata.gtm}', { send_page_view: false })`,
          }}
        />
        <div>{children}</div>
      </Fragment>
    );
  }


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
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">
                {moment(fields.gitAuthorTime).format("MMMM Do YYYY, h:mm:ss a")}
              </div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <DiscussionEmbed {...disqusConfig} />
      </div>
      {gtm()}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        gtm
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
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
      fields {
        gitAuthorTime
      }
    }
  }
`;
