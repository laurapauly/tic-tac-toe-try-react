import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background: #3b8277;
  border: 2px solid #fff;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;

  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;

  outline: none;
  color: #cc584d;
`;

// <Square value = X />
export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}

// <Square value = X />
// Square({value: "X"})

// const { value } = probs ist das gleiche wie
// const = probs.value
