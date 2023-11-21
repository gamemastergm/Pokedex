import "../App.css";
import p404 from "../resources/p404.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Text } from "../styles";

function Erro404({}) {
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
          overflow: "hidden",
          justifyContent: "center",
          textAlign: "center",
          background: "#151729",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", zIndex: 0 }}>
          <img
            src={p404}
            style={{
              display: "flex",
              maxWidth: "425px",
              minHeight: "200px",
              height: "200px%",
              width: "100%",
            }}
          />
          <img
            src={p404}
            style={{
              display: "flex",
              maxWidth: "425px",
              minHeight: "200px",
              height: "200px%",
              width: "100%",
            }}
          />
          <img
            src={p404}
            style={{
              display: "flex",
              maxWidth: "425px",
              minHeight: "200px",
              height: "200px%",
              width: "100%",
            }}
          />
        </div>
        <a
          style={{
            display: "flex",
            width: "100%",
            color: "white",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 5,
            position: "absolute",
            fontSize: "2vw",
          }}
        >
          <Text>
            404
            <br />
            Page not found
          </Text>

          <Button
            variant="contained"
            style={{
              borderRadius: "20px",
              width: "200px",
              height: "50px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/home">
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: "1.2vw",
                  width: "180px",
                  fontWeight: "bold",
                }}
              >
                go to home
              </Text>
            </Link>
          </Button>
        </a>
      </div>
    </>
  );
}
export default Erro404;
