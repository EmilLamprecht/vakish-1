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

  return (
    <nav className="navigation">
      {data &&
        data.links &&
        data.links.map((a) => <Link to={a.linkUrl}>{a.link}</Link>)}
    </nav>
  );
};
