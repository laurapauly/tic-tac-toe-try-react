import React from "react";
import Square from "./Square";
import { calculateWinner } from "./utils/helpers.js";
import styled from "@emotion/styled";
import GameStatus from "./Status.js";

export default function Board({ gameSize }) {
  const [squares, setSquares] = React.useState(Array(gameSize).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner 🎉: ${winner}`;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    // Clone array
    const squaresClone = [...squares];
    if (xIsNext) {
      squaresClone[index] = "X";
      setXIsNext(false);
    } else {
      squaresClone[index] = "O";
      setXIsNext(true);
    }
    setSquares(squaresClone);
  }
  // Alternative um abwechselnd X und O zu spielen.
  // squaresClone[index] = XisNext ? "X" : "O",
  // setXIsNext(!xIsNext);

  const SquareBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    width: ${props => 50 * Math.sqrt(props.size)}px;

    > * {
      background: #3b8277;
      width: 50px;
      height: 50px;
      flex-basis: ${props => 100 / Math.sqrt(props.size)}%;
    }
  `;

  return (
    <div>
      <GameStatus>{status}</GameStatus>
      <SquareBox size={gameSize}>
        {squares.map((square, index) => (
          <Square
            key={`Square-${index}`}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </SquareBox>
    </div>
  );
}
