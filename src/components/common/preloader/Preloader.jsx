import React from "react";
import "./preloader.scss";
import Svg from "./../svg/Svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <Svg cssClassName="logo" iconId="logo-one" />
    </div>
  );
};

export default Preloader;
