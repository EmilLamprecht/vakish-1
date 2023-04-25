import React from "react";
import { Link } from "gatsby";
import moment from "moment";

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
      <div className="post-meta">
        {moment(post.gitAuthorTime).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
    </header>
  </article>
);
export default PostLink;
