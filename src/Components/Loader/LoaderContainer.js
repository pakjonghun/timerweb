import React, { useCallback, useEffect, useState } from "react";
import LoaderPresenter from "./LoaderPersenter";

//Loader Component props duration = 로딩시간
const LoaderContainer = ({ duration = 1 }) => {
  const [percentage, setPercentage] = useState(0);

  //1% 로딩되는데 걸리는 시간(duration = 로딩 시간)  ex) 로딩 시간 10초 => 1% 로딩되는데 10초/100%
  const time = duration / 100;

  //function loading = render되거나 percentage변수가 변하면 실행되는 함수
  const loading = useCallback(() => {
    if (percentage >= 0 && percentage < 100) {
      setTimeout(() => setPercentage(percentage + 1), time * 1000);
    }
  }, [percentage, time]);

  useEffect(() => {
    loading();
  }, [loading]);

  return <LoaderPresenter percentage={percentage} />;
};

export default LoaderContainer;
