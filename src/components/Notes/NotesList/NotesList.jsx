import React, { useState } from 'react';
import AddCard from '../NoteCard/AddCard/AddCard';
import Note from '../NoteCard/NoteCrad';
import NoteCrad from './../NoteCard/NoteCrad';
import './style.css'

function NotesList(props) {
    const [text, setText] = useState();
    const textPass = (text) => setText(text);

    return (
        <div className='list-container'>
            <NoteCrad />
            <NoteCrad />
            <AddCard textContent={textPass} />

        </div>
    );
}

export default NotesList;