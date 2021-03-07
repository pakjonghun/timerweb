import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 5vh;
  width: 35vw;
  background-color: ${(props) => props.theme.loadingBgColor};
  border-radius: 5px;
`;

const Bar = styled(Container)`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ theme, percentage }) =>
    percentage < 70 ? theme.loadingYellowColor : theme.loadingGreenColor};
  ${(props) => props.theme.alignCenter};
  transition: all 0.1s linear;

  span {
    color: ${({ percentage, theme }) =>
      percentage < 70 ? theme.loadingRedColor : "white"};
    display: flex;
    align-items: center;
    font-size: ${({ percentage }) => (percentage < 11 ? "0.8rem" : "1.1rem")};
    transition: all 0.3s linear;
  }
`;

//ProgressBar Custom Component
const ProgressBar = ({ percentage }) => {
  return (
    <Container>
      <Bar percentage={percentage}>
        <span>{percentage < 7 ? "" : `${percentage}`}</span>
      </Bar>
    </Container>
  );
};

export default ProgressBar;
