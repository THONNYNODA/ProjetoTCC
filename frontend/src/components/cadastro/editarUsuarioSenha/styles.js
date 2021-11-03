import { makeStyles, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export const InputForm = styled(Box)({
  flexGrow: 1,
  margin: "10px 5px",
  "& label.Mui-focused": {
    color: "#1FA774",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1FA774",
  },
  "&.Mui-focused fieldset": {
    borderColor: "#1FA774",
  },

  display: 'flex',
  
});

export const BoxForm = styled(Box)({
  display: "flex",
  flexDirection:"column",
  width: "100%",
  margin: "10px 0",
  justifyContent: "space-around",
  "@media (max-width:780px)": {
    display: "block",
  },
});
export const BoxDialog = styled(Box)({
  padding: 40,
  textAlign: "center",
});
export const Btn = styled(Button)({
    padding: "10px 30px",
    fontSize: "1.2rem",
    margin: 5,
    background: "#1FA774",
    border: "3px solid #1FA774",
    color: "#e8e8e8",
    "&:hover": {
      color: "#1FA774",
      background: "#e8e8e8",
    },
});
export const BtnCancelar = styled(Button)({
    padding: "10px 30px",
    fontSize: "1.2rem",
    margin: 5,
    background: "#FF6163",
    border: "3px solid #FF6163",
    color: "#e8e8e8",
    "&:hover": {
      color: "#FF6163",
      background: "#e8e8e8",
    },
});

export const Title = styled(Typography)({
  padding: 5,
  fontSize: 25,
  color: "#1FA774",
  fontWeight: "bolder",
});

export const editarUsuario = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  check: {
    "& .MuiCheckbox-colorSecondary": {
      color: "#1FA774",
    },
    "& .MuiRadio-colorSecondary": {
      color: "#1FA774",
    },
  },
  boxRadio: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "noWrap",
  },
  boxIcon:{
    position:'absolute',
    right:40
  }
}));

