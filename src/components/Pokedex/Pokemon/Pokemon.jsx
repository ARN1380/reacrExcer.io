import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css'

function Pokemon({ name, url }) {
    const [pokemons, setPokemons] = useState({});

    const fetchPokemons = async () => {
        const results = (await axios.get(url)).data
        // setPokemons(results) --> why this isn't working
        setPokemons({
            type: results.types[0].type.name,
            img: results.sprites.front_default,
        })
    }
    useEffect(() => {
        fetchPokemons();
    }, [])

    return (
        <div className="pokemon-item">
            <div className="pokemon-image-box">
                <img src={pokemons.img} alt="" className="pokemon-img" />
            </div>
            <div className="pokemon-textContent">
                <h1 className="pokemon-name">{name}</h1>
                <p className="pokemon-description"></p>
            </div>
        </div>
    );
}

export default Pokemon;