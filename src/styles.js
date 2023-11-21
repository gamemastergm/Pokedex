import styled from "styled-components";
import { keyframes } from "styled-components";


//Word Animation
const animateword = keyframes`
0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;

export const Text = styled.div`
  margin: 10px;
  marginbottom: 20px;
  padding: 5px 55px;
  background: linear-gradient(
    90deg,
    #ff0000,
    #ffff00,
    #ff00f3,
    #0033ff,
    #ff00c4,
    #ff0000
  );
  background-size: 400%;
  borderradius: 10px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: ${animateword} 10s linear infinite;
`;
//
// Perfil
const rotateimg = keyframes`
from{
    transform: rotateY(0deg);
}
to{
    transform: rotateY(-360deg);
}
`;

export const Img = styled.img`
height: 180px;
width: 180px;
margin: 10px;
margin-top: 50px;
border-radius: 100px;
transform-style: center;
transform-origin: center;
animation: ${rotateimg} 5s linear infinite;
 
`;
//