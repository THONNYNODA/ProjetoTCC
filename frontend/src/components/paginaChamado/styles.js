import { makeStyles, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export const BackBox = styled(Box)({
  width: "100%",
});
export const ButtomChamado = styled(Button)({
 //width: "100%",
  border: "2px solid #1FA774",
  color: "#1FA774",
  marginRight:5,
  "&:hover": {
    color: "#f0f5f3",
    background: '#1FA774',
  },
  ["@media (max-width:780px)"]: {
    marginTop:5,
    width: "100%",
    display: "block",
  },
});
export const BtnDelete = styled(Button)({
 //width: "100%",
  border: "2px solid #FF6163",
  color: "#FF6163",
  marginRight:5,
  "&:hover": {
    color: "#f0f5f3",
    background: '#FF6163',
  },
  ["@media (max-width:780px)"]: {
    marginTop:5,
    width: "100%",
    display: "block",
  },
});


export const SubBox = styled(Box)({
  display: "flex",
  width: "100%",
  margin: "10px 0",
  justifyContent: "space-between",
  ["@media (max-width:780px)"]: {
    display: "block",
  },
});
export const BtnBox = styled(Box)({
  display: props => props.display,
  width: "100%",
  margin: "10px 0",
  justifyContent: "space-between",
  ["@media (max-width:780px)"]: {
    display: props => props.display === "none" ,
  },
});
export const Conteiner = styled(Box)({
  display: "flex",
  width: "100%",
  ["@media (max-width:780px)"]: {
    display: "block",
    maxHeight: "none",
  },
  //margin: "10px 0",
  //justifyContent: "space-between",
});

export const Title = styled(Typography)({
  fontSize: 28,
  fontWeight: "bolder",
  padding: 10,
  color: "#1FA774",
});

export const Text = styled(Typography)({
  margin: "10px",
  fontSize: "18px",
  paddingLeft: 25,
  color: "#5f615f",
  fontWeight: 400,
});
// export const TextVermelho = styled(Typography)({
//   margin: "10px",
//   fontSize: "18px",
//   paddingLeft: 25,
//   color: "#FF6163",
//   fontWeight: 400,
// });
// export const TextVerde = styled(Typography)({
//   margin: "10px",
//   fontSize: "18px",
//   paddingLeft: 25,
//   color: "#1FA774",
//   fontWeight: 400,
// });

export const tabelaStyle = makeStyles({
  box: {
    //display:'flex',
    width: "100%",
    flexDirection: "column",
  },
  boxTable: {
    width: "100%",
  },
  thTable: {
    width: 100,
  },
  root: {
    display: "flex",
    maxWidth:400,
    maxHeight: 600,
    flexDirection: "column",
    overflow: "auto",
    justifyContent: "space-between",
    ["@media (max-width:780px)"]: {
      display: "block",
      //maxHeight: 'none',
    },
  },
  
  boxHeader: {
    background: "#1FA774",
  },
  boxHeaderTitle: {
    position: "relative",
    whiteSpace: "normal",
    width: 360,
    padding: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "bold",
    color: "#f0f5f3",
  },
  boxContentTitle: {
    position: "relative",
    whiteSpace: "nowrap",
    width: 360,
    //maxHeight: 50,
    padding: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  boxContent: {
    minHeight: 150,
  },
  boxCard: {
    display: "flex",
    //maxWidth: 600,
    flexDirection: "column",
    overflow: "auto",
    marginTop: 15,
    ["@media (max-width:780px)"]: {
      maxWidth: "100%",
      display: "block",
    },
  },
  boxSub: {
    color: "#f0f5f3",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    border: "1px solid #1FA774",
    color: "#f0f5f3",
    "&:hover": {
      border: "1px solid #f0f5f3",
    },
  },
  cardAction: {
    border: "2px solid #f0f5f3",
    background: "#1FA774",
    color: "#1FA774",
    "&:hover": {
      color: "#1FA774",
    },
  },
});

export const detalheStyle = makeStyles({
  box: {
    width: "calc(100% - 400px)",
    padding: 20,
    marginLeft: 15,
    ["@media (max-width:780px)"]: {
      display: "block",
      width: "100%",
      marginTop: 15,
      marginLeft: 0,
    },
  },
  textVerde: {
    color: "#1FA774",
  },
  textVermelho: {
    color: "#FF6163",
  },
  rowItem: {
    display: "flex",
    height: 200,
    flexDirection: "column",
    overflow: "auto",
    justifyContent: "space-between",
    ["@media (max-width:780px)"]: {
      display: "block",
      //maxHeight: 'none',
    },
  },
  boxItem: {
   
   margin:20,
  },
});




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
});

export const BoxForm = styled(Box)({
  display: "flex",
  width: "100%",
  margin: "10px 0",
  justifyContent: "space-around",
  ["@media (max-width:780px)"]: {
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
    background: "#1FA774",
    border: "3px solid #1FA774",
    color: "#e8e8e8",
    "&:hover": {
      color: "#1FA774",
      background: "#e8e8e8",
    },
});

