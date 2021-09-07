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
    borderColor: "#1FA774",
  },
  "&.Mui-focused fieldset": {
    borderColor: "#1FA774",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e8e8e8",
    },
    "&:hover fieldset": {
      borderColor: "#1FA774",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1FA774",
    },
  },
});

export const Btn = styled(Button)({
  padding: "13px 30px",
  marginLeft: 5,
  fontSize: "1.2rem",
  background: "#1FA774",
  border: "3px solid #1FA774",
  color: "#e8e8e8",
  "&:hover": {
    color: "#1FA774",
    background: "#e8e8e8",
  },
});
export const BtnAlterar = styled(Button)({
  padding: "10px 15px",
  marginLeft: 5,
  fontSize: "1.2rem",
  background: "#1FA774",
  border: "2px solid #1FA774",
  color: "#e8e8e8",
  "&:hover": {
    color: "#1FA774",
    background: "#e8e8e8",
  },
});
export const BtnCancalar = styled(Button)({
  padding: "10px 15px",
  marginLeft: 5,
  fontSize: "1.2rem",
  background: "#FF6163",
  border: "2px solid #FF6163",
  color: "#e8e8e8",
  "&:hover": {
    color: "#FF6163",
    background: "#e8e8e8",
  },
});

export const BackBox = styled(Box)({
  width: "100%",
});

export const SubBox = styled(Box)({
  display: "flex",
  margin: "10px 0",
  justifyContent: "space-between",
  ["@media (max-width:780px)"]: {
    display: "block",
  },
});

export const BoxForm = styled(Box)({
  width: "100%",
  margin: "30px 0",
  textAlign: "center",
  justifyContent: "space-around",
  ["@media (max-width:780px)"]: {
    display: "block",
  },
});

export const BoxCheck = styled(Box)({
  width: "100%",
  display: "inline-block",
  textAlign: "right",
});

export const Title = styled(Typography)({
  fontSize: 28,
  fontWeight: "bolder",
  padding: 10,
  color: "#1FA774",
  textAlign: "center",
});

export const Text = styled(Typography)({
  margin: "10px",
  fontSize: "18px",
  paddingLeft: 25,
  color: "#5f615f",
  fontWeight: 400,
});

export const funcaoStyle = makeStyles({
  iconEditar: {
    color: "#F4C419",
  },
  iconDelete: {
    color: "#FF6163",
  },
  iconCheck: {
    color: "#1FA774",
  },
  ativado: {
    textDecoration: "line-through",
  },
  root: {
    maxHeight: 400,
    overflow: "auto",
  },
  boxHeader: {
    background: "#1FA774",
  },
  headerTitle: {
    fontWeight: "bold",
    color: "#f0f5f3",
  },
  title: {
    color: "#f0f5f3",
    fontWeight: "bold",
    padding: 20,
    background: "#1FA774",
  },
  boxInput: {
    display: "flex",
    marginTop: 15,
  },
  boxCard:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  },

  backdrop: {
    zIndex: 9999,
    color: "#fff",
  },
  check: {
    "& .MuiCheckbox-colorSecondary": {
      color: "#1FA774",
    },
  },
});
