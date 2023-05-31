import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        links {
          link
          linkURL
        }
      }
    `
  );
  return () => {
    for (let index = 0; index < link.length; index++) {
      <nav className="navigation">
        <Link to={link.links.linkURL}>{link.links.link}</Link>
      </nav>;
    }
  };
};
