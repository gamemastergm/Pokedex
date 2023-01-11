import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemoncard from ".//Pokemoncard";

function Enemy() {
    const [myPokemons, setMyPokemons] = useState([]);

    const getMyPokemons = async () => {
        var endpoints = []
        for (let index = 1; index <= 9; index++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index + Math.floor(Math.random() * 900)}`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setMyPokemons(res));
    };

    useEffect(() => {
        getMyPokemons();
    }, [])

    return (
        <>
            {myPokemons.map((pokemon, key) => (
                <div itens xs={4} key={key}><Pokemoncard name={pokemon.data.name} img={pokemon.data.sprites.front_default} /></div>))}
        </>
    );
}

export default Enemy;
