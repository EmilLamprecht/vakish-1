import React from "react";
import { Link } from "gatsby";

const { markdownRemark } = data;
const { gitAuthorTime } = markdownRemark.fields;
const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{gitAuthorTime}</div>
    </header>
  </article>
);
export default PostLink;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        gitAuthorTime
      }
    }
  }
`;
