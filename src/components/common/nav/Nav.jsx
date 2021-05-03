import React from "react";
import Button from "./../button/Button";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <Button type="btn--sm" text="New" />
      <Button type="btn--sm" text="Past" />
    </nav>
  );
};

export default Nav;
