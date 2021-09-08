import { makeStyles, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import ErrorImg from "../../assets/error.png";
import BackImg from "../../assets/back.svg";


export const BackBox = styled(Box)({
  width: "100%",
  height: "100vh",
  position: "absolute",
  backgroundImage: `url(${BackImg})`,
  backgroundSize: "cover",
  backgroundRepeat:'no-repeat',

});
export const ErrorBox = styled(Box)({
  textAlign:'center',
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%,-25%)",
  
});
export const ImgBox = styled(Box)({
  width: '100%',
  height: 300,
  backgroundImage: `url(${ErrorImg})`,
  backgroundSize: "contain",
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  textAlign:'center'
});

export const Text = styled(Typography)({
  margin: "10px",
  fontSize: "36px",
  color: "#5f615f",
});
export const LinkS = styled(Typography)({
  margin: '10px',
  fontSize:"24px",
  color:'#5f615f',
  cursor: 'pointer',
  '&:hover':{
    color:'#1FA774',
    textDecoration: 'underline',
  }
});
