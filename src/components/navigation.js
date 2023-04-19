import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        site {
          siteMetadata {
            links {
              linkLabel
              linkUrl
            }
          }
        }
      }
    `}
    render={(data) => (
      <nav className="navigation">
        <Link to={data.site.siteMetadata.links.linkUrl}>
          {data.site.siteMetadata.links.linkLabel}
        </Link>
      </nav>
    )}
  />
);
