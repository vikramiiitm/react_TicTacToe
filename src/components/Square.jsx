import React from 'react';

const Square = ({value,onClick}) => {
    return (
        <div>
            <button className="sbutton" onClick={onClick} >{value} </button>
        </div>
);
}
export default Square;
