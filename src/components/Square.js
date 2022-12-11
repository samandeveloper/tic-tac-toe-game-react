import React from "react";

//style each square
const style ={
    //this is not css it's jsx so we need , not ; and we need to use camelCase
    border:"2px solid darkblue",
    fontweight:"800",
    fontSize:"30px",
    cursor:"pointer",
    outline:"none",
    background: "lightblue"
}

const Square = (props) =>{
    return(
        // <div>Square</div>
        <button onClick={props.onClick} style={style}>{props.value}</button>
    )
}

//or use destructuring
// const Square = ({value, onClick}) =>{
//     return(
//         // <div>Square</div>
//         <button onClick={onClick}>{value}</button>
//     )
// }

export default Square