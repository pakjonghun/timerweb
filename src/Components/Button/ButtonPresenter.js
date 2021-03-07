import React from "react";
import styled from "styled-components";
import { cssReturnValue } from "../../utils";
import CommonButton from "../CommonButton";

const StartBtn = styled(CommonButton)``;

const StopBtn = styled(CommonButton)``;

//컨테이너 에 부여된 isActive prop 을 모든 버튼이 같이 사용함.
const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.alignCenter};
  width: 100%;
  height: 10%;
  ${StartBtn} {
    z-index: 1;
    transform: ${({ isActive }) =>
      cssReturnValue(isActive, "translateX(-55%);", "translateX(-55%);", "")};
  }

  ${StopBtn} {
    background-color: ${({ theme }) => theme.redColor};
    opacity: ${({ isActive }) => cssReturnValue(isActive, 1, 1, 0)};
    transform: ${({ isActive }) =>
      cssReturnValue(isActive, "translateX(55%);", "translateX(55%);", "")};
    &:active {
      opacity: 0.8;
    }
  }
`;

//타이머용 버튼 컴포넌트
const ButtonPresenter = ({ text, onClick, className, isActive, endClick }) => {
  return (
    <Container isActive={isActive}>
      <StartBtn text={text} onClick={onClick} className={className}></StartBtn>
      <StopBtn text={"종료"} onClick={endClick} />
    </Container>
  );
};

export default ButtonPresenter;
