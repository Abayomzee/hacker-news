import React from "react";
import "./paragraph.scss";

const Paragraph = ({ text, styleName }) => {
  return <p className={`paragraph ${styleName}`}>{text}</p>;
};

export default Paragraph;
