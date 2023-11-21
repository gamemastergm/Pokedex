import React from 'react';
import { Text } from "../styles";

function Btn({text, status}) {

    return (
        <>
            <Text style={{
                display: "inline-block",
                textDecoration: "none",
                padding: "10px 15px",
                borderBottom: !status ? "5px solid #A3A3A3" : "5px solid #14fff1",
                color: !status ? "#A3A3A3": "#14fff1",
                textShadow: !status ? "" :"0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px #14fff1",
                boxShadow: !status ? "" : "inset 0 0 32px #14fff1, 0 0 32px #14fff1 ",
                borderRadius: "10px",
                margin: "5px",
                transition: "0.5s",
            }}>{text}</Text>
        </>
    );
}

export default Btn;