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
  return data.forEach((link) => {
    console.log(link);
    <nav className="navigation">
      <Link to={link.links.linkURL}>{link.links.link}</Link>
    </nav>;
  });
};
