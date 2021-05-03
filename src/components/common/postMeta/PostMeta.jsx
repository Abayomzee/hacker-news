import React from "react";
import Svg from "../svg/Svg";
import "./postMeta.scss";

const PostMeta = ({ time, comments, id, handleDelete }) => {
  return (
    <div className="post-meta">
      <span className="post-time">
        <Svg cssClassName="post-time__icon" iconId="icon-clock" />
        {time}
      </span>
      <span>|</span>
      <span>{comments} comments</span>

      <span className="post__delete" onClick={() => handleDelete(id)}>
        <i className="far fa-trash-alt"></i> Delete post
      </span>
    </div>
  );
};

export default PostMeta;
