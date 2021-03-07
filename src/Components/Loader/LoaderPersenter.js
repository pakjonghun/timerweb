import React from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar";

const Container = styled.div`
  ${(props) => props.theme.alignCenter};
  ${(props) => props.theme.fullWindowPercent};
  align-items: center;
`;

//Component이 props duration = 로딩시간
const LoaderPresenter = ({ percentage }) => {
  return (
    <Container>
      <ProgressBar percentage={percentage} />
    </Container>
  );
};

export default LoaderPresenter;
