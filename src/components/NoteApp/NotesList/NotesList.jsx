import React, { useState } from 'react';
import './style.css'
import AddCard from './../AddCard/AddCard';
import NoteCard from './../NoteCard/NoteCard';


function NotesList(props) {
    const [notesListArr, setNotesListArr] = useState([{ id: 0, textContent: "lorem ipsum" }, { id: 1, textContent: "lorem  2" }])

    const addNote = (value) => {
        setNotesListArr([...notesListArr, { id: notesListArr.length + 1, textContent: value }])

    }
    
    return (
        <div className='list-container'>
            {notesListArr.map((item, index) =>                
                <NoteCard id={item.id} textContent={item.textContent} />
            )}

            <AddCard addHandler={(value) => addNote(value)} />
        </div>
    );
}

export default NotesList;