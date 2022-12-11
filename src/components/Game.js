import React from "react";
import Board from "./Board.js"
import {calculateWinner} from "../helpers.js"  //it has {} since it's a function inside the helpers.js

//style:
const style={
    width: "200px",
    margin: "20px auto"

}

const Game = () =>{

    //define state which we call board--destructuring
    // const [board, setBoard] = React.useState(Array(9).fill(null));  //this means they are 9 empty squares--Array(9) is the array with length=9
    //instead of line above we change the board to history-we use [] since we have more than one board
    const [history, setHistory] = React.useState([Array(9).fill(null)])
    //create another state--the action step
    const [stepNumber, setStepNumber] = React.useState(0);
    const [xIsNext, setXIsNext] = React.useState(true);  //we always begin with X
    const winner = calculateWinner(history[stepNumber]);  //who is the winner--history[stepNumber] gives us the most recent step


    const handleClick = (i) =>{
        //we define the variable so when we go back to one of the previous steps back, we don't need the step after that,so we want to delete those after steps
        const timeInHistory = history.slice(0, stepNumber+1) //slice is a copy of array and /+1 is to show the current state since the end in slice is not included
        const current = timeInHistory[stepNumber]    //the most current move
        // const boardCopy = [...history];
        //instead of the above line we write:
        const squares = [...current]   //copy of the current state
        //if user wins the game or user clicks on the occupied square we return nothing
        if(winner || squares[i]){
            return;
        }
        //now write a ternary condition--the first move is X and the second user move is O and then continue--if user sets X on one square then in the next click of the user, it must be O
        // boardCopy[i] = xIsNext ? "X" : "O";  
       squares[i] = xIsNext ? "X" : "O";  
        // setBoard(boardCopy)
        //instead of the above line:
        setHistory([...timeInHistory, squares])  //we have time in history and we have the most recent state
        setStepNumber(timeInHistory.length)   //it will give us the new step number

        setXIsNext(!xIsNext)
    }

    // //implement time travel
    const jumpTo = (step) =>{
        setStepNumber(step);
        setXIsNext(step % 2 ===0) //if ser%2 ===0 then setXIsNext is true--means the currect step is o so the next step must be X
    }

    //below is the button to start the game 
    const renderMoves = () => {
        history.map((_step,move)=>{  //step has _ before it since we don't want to use it. we just want to use move
             const destination = move ? `Go to move #${move}` : "Go to Start";
             return(
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
             )           

        })
        // return (
        //     <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
        // )
    }

    

    return(
        <div>
            <Board squares={history[stepNumber]} onClick={handleClick}/>
            <div style={style}>
                {/* line below: if there is a winner announce the winner which is on the left side otherwise the winner is next column--the next ternary says we return x or o*/}
                <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
                {/* error without () */}
                {renderMoves()} 
                {/* instead of {renderMoves} we can write the below line */}
                {/* <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button> */}
            </div>
        </div>
        
    )
}


export default Game