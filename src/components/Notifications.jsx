import "../App.css";
import Battles from "./Battles";
import { Text } from "../styles";

function Notifications() {
  return (
    <>
        <div 
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100vh",
            maxWidth: "425px",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            overflow: "hidden",
            zIndex:1000,
            backgroundColor: "rgba(0,0,0,0.4)",
            boxShadow:
              "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "350px",
              height: "500px",
              alignItems: "center",
              flexDirection: "column",
              background:
              "linear-gradient(315deg, rgba(87, 143, 104, 0.95) 0%, rgba(37, 34, 69, 0.95) 48%, rgba(181, 62, 62, 0.95) 77%, rgba(184, 128, 68, 0.95) 100%)",
              borderRadius: "10px 10px 10px 10px",
            }}
          >
            <div
              style={{
                borderBottom: "5px solid #14fff1",
                borderRadius: "10px",
                top: 0,
                textShadow:
                  "0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px #14fff1",
              }}>
              <Text style={{margin: 0, fontWeight: "bold"}}>Notifications</Text>
              
            </div>
            <Battles />
          </div>
        </div>
    </>
  );
}

export default Notifications;
