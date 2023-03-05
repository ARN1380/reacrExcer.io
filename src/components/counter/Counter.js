import './Counter.css'
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Counter = () => {
    
    let [count, setCount] = useState(0);
    
    const view =(
    <div className="counter-box" onClick={ () => {
        setCount(count + 1);
        }}>
        <p className="number">
            {count}
        </p>
    </div>
    )
    
    return view;
}
export default Counter