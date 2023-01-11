import '../App.css';

function Perfil() {
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
            }}>
                <img src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2020/05/ash.png" style={{
                    height: "100px",
                    width: "100px",
                    margin: "10px",
                    marginTop: "50px",
                    borderRadius: "50px 50px 50px 50px",
                }} />
                <div style={{
                    color: "#14fff1",
                    margin: "10px",
                    marginBottom: "20px",
                    padding: "5px 55px",
                    borderBottom: "5px solid #14fff1",
                    borderRadius: "10px",
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px #14fff1",
                }} sx={{ fontWeight: 'bold', }}>Ash Ketchum</div>
            </div>
        </>
    );
}

export default Perfil;