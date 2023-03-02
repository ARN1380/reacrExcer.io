import React from 'react';
import './style.css'

function AddCard(props) {

    return (
        <div className='notecard-container'>
            <textarea name="" maxLength="200" className='note-text'>
                
            </textarea>
            <div className="bottom-row">
                <span className='charachter-remaining'>200 char</span>
                <button className='delete-btn'>Delete</button>
            </div>
        </div>
    );
}

export default AddCard;