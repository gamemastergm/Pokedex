import '../App.css';
import { useState } from 'react';
import Perfil from ".//Perfil";
import Allpokemons from ".//Allpokemons";
import Mypokemons from ".//Mypokemons";
import Btnoff from ".//btn/Btnoff";
import Btnon from ".//btn/Btnon";
import pokelogo from "..//resources/poke-logo.png";

function Home({ }) {
    const [allPokemons, setAllPokemons] = useState(false);
    const [myPokemons, setMyPokemons] = useState(true);
    function switchStatus(status) {
        if (status) {
            setAllPokemons(true);
            setMyPokemons(false);
        } else {
            setAllPokemons(false);
            setMyPokemons(true);
        }
        return switchStatus;
    }

    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
            }}>
                <div style={{ display: "flex", width: "100%", }}>
                    <img src={pokelogo} style={{
                        display: "flex",
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 0,
                        height: "150px",
                        width: "92%",
                        margin: "15px",
                        marginTop: "0px",
                        borderRadius: "10px 10px 10px 10px",
                    }} />
                </div>
                <div style={{ display: "flex", zIndex: 0, }}>
                    <Perfil />
                </div>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "10px",
                    }} >
                        {myPokemons ? <div onClick={() => switchStatus(false)}><Btnon text="My pokemons" /></div> : <div onClick={() => switchStatus(false)}><Btnoff text="My pokemons" /></div>}
                        {allPokemons ? <div onClick={() => switchStatus(true)}><Btnon text="All pokemons" /></div> : <div onClick={() => switchStatus(true)}><Btnoff text="All pokemons" /></div>}
                    </div>
                </div>
                {allPokemons && <Allpokemons />}
                {myPokemons && <Mypokemons />}

            </div>
        </>
    );
}

export default Home;