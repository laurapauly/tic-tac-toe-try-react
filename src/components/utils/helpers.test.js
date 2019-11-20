import { calculateWinner } from "./helpers.js";

it("calculates winner with 9 squares", () => {
  const squares = ["x", "x", "x", "o", null, "o", null, null, null];
  const winner = calculateWinner(squares);

  expect(winner).toBe("x");
});

it("calculates draw with 9 squares", () => {
  const squares = ["O", "X", "O", "X", "X", "O", "X", "O", "X"];
  const winner = calculateWinner(squares);

  expect(winner).toBe(null);
});

it("calculates winner with 16 squares", () => {
  const squares = [
    "X",
    "O",
    "O",
    null,
    null,
    "X",
    null,
    "X",
    null,
    "O",
    "X",
    null,
    null,
    "O",
    null,
    "X"
  ];
  const winner = calculateWinner(squares);

  expect(winner).toBe("X");
});
