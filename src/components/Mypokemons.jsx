import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemoncard from ".//Pokemoncard";
import Enemy from ".//Enemy";
import Battlecard from ".//Battlecard";


function Allpokemons({ }) {
    const [myPokemons, setMyPokemons] = useState([]);
    const getMyPokemons = async () => {
        var endpoints = []
        for (let index = 1; index <= 9; index++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index}`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setMyPokemons(res));
    };

    useEffect(() => {
        getMyPokemons();
    }, [])

    return (
        <>
            <div style={{
                display: "flex",
                width: "98%",
                height: "400px",
                marginLeft: "10px",
                overflow: "hidden",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: "15px",
                padding: "0px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",

            }}>
                <div style={{
                    width: "97%",
                    height: "100%",
                    position: "flex",
                    top: "5px",
                    left: "5px",
                    right: "5px",
                    bottom: "5px",
                    background: "#2a2b2f",
                    borderRadius: "15px",
                    border: "2px solid #1e1f23",
                    overflowX: "hidden",
                    boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2), inset -5px -5px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.3),-5px -5px 15px rgba(255,255,255,0.1)",
                }}>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <div style={{ display: "grid", gridTemplateColumns: "120px", textAlign: "center", alignItems: "center", justifyContent: "center", }}>
                            {myPokemons.map((pokemon, key) => (
                                <div itens xs={4} key={key}><Pokemoncard name={pokemon.data.name} img={pokemon.data.sprites.front_default} /></div>
                            ))}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "120px", textAlign: "center", alignItems: "center", justifyContent: "center", }}>
                            {myPokemons.map(() => (<Battlecard />))}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "120px", textAlign: "center", alignItems: "center", justifyContent: "center", }}>
                            <Enemy />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Allpokemons;












