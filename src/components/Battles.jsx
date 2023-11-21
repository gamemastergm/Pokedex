import "../App.css";
import { useState } from "react";
import Battlescheduled from "./Battlescheduled";
import { Text } from "../styles";

function Battles() {
  const [firstPokemon, setFirstPokemon] = useState(1);
  const [secondPokemon, setSecondPokemon] = useState(2);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
        }}
      >
        {localStorage.length > 0 ? (
          <>
            <Battlescheduled
              name={
                JSON.parse(localStorage.getItem("Pokemon_" + firstPokemon)).name
              }
              img={
                JSON.parse(localStorage.getItem("Pokemon_" + firstPokemon)).img
              }
            />
            <div>
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 0,
                  padding: 0,
                  left: 0,
                  right: 0,
                  width: "100px",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Battle
                <br />
                {
                  JSON.parse(localStorage.getItem("Pokemon_" + firstPokemon))
                    .data
                }
              </Text>
            </div>
            <Battlescheduled
              name={
                JSON.parse(localStorage.getItem("Pokemon_" + secondPokemon))
                  .name
              }
              img={
                JSON.parse(localStorage.getItem("Pokemon_" + secondPokemon)).img
              }
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Battles;
