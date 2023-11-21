import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./Pages/Calendar";
import Home from "./Pages/Home";
import Erro404 from "./Pages/Erro404";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<Erro404 />} />
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
