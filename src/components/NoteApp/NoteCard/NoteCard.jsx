import React, { useRef, useState } from 'react';
import './style.css';


function NoteCard({ id, textContent, isDeleted }) {

    const handleDelete = () => {
        isDeleted(id)
        console.log(`id from the card ${id}`);
    }
    return (
        <div className='notecard-container'>
            <textarea name="" maxLength="200" disabled className='note-text' value={textContent} />
            <div className="bottom-row">
                <button className='edit-btn'>Edit</button>
                <button className='delete-btn' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default NoteCard;