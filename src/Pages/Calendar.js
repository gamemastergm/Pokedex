import React from "react";
import Bottombar from "../components/Bottombar";
import Calendario from "../components/Calendar";
import Background from "../components/Background";

function Calendar({}) {

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
          textAlign: "center",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Background />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "static",
            height: "100vh",
            width: "auto",
            overflowX: "hidden",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          }}
        >
            <Calendario />
        </div>
        <Bottombar />
      </div>
    </>
  );
}
export default Calendar;
