import React, { useRef, useState } from 'react';
import './style.css'
import { v4 as uuidv4 } from 'uuid';

function AddCard({ addHandler }) {
    const textarea = useRef()
    
    const [remainingCharacter, setRemainingCharacter] = useState(200)
    const handleClick = () => {
        const id = uuidv4();
        console.log(`add card id: ${id}`);
        let textvalue = textarea.current.value
        textvalue.length != 0 && addHandler(textvalue,id);
        textarea.current.value = "";
        setRemainingCharacter(200);
    }

    const handleRemainingCharacter = () => {
        setRemainingCharacter(200 - textarea.current.value.length);
    }

    return (
        <div className='addcard-container'>
            <textarea name="" maxLength="200" className='addnote-text' ref={textarea} onChange={handleRemainingCharacter}>

            </textarea>
            <div className="addnote-bottom-row">
                <span className='charachter-remaining'>{remainingCharacter} char</span>
                <button className='add-btn' onClick={handleClick}>Add</button>
            </div>
        </div>
    );
}

export default AddCard;