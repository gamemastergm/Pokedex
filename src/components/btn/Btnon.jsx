import React from 'react';

function Btnon( {text} ) {

    return (
        <>
            <div style={{
                display: "inline-block",
                textDecoration: "none",
                padding: "10px 15px",
                borderBottom: "5px solid #14fff1",
                color: "#14fff1",
                borderRadius: "10px",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px #14fff1",
                boxShadow: "inset 0 0 32px #14fff1, 0 0 32px #14fff1 ",
                margin: "5px",
            }} sx={{ fontStyle: 'italic', fontWeight: 'bold', }} >{text}</div>
        </>
    );
}

export default Btnon;