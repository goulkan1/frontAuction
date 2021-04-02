import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <div className="imput-wrapper">
      <p className="label">{label}</p>
      <input className="input" {...rest}></input>
    </div>
  );
};

export default Input;
