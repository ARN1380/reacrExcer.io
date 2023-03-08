import React, { useRef, useState } from 'react';
import './style.css';


function NoteCard({ id, textContent, isDeleted, editText }) {
    const textarea = useRef()
    const editBtn = useRef()
    const [editBtnState, setEditBtnState] = useState("Edit")
    let isEditing = false;
    const handleDelete = () => {
        isDeleted(id)
        console.log(`id from the card ${id}`);
    }
    const handleEdit = () => {
        if (isEditing) {
            isEditing = false
            setEditBtnState("Edit")
            textarea.current.disabled = true;
            editText(textarea.current.value, id)
        } else {
            isEditing = true
            setEditBtnState("Apply")
            textarea.current.disabled = false;

        }
        // document.activeElement === textarea.current ? 
    }
    return (
        <div className='notecard-container'>
            <textarea name="" maxLength="200" disabled={true} className='note-text' ref={textarea} value={textContent} />
            <div className="bottom-row">
                <button className='edit-btn' onClick={handleEdit} ref={editBtn}>{editBtnState}</button>
                <button className='delete-btn' onClick={handleDelete} >Delete</button>
            </div>
        </div>
    );
}

export default NoteCard;