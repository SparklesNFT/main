import React from "react";
import { ButtonWrapper } from "./Button-style";

const Button = ({ label, type = "text", className, onClick, ...props }) => {
  return (
    <>
      <ButtonWrapper type={type} onClick={onClick} {...props}>
        {label}
      </ButtonWrapper>
    </>
  );
};
export default Button;
