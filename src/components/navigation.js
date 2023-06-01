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

  for (let index = 0; index < data.links - 1; index++) {
    return (
      <nav className="navigation">
        <Link to={data.links.linkUrl}>{data.links.link}</Link>
      </nav>
    );
  }
};
