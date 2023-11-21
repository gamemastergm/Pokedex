import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Pokemoncard from "./Pokemoncard";
import {Requisition, RequisitionRandom} from "../Services/requisitions";
import { Container, Grid, Button } from "@mui/material";
import { Text } from "../styles";

function SelectPokemon({ data, info, phase }) {
  const [myPokemons, setMyPokemons] = useState([]);
  var endPoint;
  endPoint == null ? info == "your-pokemon" ? endPoint = Requisition(9) : endPoint = RequisitionRandom(9) : <></> ;
  const getMyPokemons = async () => {
    axios
      .all(endPoint.map((endPoint) => axios.get(endPoint)))
      .then((res) => setMyPokemons(res));
  };

  function endSelection(close, pokeName, pokeImg, data) {
    var poke = new Object();
    poke.name = pokeName;
    poke.img = pokeImg;
    poke.data = data;
    if (close) {
        if(info == "your-pokemon" ){
            localStorage.setItem("Pokemon_"+ (localStorage.length + 1), JSON.stringify(poke));
            phase("enemy-pokemon");
        }else{
            localStorage.setItem("Pokemon_"+ (localStorage.length + 1) , JSON.stringify(poke));
            phase("finished");
        }

    } 
    return endSelection;
  }

  useEffect(() => {
    getMyPokemons();
  }, []);
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
          margin: "100px"
        }}
      >
        <Container
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
          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            {myPokemons.map((pokemon, key) => (
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "-50px",
                }}
                itens
                xs={11}
                key={key}
              >
                <div
                  style={{
                    display: "flex",
                    width: "95%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {}
                  <Pokemoncard
                    name={pokemon.data.name}
                    img={pokemon.data.sprites.front_default}
                    status={true}
                  />
                  <Button
                    variant="contained"
                    style={{
                      margin: "10px",
                      background:
                        "linear-gradient(315deg, rgba(87, 143, 104, 0.75) 0%, rgba(37, 34, 69, 0.75) 48%, rgba(181, 62, 62, 0.75) 77%, rgba(184, 128, 68, 0.75) 100%)",
                      boxShadow:
                        "-5px -5px 30px 5px inset rgba(255,0,0, 0.25), 5px 5px 30px 5px inset rgba(0,0,255, 0.25)",
                    }}
                    onClick={() => endSelection(true, pokemon.data.name, pokemon.data.sprites.front_default, data)}
                  >
                    <Text style={{ margin: 0, fontSize: "12px" }}>
                      Selecionar
                    </Text>
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default SelectPokemon;
