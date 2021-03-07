import React from "react";
import styled from "styled-components";
import { StringcharAt } from "../../utils";
import Button from "../Button";

const Container = styled.div`
  ${(props) => props.theme.fullWindowPercent};
  ${(props) => props.theme.alignCenter};
  flex-direction: column;
`;

const Time = styled.div``;

//숫자 흔들림 방지를 위한 글자 크기 와 너비 비율 조정(폰트사이즈, 그리드)
const TimeBox = styled.div`
  width: 15vw;
  font-size: 2.4rem;
  text-align: center;
  display: grid;
  grid-template-columns: 1.2fr 0.5fr 1.2fr 0.5fr 1.2fr;
  ${Time} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

//숫자흔들림 현상 방지를 위해 grid 및 숫자별 태그 부여
const TimerPresenter = ({
  second,
  minute,
  hour,
  onClick,
  isActive,
  endClick,
}) => {
  return (
    <Container>
      <TimeBox>
        <Time>
          <div>{StringcharAt(hour, 0)}</div>
          <div>{StringcharAt(hour, 1)}</div>
        </Time>
        <div>:</div>
        <Time>
          <div>{StringcharAt(minute, 0)}</div>
          <div>{StringcharAt(minute, 1)}</div>
        </Time>
        <div>:</div>
        <Time>
          <div>{StringcharAt(second, 0)}</div>
          <div>{StringcharAt(second, 1)}</div>
        </Time>
      </TimeBox>
      <Button
        endClick={endClick}
        text={isActive === "start" ? "중 지" : "시 작"}
        onClick={onClick}
        isActive={isActive}
      />
    </Container>
  );
};

export default TimerPresenter;
