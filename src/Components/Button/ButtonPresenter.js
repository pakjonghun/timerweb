import React from "react";
import styled from "styled-components";
import { cssReturnValue } from "../../utils";

const Btn = styled.div`
  margin: 10px;
  padding: 11px 25px;
  background-color: ${({ theme }) => theme.blueColor};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
  position: absolute;
  transition: all 0.1s ease-out;
`;

const StartBtn = styled(Btn)`
  z-index: 1;
`;

const StopBtn = styled(Btn)`
  background-color: ${({ theme }) => theme.redColor};
`;

const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.alignCenter};
  width: 100%;
  height: 10%;
  ${StartBtn} {
    transform: ${({ isActive }) =>
      cssReturnValue(isActive, "translateX(-55%);", "translateX(-55%);", "")};
  }

  ${StopBtn} {
    opacity: ${({ isActive }) => cssReturnValue(isActive, 1, 1, 0)};
    transform: ${({ isActive }) =>
      cssReturnValue(isActive, "translateX(55%);", "translateX(55%);", "")};
    &:active {
      opacity: 0.7;
    }
  }
`;

const ButtonPresenter = ({ text, onClick, className, isActive, endClick }) => {
  return (
    <Container isActive={isActive}>
      <StartBtn onClick={onClick} className={className}>
        {text}
      </StartBtn>
      <StopBtn onClick={endClick}>종료</StopBtn>
    </Container>
  );
};

export default ButtonPresenter;
