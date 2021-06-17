import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
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
          --featured-bg: #493b8a;
          --featured-text: #fff;
          --secondary-color: ${site.siteMetadata.theme.primaryColor};
          --background: ${site.siteMetadata.theme.backgroundColor};
        }
    `}</style>
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0,
          }}
        >
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" data-netlify="true" method="post">
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="name" id="w3lName" />
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="email" id="w3lSender" />
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="subject" id="w3lSubject" />
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="message" id="w3lMessage"></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
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
  }
`;
