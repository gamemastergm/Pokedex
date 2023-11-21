import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {Requisition} from '../Services/requisitions';
import Pokemoncard from ".//Pokemoncard";

function Pokemons({ colection }) {
  const [pokemons, setPokemons] = useState([]);
  const [currentQuantity, setCurrentQuantity] = useState(12);
  var endPoint = Requisition(currentQuantity);
  const getPokemons = async () => {
    axios
      .all(endPoint.map((endPoint) => axios.get(endPoint)))
      .then((res) => setPokemons(res));
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentQuantity(
          (currentPageInsideState) => currentPageInsideState + 12
        );
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinela"));
    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    getPokemons();
  }, [currentQuantity]);

  return (
    <>
      <div 
        style={{
          display: "flex",
          width: "98%",
          height: "400px",
          marginLeft: "10px",
          marginBottom: "50px",
          overflow: "hidden",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "15px",
          padding: "0px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: "97%",
            height: "100%",
            position: "flex",
            top: "5px",
            left: "5px",
            right: "5px",
            bottom: "5px",
            borderRadius: "15px",
            overflowX: "hidden",
            zIndex: 0,
            background:
              "linear-gradient(315deg, rgba(87, 143, 104, 0.75) 0%, rgba(37, 34, 69, 0.75) 48%, rgba(181, 62, 62, 0.75) 77%, rgba(184, 128, 68, 0.75) 100%)",
            boxShadow:
              "-5px -5px 30px 5px inset rgba(255,0,0, 0.25), 5px 5px 30px 5px inset rgba(0,0,255, 0.25)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 120px 120px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pokemons.map((pokemon, key) => (
              <div itens xs={4} key={key}>
                <Pokemoncard
                  name={pokemon.data.name}
                  img={pokemon.data.sprites.front_default}
                  status={key >= 9 && !colection == true ? false:true}
                />
              </div>
            ))}
          </div>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            id="sentinela"
          >
            {pokemons.length < currentQuantity ? (
              <p
                style={{
                  width: "50px",
                  height: "50px",
                  boxShadow: "0 0 5px rgba(255,255,255,.3)",
                  borderRadius: "50%",
                  animation: "loading 1s linear infinite",
                }}
              ></p>
            ) : (
              <p></p>
            )}
          </div>
          <div id="sentinela"></div>
        </div>
      </div>
    </>
  );
}

export default Pokemons;
