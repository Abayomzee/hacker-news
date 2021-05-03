import React from "react";
import "./button.scss";

const Button = ({ type, text, handleClick }) => {
  return (
    <button
      className={`btn ${type}`}
      onClick={handleClick ? () => handleClick() : null}
    >
      {text}
    </button>
  );
};

export default Button;
