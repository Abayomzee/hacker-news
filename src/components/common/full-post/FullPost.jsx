import React from "react";
import Heading from "./../heading/Heading";
import PostMeta from "../postMeta/PostMeta";
import Paragraph from "./../paragraph/Paragraph";
import Button from "./../button/Button";
import "./full-post.scss";

const FullPost = ({ title, text }) => {
  return (
    <>
      <div className="full-post">
        <Button type='btn--sm' text='Back' />
        <PostMeta time="1 min ago" comments="50" />
        <Heading title={title} />
        <Paragraph text={text} styleName="full-post__post-text" />
      </div>
    </>
  );
};

export default FullPost;
