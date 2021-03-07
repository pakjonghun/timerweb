import React from "react";
import ButtonPresenter from "./ButtonPresenter";

//버튼 컨테이너 props 중간 전달 역할 및 추가 기능추가용 컨테이너
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
