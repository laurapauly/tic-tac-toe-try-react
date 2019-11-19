import React from "react";

// <Square value = X />
export default function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// <Square value = X />
// Square({value: "X"})

// const { value } = probs ist das gleiche wie
// const = probs.value
