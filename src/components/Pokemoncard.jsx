import "../App.css";
import CardMedia from "@mui/material/CardMedia";
import { Text } from "../styles";

function Pokemoncard({ name, img, status }) {
  return (
    <>
      <div class="windowSize">
        <div class="windowSize"
          style={{
            width: "100px",
            maxWidth: "150px",
            maxHeight: "200px",
            margin: "10px",
            flexDirection: "column",
            flexWrap: "wrap",
            borderRadius: "15px",
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255, 0.5)",
            borderRight: "1px solid rgba(255,255,255, 0.5)",
            zIndex: 1,
          }}
          sx={{ maxWidth: 345 }}
        >
          <div
            style={{
              position: "flex",
              paddingTop: "10px",
              paddingLeft: "20px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.25)",
              pointerEvents: "none",
              
            }}
          >
           {status ? "Pokemon": <Text style={{margin: 0, padding: 0,}}>Pokemon</Text>} 
          </div>
          <CardMedia
            component="img"
            image={img}
            style={{
            filter: status ? "":"brightness(0%)"}}
            alt="green iguana"
          />
          <div>
            <Text
              style={{
                padding: 0,
                textTransform: "capitalize",
                fontSize: 12,
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              {status ? name : "WHO'S THAT"}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemoncard;
