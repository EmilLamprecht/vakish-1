import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            logo
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          {!data.site.siteMetadata.logo && (
            <Link to="/">{data.site.siteMetadata.title}</Link>
          )}
          {!!data.site.siteMetadata.logo && (
            <Link to="/">
              <img
                className="logo"
                src={data.site.siteMetadata.logo}
                alt={data.site.siteMetadata.title}
              />
              <img
                className="logo mobile"
                src="/icons/icon-256x256.png"
                alt={data.site.siteMetadata.title}
              />
            </Link>
          )}
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} &bull; Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://www.siliconrhino.io/">Silicon Rhino</a> &{" "}
          <a href="https://growth-mechanics.com/">Growth Mechanics</a>
        </p>
      </footer>
    </div>
  );
};
