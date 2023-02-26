import React, { createElement } from 'react';
import { data } from './component-practice-data';
import ProductCard from './ProductCard/ProductCard';
import './style.css'
import './component-practice-data'

function Products(props) {
    
    
    return (
        <div className='product-container'>
            {data.map((element)=>
                <ProductCard title={element.title} imgSrc={element.image} />
            )}
        </div>
    );
}

export default Products;