import React from "react";
import Square from "./Square.js"

//style Board
const style={
    border:"4px solid darkblue",
    borderRadius:"10px",
    width:"250px",
    height:"250px",
    margin:"0 auto",
    display:"grid",
    gridTemplate:"repeat(3, 1fr)/repeat(3,1fr)"  //3 by 3 board
}

const Board = ({squares,onClick}) =>{
    //instead of writing {squares,onClick} in the above line which is a destructuring, we can write:
    // const {squares,onClick} = 
    //instead of writing jsx in below inside {} we can write the map like below before return
    // squares.map((square,i)=>{
    //     return(
    //         <Square key={i} value={square} onClick={() => onClick(i)} />
    //     )});
        const squareElement = squares.map((square , i) =>{
                return (<Square key={i} value={square} onClick={() => onClick(i)} />)
            })

    return(
        <div style={style}>
            {/* the square tag is self close because we don't want to show anything inside it */}
            {/* <Square value="1" onClick={() => onClick("dummy value")} />
            <Square value="2" onClick={() => onClick("dummy value")} />
            <Square value="3" onClick={() => onClick("dummy value")} />
            <Square value="4" onClick={() => onClick("dummy value")} />
            <Square value="5" onClick={() => onClick("dummy value")} />
            <Square value="6" onClick={() => onClick("dummy value")} />
            <Square value="7" onClick={() => onClick("dummy value")} />
            <Square value="8" onClick={() => onClick("dummy value")} />
            <Square value="9" onClick={() => onClick("dummy value")} /> */}
            {/* instead of writing Squares 9 times we can write map--write it here with {} around or write it outside of here */}

            {/* {squares.map((square , i) =>{
                return (<Square key={i} value={square} onClick={() => onClick(i)} />)
            })} */}
            {squareElement}
        </div>
    )
}


export default Board