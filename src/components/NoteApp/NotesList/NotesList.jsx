import React, { useState } from 'react';
import './style.css'
import AddCard from './../AddCard/AddCard';
import NoteCard from './../NoteCard/NoteCard';


function NotesList(props) {
    const [text, setText] = useState();
    const textPass = (text) => setText(text);

    return (
        <div className='list-container'>
            <NoteCard     />
            <NoteCard />
            <AddCard textContent={textPass} />

        </div>
    );
}

export default NotesList;