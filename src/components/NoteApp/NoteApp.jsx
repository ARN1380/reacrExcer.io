import React from 'react';
import NotesList from './NotesList/NotesList';
import './style.css'

function NoteApp(props) {
    return (
        <div>
            <header>
                <h1 className='title'>Notes App</h1>
                <button className='dark-btn'>Light Mode</button>
            </header>
            <main>
                <NotesList />

            </main>
        </div>
    );
}

export default NoteApp;