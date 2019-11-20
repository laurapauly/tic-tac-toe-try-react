export function cloneArray(array) {
  return [...array];
}

export function calculateWinner(squares) {
  const cells = Math.sqrt(squares.length);

  const winnerLines = [];
  // Add horizontal lines
  for (let i = 0; i < cells; i++) {
    const winnerLine = [];
    for (let j = 0; j < cells; j++) {
      winnerLine.push(i * cells + j);
    }
    winnerLines.push(winnerLine);
  }

  // vertical lines
  for (let i = 0; i < cells; i++) {
    const winnerLine = [];
    for (let j = 0; j < squares.length; j = j + cells) {
      winnerLine.push(i + j);
    }
    winnerLines.push(winnerLine);
  }

  // diagonal lines
  const firstDiagonalLine = [];
  for (let i = 0; i < cells; i++) {
    firstDiagonalLine.push(i + cells * i);
  }
  winnerLines.push(firstDiagonalLine);

  const secondDiagonalLine = [];
  for (let i = 0; i < cells; i++) {
    secondDiagonalLine.push(i * cells + cells - 1 - i);
  }
  winnerLines.push(secondDiagonalLine);

  // Check winner lines
  for (let i = 0; i < winnerLines.length; i++) {
    const winnerLine = winnerLines[i];
    const value = squares[winnerLine[0]];
    if (!value) {
      continue;
    }

    let isSame = true;
    for (let j = 0; j < cells; j++) {
      if (squares[winnerLine[j]] !== value) {
        isSame = false;
      }
    }
    if (isSame) {
      return value;
    }
  }
  return null;
}
