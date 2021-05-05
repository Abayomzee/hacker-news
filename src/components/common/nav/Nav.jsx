import React from "react";
import Button from "./../button/Button";
import "./nav.scss";

const Nav = ({ handleClick }) => {
  return (
    <nav className="nav">
      <Button type="btn--sm" text="Create post" handleClick={handleClick} />
    </nav>
  );
};

export default Nav;
