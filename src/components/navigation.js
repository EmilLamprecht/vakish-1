import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            navlinks {
              links {
                linkLabel
                linkUrl
              }
            }
          }
        }
      }
    `
  );
  console.log(JSON.stringify(data));
  const links = data.site.siteMetadata.navlinks.links;
  return (
    <nav className="navigation">
      {links && links.map((a) => <Link to={a.linkUrl}>{a.linkLabel}</Link>)}
      <ThemeChanger />
    </nav>
  );
};
