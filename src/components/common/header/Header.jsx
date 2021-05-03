import React from "react";
import Svg from "../svg/Svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Svg cssClassName="logo" iconId="logo-one" />
    </header>
  );
};

export default Header;
