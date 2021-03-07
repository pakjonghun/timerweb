import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  margin: 10px;
  padding: 11px 25px;
  background-color: ${({ theme }) => theme.blueColor};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
  position: absolute;
  transition: all 0.1s ease-out;
`;

//확장 가능한 공통 버튼
const CommonButton = ({ text, onClick, className }) => (
  <Btn onClick={onClick} className={className}>
    {text}
  </Btn>
);

export default CommonButton;
