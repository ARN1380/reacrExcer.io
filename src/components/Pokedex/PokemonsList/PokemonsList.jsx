import React, { useEffect, createElement, useState, Fragment } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import axios from 'axios';
import './style.css'


const Pokemon_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"

function PokemonsList(props) {
  // let pokemons, imgSrc, name, type;

  const [pokemons, setPokemons] = useState();

  const fetchPokemons = async () => {
    const results = (await axios.get(Pokemon_API_URL)).data.results
    setPokemons(results)

  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  pokemons?.map((item, index) => {
    console.log(item)
  })

  console.log(pokemons);

  return (
    <div className="grid">

      {/* {pokemons.map((element) => // why the map is undefiend
        <Pokemon name={element.title} url={element.image} />
      )} */}

      {!pokemons && <h1>Loading ...</h1>}

      {pokemons && (

        pokemons.map((item, index) => (
          <Fragment key={`pokemon-${index}`}>
            <Pokemon name={item.name} url={item.url} />
          </Fragment>
        ))

      )}
    </div>
  );
}

export default PokemonsList;