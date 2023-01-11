import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemoncard from ".//Pokemoncard";
import { Container, Grid } from "@mui/material";

function Allpokemons({ open, data }) {
    const [poke, setPoke] = useState({});
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
              width: "95%",
              height: "450px",
              marginLeft: "10px",
              overflow: "auto",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "15px 15px 15px 15px",
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px inset",
            }}>
                <Container style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "35px",
                    marginLeft: "10px",
                    height: "50%",
                }}>
                    <Grid container spacing={4}>
                        {myPokemons.map((pokemon, key) => (
                            <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", }} itens xs={11} key={key}>
                                <div style={{ display: "flex", width: "95%", justifyContent: "center", alignItems: "center", }}>
                                    <button onClick={()=> open(false)}>Selecionar</button>
                                    <Pokemoncard onClick={()=> open(false)} to="/" name={pokemon.data.name} img={pokemon.data.sprites.front_default} />
                                </div>
                                {(()=>{
                                    setPoke({
                                        name: pokemon.data.name,
                                        img: pokemon.data.sprites.front_default,
                                        status: "battle",
                                        date: data,
                                    })})}
                                    {console.log(poke)}
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Allpokemons;












