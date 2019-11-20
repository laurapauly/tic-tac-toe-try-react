import React from "react";

import Game from "./components/Game";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  background-color: #ceddd6;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: #0d4f4a;
  font-family: "Tomorrow", sans-serif;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

function App() {
  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      <Game />
    </Container>
  );
}

export default App;
