import React from "react";
import "./Input.scss";
const Input = ({
  label,
  type = "text",
  id,
  register,
  required,
  error,
  ...props
}) => {
  return (
    <div className="input-component">
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} type={type} {...props} />
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Input;
