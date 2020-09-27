import React from "react";
import "./PrimaryButton.css";

const Button = ({ onRouteChange, value, page, theme }) => {
  return (
    <button
      className={`btn btn-primary ${theme}`}
      onClick={() => {
        onRouteChange(page)} 
      }
    >
      {value}
    </button>
  );
};

export default Button;
