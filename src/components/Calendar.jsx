import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import '../App.css';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import Button from '@mui/material/Button';
import Selectpokemon from ".//Selectpokemon";


const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6;
};

function Calendar({ }) {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState(dayjs('2022-04-07'));
    const [highlightedDays, setHighlightedDays] = React.useState([20, 6, 15, 8]);


    useEffect(() => {
        console.log(highlightedDays)
    }, [])



    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "static",
                height: "100vh",
                width: "auto",
                overflow: "hidden",
                zIndex: 3,
                backgroundColor: "#0c192c",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
            }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        orientation="portrait"
                        openTo="day"
                        value={value}
                        shouldDisableDate={isWeekend}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        renderDay={(day, _value, DayComponentProps) => {
                            const isSelected =
                                !DayComponentProps.outsideCurrentMonth &&
                                highlightedDays.indexOf(day.date()) > 0;

                            return (
                                <Badge
                                    key={day.toString()}
                                    overlap="circular"
                                    badgeContent={isSelected ? <SportsMmaIcon sx={{ color: "red", fontSize: "18px" }} /> : undefined}
                                >
                                    <PickersDay {...DayComponentProps} />
                                </Badge>
                            );
                        }}
                    />
                </LocalizationProvider>
                <Button onClick={() => setOpenModal(true)} variant="contained">Selecionar</Button>
                {openModal && <Selectpokemon open={setOpenModal} data={value.$D + "/" + value.$W + "/" + value.$y}></Selectpokemon>}
            </div>
        </>
    );
}

export default Calendar;