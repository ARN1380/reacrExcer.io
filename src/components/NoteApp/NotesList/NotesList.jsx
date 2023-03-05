import React, { useState } from 'react';
import './style.css'
import AddCard from './../AddCard/AddCard';
import NoteCard from './../NoteCard/NoteCard';
import { v4 as uuidv4 } from 'uuid';


function NotesList(props) {
    const [notesListArr, setNotesListArr] = useState([{ id: uuidv4(), textContent: "lorem ipsum" }, { id: uuidv4(), textContent: "lorem  2" }])

    const addNote = (id, textContent) => {
        setNotesListArr([...notesListArr, { id: id, textContent: textContent }])
    }
    const deleteNote = (deletedId) => {
        console.log(`deletedId: ${deletedId}`);
        setNotesListArr(notesListArr.filter((obj => obj.id != deletedId)));

    }
    const editNote = (changedText, id) => {
        notesListArr[notesListArr.findIndex(obj=>obj.id === id)].textContent = changedText;
        // setNotesListArr(prevState => ({

        // }))
    }
    return (
        <div className='list-container'>
            {notesListArr.map((item, index) => {

                console.log(item);
                return <NoteCard id={item.id} textContent={item.textContent} isDeleted={(deletedId) => deleteNote(deletedId)} editText={(changedText, id) => editNote(changedText, id)} />
            }
            )}

            <AddCard addHandler={(textContent, id) => addNote(id, textContent)} />
        </div>
    );
}

export default NotesList;
