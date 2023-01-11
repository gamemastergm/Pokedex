import "../App.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import SportsMmaIcon from '@mui/icons-material/SportsMma';

function Battlecard({ }) {
    return (
        <>
            <div style={{
                display: "flex",
                width: "100%",
                height: "100%",
            }}>

                <Card style={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                    margin: "10px",
                    borderRadius: "15px 15px 15px 15px",
                    width: "100px",
                    height: "140px",
                }} sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <div style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            marginTop: "22.5px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <SportsMmaIcon sx={{ color: "red", fontSize: "18px" }} />
                            <div sx={{ fontStyle: 'italic', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 20 }} >BATTLE</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Battlecard;