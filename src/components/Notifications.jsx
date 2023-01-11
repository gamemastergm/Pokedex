import '../App.css';

function Notifications({ }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            height: "100vh",
            width: "auto",
            overflow: "hidden",
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.4)",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
        }}>
            <div style={{
                display: "flex",
                width: "300px",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "10px 10px 10px 10px",

            }}>
                <div style={{
                    color: "#14fff1",
                    borderBottom: "5px solid #14fff1",
                    borderRadius: "10px",
                    marginBottom: "400px",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px #14fff1",
                }} sx={{ fontWeight: 'bold', }}>Notifications</div>
            </div>
        </div>
    );
}

export default Notifications;