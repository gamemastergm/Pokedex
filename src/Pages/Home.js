import "../App.css";
import { useState } from "react";
import Perfil from "../components/Perfil";
import Pokemons from "../components/Pokemons";
import Btn from "../components/Btn";
import Background from "../components/Background";
import Bottombar from "../components/Bottombar";


function Home() {
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
      <div 
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          margin: "auto",
          maxWidth: "425px",
          minHeight: "100vh",
          flexDirection: "column",
          overflowX: "hidden",
          textAlign: "center",
          backgroundPositionY: "100",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        
        <Background />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Perfil />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px",
              }}
            >
              {myPokemons ? (
                <div onClick={() => switchStatus(false)}>
                  <Btn status={myPokemons} text="My pokemons" />
                </div>
              ) : (
                <div onClick={() => switchStatus(false)}>
                  <Btn status={myPokemons} text="My pokemons" />
                </div>
              )}
              {allPokemons ? (
                <div onClick={() => switchStatus(true)}>
                  <Btn status={allPokemons} text="All pokemons" />
                </div>
              ) : (
                <div onClick={() => switchStatus(true)}>
                  <Btn status={allPokemons} text="All pokemons" />
                </div>
              )}
            </div>
          </div>
          {allPokemons && <Pokemons colection={allPokemons}  />}
          {myPokemons && <Pokemons colection={!myPokemons}  />}
        </div>
        <Bottombar />
      </div>
    </>
  );
}
export default Home;
