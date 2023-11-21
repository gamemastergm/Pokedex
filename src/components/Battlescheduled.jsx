import "../App.css";
import CardMedia from "@mui/material/CardMedia";
import { Text } from "../styles";

function Battlescheduled({ name, img }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CardMedia  component="img" image={img} alt="green iguana" />
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
            {name}
          </Text>
        </div>
      </div>
    </>
  );
}

export default Battlescheduled;
