import React, { useRef, useState } from 'react';
import './style.css'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCard({ addHandler }) {
    const textarea = useRef()

    const [remainingCharacter, setRemainingCharacter] = useState(200)
    const handleClick = () => {
        const id = uuidv4();
        console.log(`add card id: ${id}`);
        let textvalue = textarea.current.value
        // textvalue.length != 0 ? addHandler(textvalue,id):
        if (textvalue.length != 0) {
            addHandler(textvalue, id)
        } else {
            toast.warn("nothing in card!");

            console.log("toast called");
        }
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default AddCard;