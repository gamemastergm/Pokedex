import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemoncard from ".//Pokemoncard";


function Allpokemons({ }) {
    const [pokemons, setPokemons] = useState([]);
    const [currentQuantity, setCurrentQuantity] = useState(12);
    const getPokemons = async () => {
        var endpoints = []
        for (let index = 1; index <= currentQuantity; index++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${index}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setCurrentQuantity((currentPageInsideState) => currentPageInsideState + 12);
            }
        });
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, [])

    useEffect(() => {
        getPokemons();
    }, [currentQuantity])
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
                        <div style={{ display: "grid", gridTemplateColumns: "120px 120px 120px", textAlign: "center", alignItems: "center", justifyContent: "center", }}>
                            {pokemons.map((pokemon, key) => (
                                <div itens xs={4} key={key}><Pokemoncard name={pokemon.data.name} img={pokemon.data.sprites.front_default} /></div>
                            ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", }} id="sentinela">
                            {pokemons.length < currentQuantity ? <p style={{ width: "50px", height: "50px", backgroundColor: "transparent", borderRadius: "50%", border: "12px solid blue", borderTop: "12px solid transparent", animation: "loading 1s linear infinite" }}></p> : <p></p>}
                        </div>
                    <div id="sentinela"></div>
                </div>
            </div>
        </>
    );
}

export default Allpokemons;












