import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

export default function Game() {
  return (
    <FlexRow>
      <Board />
      <GameInfo>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </GameInfo>
    </FlexRow>
  );
}
