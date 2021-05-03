import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <button type="btn--sm" text="New" />
      <button type="btn--sm" text="Past" />
    </nav>
  );
};

export default Nav;
