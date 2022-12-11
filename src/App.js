//Guide of the game: This game is just between users and themselfs. 
//If the first time users clicks it must be X and the second time user clicks it must be O and go on..

import React from "react";

//import components
import Game from "./components/Game.js"
import Board from "./components/Board.js"
import Square from "./components/Square.js"

const App = () =>{
    return(    
    <div>
        <Game />
        {/* <Board />
        <Square /> */}
    </div>
    )

}

export default App