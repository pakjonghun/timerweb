import React from "react";
import ButtonPresenter from "./ButtonPresenter";

const Button = ({ text, onClick, isActive, className, endClick }) => {
  return (
    <ButtonPresenter
      endClick={endClick}
      text={text}
      onClick={onClick}
      isActive={isActive}
      className={className}
    />
  );
};

export default Button;
