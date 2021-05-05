import React from "react";
import './form.scss'

const Input = ({ label, error, type = "text", ...rest }) => {
  return (
    <div className="input__wrapper">
      <div className="input-top">
        <label htmlFor="" className="input__label">
          
        </label>

        {error ? <span className="input__error"> {error} </span> : ""}
      </div>
      <div className="input__holder">
        <input
          type={type}
          placeholder={label}
          {...rest}
          className="input__item"
        />
      </div>
    </div>
  );
};

export default Input;
