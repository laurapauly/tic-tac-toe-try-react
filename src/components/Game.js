import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

const FlexRow = styled.div`
  display: flex;
  flex-flow: column;
`;

export default function Game() {
  return (
    <FlexRow>
      <Board gameSize={9} />
    </FlexRow>
  );
}

// <div>{/* status */}</div>
// <ol>{/* TODO */}</ol>
