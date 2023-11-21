import '../App.css';
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Notifications from "./Notifications";


function Bottombar({  }) {
    const [inUse, setInUse] = useState(false)
    const [openModal, setOpenModal] = useState(false); 

    return (
        <>
        {openModal? 
        <div class="windowSize"
            style={{
                position: "fixed",
                maxWidth: "425px",
                minHeight: "100vh",
                bottom: "0",
                margin: "auto"
            }}
          ><Notifications />
        </div>:<></>}
        <div class="windowSize"
                style={{
                    position: "fixed",
                    height: "50px",
                    maxWidth: "425px",
                    justifyContent: "space-between",
                    textAlign: "center",
                    bottom: "0",
                    zIndex: 10,
                    background: "rgba(255,255,255,0.1)",
                    boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
                    borderTop: "1px solid rgba(255,255,255,0.5)",
                    backdropFilter: "blur(5px)",
                    transition: "0.1s",
                    borderRadius: "15px 15px 0 0",
                }}
            >
                <Link to="/calendar" onClick={() => setInUse(true)} >
                    <div style={{display: "flex", position: "absolute", animation: "loading 2s linear infinite", borderRadius: "50%",bottom: 6,marginLeft: "10px", padding: "20px", opacity: "1",}} />
                    <CalendarTodayIcon sx={{borderRadius: "50%", padding: "8px", opacity: "1", color: inUse ? "white" : "black", margin: "10px"}} />
                </Link>
                <Link to="/home" onClick={() => setInUse(false)} >
                    <div style={{display: "flex", position: "absolute", animation: "loading 2s linear infinite", borderRadius: "50%",bottom: 6,marginLeft: "10px", padding: "20px", opacity: "1",}} />
                    <HomeIcon sx={{borderRadius: "50%", padding: "8px", color: inUse ? "black" : "white", margin: "10px",}} />
                </Link>
                {openModal ?
                <div onClick={() => setOpenModal(false)}>
                    <NotificationsNoneIcon  sx={{background: "#0c192c", borderRadius: "50%", padding: "8px", color: "black", margin: "10px"}} />
                </div> : 
                <div>
                    <div onClick={() => setOpenModal(true)} style={{display: "flex", position: "absolute", animation: "loading 2s linear infinite", borderRadius: "50%",bottom: 6,marginLeft: "10px", padding: "20px", opacity: "1",}} />
                    <NotificationAddIcon  sx={{borderRadius: "50%", padding: "8px",color: "white", margin: "10px"}} />
                </div>}
            </div>
        </>
    );
}

export default Bottombar;