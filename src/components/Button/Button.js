import React from "react";

const Button = ({ label, type = "text", className, ...props }) => {
  return (
    <>
      <button className={className} type={type}>
        {label}
      </button>
    </>
  );
};
export default Button;
