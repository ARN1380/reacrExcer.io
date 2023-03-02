import './AppStyle.css';
import Counter from "./components/counter/Counter";
import AdvancedCounter from "./components/AdvancedCounter/AdvancedCounter";
import Products from './components/Product/Products';
import PokemonsList from './components/Pokedex/PokemonsList/PokemonsList';
import NoteApp from './components/Notes/NoteApp/NoteApp';
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
                        <li><Link to='/PokemonsList'>PokemonsList</Link></li>
                        <li><Link to='/NoteApp'>NoteApp</Link></li>
                    </ul>

                    <div className="line"></div>

                    <div>
                        <Routes>
                            <Route path='/counter' element={<Counter />}></Route>
                            <Route path='/AdvancedCounter' element={<AdvancedCounter />}></Route>
                            <Route path='/Products' element={<Products />}></Route>
                            <Route path='/PokemonsList' element={<PokemonsList />}></Route>
                            <Route path='/NoteApp' element={<NoteApp />}></Route>
                        </Routes>
                    </div>                    
                </div>
            </Router>
        </>

    )
}

export default App;