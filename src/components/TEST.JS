import React,{useState} from 'react'
import Board from './Board'
import { calculateWinner } from './helper'


const Game = () =>{
    const [board,setBoard] = useState(Array(9).fill(0))
    const [xIsNext,setXssNext] = useState(true)
    const winner = calculateWinner(board)


    const handleClick=()=>{

    }

    const jumpTo = () => {

    }
    const renderMoves= () => {

    }

    return (
        <Board squares={board} onClick={handleClick}/>
    )
}

export default Game;













import Square from './Square'
import './Board.css'
import React, {useState} from 'react';

const Board = ({squares,onClick}) => (   
        <div className='container'>
          {squares.map((square,i)=>(
              <div>
                <Square key={i} value={square} onClick={()=>onClick(i)}/>
              </div>
              
          ))}
        </div>
)
// const Board = ({ squares, onClick }) => (
// 	<div >
// 		{squares.map((square, i) => (
// 			<Square key={i} value={square} onClick={() => onClick(i)} />
// 		))}
// 	</div>
// );

export default Board;
