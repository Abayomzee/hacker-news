import React from "react";
import { images } from "../../../utils/images";
import "./svg.scss";

const Svg = ({ cssClassName, iconId }) => {
  return (
    <svg className={cssClassName}>
      <use xlinkHref={`${images.sprite}#${iconId}`}></use>
    </svg>
  );
};

export default Svg;
