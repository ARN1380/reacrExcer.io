import React from 'react';
import './style.css'


function ProductCard({title,imgSrc}) {
    return (
        <div className='card-container'>
            <div className="card-image">
                <img src={imgSrc} />
            </div>
            <div className="card-title">
                <h1>{title}</h1>
            </div>
            <div className='card-btn-div'>
                <button className="card-button">Add to card</button>
            </div>
        </div>
    );
}

export default ProductCard;