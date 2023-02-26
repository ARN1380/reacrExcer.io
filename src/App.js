import './AppStyle.css';
import Counter from "./components/counter/Counter";
import AdvancedCounter from "./components/AdvancedCounter/AdvancedCounter";
import Products from './components/Product/Products';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom"

function App() {

    return (
        <>
            
            <Router>

                <div className="container">
                    <ul className="list">
                        <li><Link className='textdecnone' to='/counter'>Counter</Link></li>
                        <li><Link to='/AdvancedCounter'>AdvancedCounter</Link></li>
                        <li><Link to='/Products'>Products</Link></li>
                    </ul>

                    <div className="line"></div>

                    <div>
                        <Routes>
                            <Route path='/counter' element={<Counter />}></Route>
                            <Route path='/AdvancedCounter' element={<AdvancedCounter />}></Route>
                            <Route path='/Products' element={<Products />}></Route>
                        </Routes>
                    </div>                    
                </div>
            </Router>
        </>

    )
}

export default App;