import React from 'react';
import './style.css'

function CounterRow(props) {
    return (
        <div className='counter-row'>
            <div className="counter">10</div>
            <button className='increment'>+</button>
            <button className='decrement'>-</button>
            <button className='delete'>delete</button>
        </div>
    );
}

export default CounterRow;