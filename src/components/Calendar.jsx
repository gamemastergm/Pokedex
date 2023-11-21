import "../App.css";
import Selectpokemon from "./Selectpokemon";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Text } from "../styles";

function Calendar({}) {
  const [openSelect, setOpenSelect] = useState(false);
  const [phasePokemon, setPhasePokemon] = useState("your-pokemon");
  const [value, setValue] = useState(dayjs("2022-04-07"));
  return (
    <>
      {phasePokemon == "finished" ?
        <div
          style={{
            display: "flex",
            position: "absolute",
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
            zIndex: 2,
            background:
              "linear-gradient(315deg, rgba(87, 143, 104, 0.95) 0%, rgba(37, 34, 69, 0.95) 48%, rgba(181, 62, 62, 0.95) 77%, rgba(184, 128, 68, 0.95) 100%)",
            boxShadow:
              "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          <Text
            style={{
              display: "flex",
              width: "90%",
              height: "300px",
              margin: 0,
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              fontSize: "3.5vw",
              fontWeight: "bold",
            }}
          >
            scheduled battle
          </Text>
        </div>
       : 
        <></>
      }
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "400px",
          height: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="portrait"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            renderDay={(day, _value, DayComponentProps) => {
              return (
                <Badge key={day.toString()} overlap="circular">
                  <PickersDay {...DayComponentProps} />
                </Badge>
              );
            }}
          />
        </LocalizationProvider>
        <Button
          style={{ marginTop: "10px" }}
          onClick={() => setOpenSelect(true)}
          variant="contained"
        >
          Selecionar
        </Button>
        {openSelect && phasePokemon == "your-pokemon" && (
          <>
            <Text style={{ marginTop: "50px", fontSize: "24px" }}>
              Select Your Pokemon
            </Text>
            <Selectpokemon
              info={phasePokemon}
              phase={setPhasePokemon}
              open={setOpenSelect}
              data={value.$D + "/" + value.$W + "/" + value.$y}
            />
          </>
        )}
        {openSelect && phasePokemon == "enemy-pokemon" && (
          <>
            <Text style={{ marginTop: "50px", fontSize: "24px" }}>
              Select Enemy Pokemon
            </Text>
            <Selectpokemon
              info={phasePokemon}
              phase={setPhasePokemon}
              open={setOpenSelect}
              data={value.$D + "/" + (value.$M + 1) + "/" + value.$y}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Calendar;
