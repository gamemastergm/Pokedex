import React from 'react';

function Btnoff({text}) {

    return (
        <>
            <div style={{
                display: "inline-block",
                textDecoration: "none",
                padding: "10px 15px",
                borderBottom: "5px solid #A3A3A3",
                color: "#A3A3A3",
                borderRadius: "10px",
                margin: "5px",
            }} sx={{ fontStyle: 'italic', fontWeight: 'bold', }} >{text}</div>
        </>
    );
}

export default Btnoff;