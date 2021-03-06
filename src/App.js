import React from "react";

import Game from "./components/Game";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles.js";

const Container = styled.div`
  text-align: center;
  background-color: #ceddd6;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: #0d4f4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #cc584d;
  border: 10px solid white;
  padding: 5px;
  height: 100px;
  width: 300px;
  font-size: 50px;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Title>Tic Tac Toe</Title>
      <Game />
    </Container>
  );
}

export default App;
