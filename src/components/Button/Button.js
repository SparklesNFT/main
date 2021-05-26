import React from "react";
import "./Button.scss";

const Button = ({ label, type = "text", className, onClick, ...props }) => {
  return (
    <>
      <button className={`btn ${className}`} type={type} onClick={onClick}>
        {label}
      </button>
    </>
  );
};
export default Button;
