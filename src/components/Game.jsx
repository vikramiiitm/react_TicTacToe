import React,{useState} from 'react'
import Board from './Board'
import { calculateWinner } from './helper'


const Game = () =>{
const [board, setBoard] = useState(Array(9).fill( ));
const [xIsNext, setXisNext] = useState(true);
const winner = calculateWinner(board);


    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const jumpTo = () => {

    }
    const renderMoves= () => {
        
    }
    return (
        <>
  <Board squares={board} onClick={handleClick} />
  <div className='subcontainer' >
    <p>
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
  </div>
  <div className='subcontainer'>
        <p><button class='submit' onClick={()=>window.location.reload()}>Restart</button></p>
  </div>

</>
    )
}

export default Game;