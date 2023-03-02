import React, { useState } from 'react';
import './style.css';


function NoteCard({ textContent }) {
    // const [text, setText] = useState('text text text');
    // const textPass = (text) => setText(text);
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

export default NoteCard;