import React from "react";
import "./modal-layout.scss";

// import ReactDOM from "react-dom";
// const modalRoot = document.getElementById("modal-root");

const ModalLayout = ({ children }) => {
  return <div className="modal-layout"> {children} </div>;
};

export default ModalLayout;
