import React, { useState } from "react";
import TimerPresenter from "./TimerPersenter";
//Timer Component
const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [intervalValue, setIntervalValue] = useState(null); //Interval 변수
  const [isActive, setIsActive] = useState("end"); //작동상태구분 : "start","pause","end"

  //시간은 2자리 수까지만 표현 가능
  const startHour = (number) => {
    return number + 1;
  };

  //60분이 되면  hour + 1
  const minuteStart = (number) => {
    if (number < 60) {
      return number + 1;
    } else if (number === 60) {
      setHour(startHour);
      return 0;
    }
  };

  //60초가 되면 second 초기화 와 minute + 1
  const secondStart = (number) => {
    if (number < 60) {
      return number + 1;
    } else if (number === 60) {
      setMinute(minuteStart);
      return 0;
    }
  };

  //시작버튼 함수
  const onClick = () => {
    if (isActive === "end" || isActive === "pause") {
      const interval = setInterval(() => setSecond(secondStart), 100);
      setIntervalValue(interval);
      setIsActive("start");
    } else if (isActive === "start") {
      clearInterval(intervalValue);
      setIsActive("pause");
    }
  };

  //종료버튼 함수 : 인터벌클리어, 시간, 초기화, 작동상태 "end"
  const endClick = () => {
    setIsActive("end");
    clearInterval(intervalValue);

    setSecond(0);
    setHour(0);
    setMinute(0);
  };

  return (
    <TimerPresenter
      endClick={endClick}
      isActive={isActive}
      second={second}
      minute={minute}
      hour={hour}
      onClick={onClick}
    />
  );
};
export default Timer;
