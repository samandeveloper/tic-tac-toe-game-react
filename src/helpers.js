//This is condition of winning the game
export function calculateWinner(squares){
    //all the rows and columns states for winning
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0 ; i< lines.length ; i++){
        const [a,b,c] = lines[i];     //this is destructuring--a , b, c are what we write in row or column
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];   //we can return squares[b] or squares[c] since all of them the same
        }
    }
    return null  //otherwise return null
}

//below line is for test
const squares = [
    null,null,null,
    'X','X','O',
    null,null,null
]

console.log(calculateWinner(squares))  //for the above test the answer is null