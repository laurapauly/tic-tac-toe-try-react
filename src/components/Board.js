import React from "react";
import Square from "./Square";
import { calculateWinner } from "./utils/helpers.js";
import styled from "@emotion/styled";
import GameStatus from "./Status.js";

export default function Board({ gameSize }) {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
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
    width: 150px;

    > * {
      background: antiquewhite;
      width: 50px;
      height: 50px;
      flex-basis: ${props => 100 / Math.sqrt(props.size)}%;
    }
  `;

  return (
    <div>
      <GameStatus>{status}</GameStatus>
      <SquareBox size={gameSize}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />

        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />

        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </SquareBox>
    </div>
  );
}
