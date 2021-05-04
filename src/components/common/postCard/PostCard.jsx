import React from "react";
import Heading from "./../heading/Heading";
import PostMeta from "../postMeta/PostMeta";
import Paragraph from "./../paragraph/Paragraph";
import "./postCard.scss";

const PostCard = ({ title, body, ...rest }) => {
  return (
    <div className="post-card">
      <Heading title={title ? title : ""} />
      <Paragraph text={body ? body : ""} styleName="post-card__post-text" />
      <PostMeta time={"5 years ago"} comments={4} {...rest} />
    </div>
  );
};

export default PostCard;
