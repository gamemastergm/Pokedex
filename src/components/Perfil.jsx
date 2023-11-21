import "../App.css";
import pokelogo from "../resources/poke-logo.png";
import { Text, Img } from "../styles";

function Perfil() {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <img
          src={pokelogo}
          style={{
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
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          zIndex: 0,
          height: "300px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
            <Img
              src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/05/ash.png"
              style={{
                height: "150px",
                width: "150px",
                margin: "10px",
                marginTop: "50px",
                borderRadius: "100px",
              }}
            />
          <Text style={{ fontSize: "35px" }}>Ash Ketchum</Text>
        </div>
      </div>
    </>
  );
}

export default Perfil;
