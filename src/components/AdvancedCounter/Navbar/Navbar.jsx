import React from 'react';
import './style.css'

function Navbar(props) {
    return (
        <div className='navbar'>
            <h1>Navbar</h1>
            <div className="navbar-counter">
                5
            </div>
        </div>
    );
}

export default Navbar;