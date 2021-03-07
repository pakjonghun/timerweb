import React, { useState } from "react";
import TimerPresenter from "./TimerPersenter";
//Timer Component
const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [intervalValue, setIntervalValue] = useState(null);
  const [isActive, setIsActive] = useState("end");

  const startHour = (number) => {
    return number + 1;
  };

  const minuteStart = (number) => {
    if (number < 60) {
      return number + 1;
    } else if (number === 60) {
      setHour(startHour);
      return 0;
    }
  };

  const secondStart = (number) => {
    if (number < 60) {
      return number + 1;
    } else if (number === 60) {
      setMinute(minuteStart);
      return 0;
    }
  };

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
