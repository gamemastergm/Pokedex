import '../App.css';
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Notifications from "./Notifications";

function Bottombar() {
    const [inUse, setInUse] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {openModal && <Notifications />}
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "45px",
                    justifyContent: "space-between",
                    textAlign: "center",
                    alignItems: "center",
                    background: "#A3A3A3",
                    boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
                    borderRadius: "35px",
                }}
            >
                <Link to="/calendar" onClick={() => setInUse(true)} ><CalendarTodayIcon sx={{
                    background: "#0c192c", borderRadius: "50%", padding: "8px", opacity: "1",
                    color: inUse ? "white" : "black", margin: "10px"
                }} /></Link>
                <Link to="/" onClick={() => setInUse(false)} ><HomeIcon sx={{
                    background: "#0c192c", borderRadius: "50%", padding: "8px",
                    color: inUse ? "black" : "white", margin: "10px",
                }} /></Link>
                {openModal ? <NotificationsNoneIcon onClick={() => setOpenModal(false)} sx={{
                    background: "#0c192c", borderRadius: "50%", padding: "8px",
                    color: "black", margin: "10px"
                }} /> : <NotificationAddIcon onClick={() => setOpenModal(true)} sx={{
                    background: "#0c192c", borderRadius: "50%", padding: "8px",
                    color: "white", margin: "10px"
                }} />}


            </div>
        </>
    );
}

export default Bottombar;