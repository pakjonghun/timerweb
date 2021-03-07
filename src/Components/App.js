import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/GlobalStyle";
import Theme from "../Styles/Theme";
import Timer from "./TImer";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  ${(props) => props.theme.fullVwVh};
  ${(props) => props.theme.alignCenter};
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Timer />
        <Loader />
      </Container>
    </ThemeProvider>
  );
};

export default App;
