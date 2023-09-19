import React from "react";
import Board from "./Board.js";
import { calculateWinner } from "../helpers.js"; //it has {} since it's a function inside the helpers.js

//style:
const style = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  //define state which we call board--destructuring
  const [board, setBoard] = React.useState(Array(9).fill(null)); //this means they are 9 empty squares--Array(9) is the array with length=9
  const [xIsNext, setXIsNext] = React.useState(true); //we always begin with X
  const winner = calculateWinner(board); //who is the winner

  const handleClick = (i) => {
    const boardCopy = [...board];
    //if user wins the game or user clicks on the occupied square we return nothing
    if (winner || boardCopy[i]) {
      return;
    }
    //now write a ternary condition--the first move is X and the second user move is O and then continue--if user sets X on one square then in the next click of the user, it must be O
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  //below is the button to start the game
  const renderMoves = () => {
    return (
      // <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
      console.log("start")
    );
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        {/* line below: if there is a winner announce the winner which is on the left side otherwise the winner is next column--the next ternary says we return x or o*/}
        <h3>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </h3>
        {/* error without () */}
        {renderMoves()}
        {/* instead of {renderMoves} we can write the below line */}
        {/* <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button> */}
      </div>
    </div>
  );
};

export default Game;
