import "../App.css";
import React from "react";
import pikachu from "../resources/pikachu.gif";

function Background() {
  return (
    <>
      <div class="windowSize"
        style={{
          position: "fixed",
          maxWidth: "425px",
          minHeight: "100vh",
          zIndex: -1,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(5px)",
        }}
      />
      <img class="windowSize"
        src={pikachu}
        style={{
          position: "fixed",
          maxWidth: "425px",
          minHeight: "100vh",
          zIndex: -1000,
        }}
      />
    </>
  );
}

export default Background;
