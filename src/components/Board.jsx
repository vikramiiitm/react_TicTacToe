import Square from './Square'
import './Board.css'
import React, {useState} from 'react';

const Board = ({squares,onClick}) => (   
        <div className='container'>
          {squares.map((square,i)=>{
              return(
              <div>
                <Square key={i} value={square} onClick={()=>onClick(i)}/>
              </div>
          )})}
        </div>
)

export default Board;
