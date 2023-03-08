import React, { useState, useEffect } from 'react';
import './style.css'
import AddCard from './../AddCard/AddCard';
import NoteCard from './../NoteCard/NoteCard';
import { v4 as uuidv4 } from 'uuid';


function NotesList(props) {
    const [notesListArr, setNotesListArr] = useState(JSON.parse(localStorage.getItem("notes") || "[]"));

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notesListArr))
    },[notesListArr])

    console.log("saved in local storage");
    const addNote = (id, textContent) => {
        setNotesListArr((prevState)=>{

            return [...prevState, { id: id, textContent: textContent }]
        })
    }
    const deleteNote = (deletedId) => {
        console.log(`deletedId: ${deletedId}`);
        setNotesListArr(notesListArr.filter((obj => obj.id != deletedId)));

    }
    const editNote = (changedText, id) => {
        notesListArr[notesListArr.findIndex(obj=>obj.id === id)].textContent = changedText;
    }
    return (
        <div className='list-container'>
            {notesListArr.map((item, index) => {

                return <NoteCard id={item.id} textContent={item.textContent} isDeleted={(deletedId) => deleteNote(deletedId)} editText={(changedText, id) => editNote(changedText, id)} />
            }
            )}

            <AddCard addHandler={(textContent, id) => addNote(id, textContent)} />
        </div>
    );
}

export default NotesList;
