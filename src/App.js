import './App.css';
import Bottombar from "./components/Bottombar";
import Calendar from './Pages/Calendar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{
        display: "flex",
        position: "relative",
        height: "100%",
        width: "100%",
        margin: "auto",
        maxWidth: "425px",
        minHeight: "100vh",
        flexDirection: "column",
        overflow: "hidden",
        textAlign: "center",
        background: "#0c192c",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",

      }}>
        <Home />
        <div style={{
          position: "absolute",
          paddingBottom: "1%",
          width: "100%",
          height: "auto",
          bottom: "0",

        }}>
          <Router>
            <Routes>
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
            <Bottombar />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
