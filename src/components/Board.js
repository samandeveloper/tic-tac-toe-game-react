import React from "react";
import Square from "./Square.js";

//style Board
const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr)/repeat(3,1fr)", //3 by 3 board
};
const style2 = {
  textAlign: "center",
  marginTop: "40px",
  fontSize: "20px",
};
const style3 = {
  textAlign: "center",
  marginTop: "30px",
  fontSize: "40px",
  color: "navy",
};

const Board = ({ squares, onClick }) => {
  const squareElement = squares.map((square, i) => {
    return <Square key={i} value={square} onClick={() => onClick(i)} />;
  });

  return (
    <>
      <h1 style={style3}>Tic Tac Toe Game</h1>
      <h2 style={style2}>This is a Two Players Game</h2>;
      <div style={style}>{squareElement}</div>
    </>
  );
};

export default Board;
