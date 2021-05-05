import React from "react";
import "./form.scss";

const TextArea = ({ label, error, ...rest }) => {
  return (
    <div className="input__wrapper">
      <div className="input-top">
        <label htmlFor="" className="input__label">
          {label ? label : ""}
        </label>

        {error ? <span className="input__error"> {error} </span> : ""}
      </div>
      <div className="input__holder input__holder--textarea ">
        <textarea
          className="input__item input__item--textarea"
          {...rest}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
