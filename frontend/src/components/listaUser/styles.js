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
  marginRight: 5,
  "&:hover": {
    color: "#f0f5f3",
    background: "#1FA774",
  },
});

export const SubBox = styled(Box)({
  display: "flex",
  width: "100%",
  margin: "10px 0",
  justifyContent: "space-between",
   "@media (max-width:780px)" : {
    display: "block",
  },
});
export const Conteiner = styled(Box)({
  display: "flex",
  justifyContent:"space-between",
  width: "100%",
  flex: 1,
   "@media (max-width:780px)" : {
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
    height: "100%",
    minHeight: 600,
    flexDirection: "column",
  },
  root: {
    display: "flex",
    minWidth: 400,
    maxHeight: 600,
    flexDirection: "column",
    overflow: "auto",
    justifyContent: "space-between",
     "@media (max-width:780px)" : {
      display: "block",
      //maxHeight: 'none',
    },
  },
  boxHeader: {
    background: "#1FA774",
    padding: 20,
    display: 'flex',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    border: '3px solid #fff',
    cursor: 'pointer',
    '&:hover':{
      opacity: 0.8
    }
  },
  boxHeaderTitle: {
    position: "relative",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    fontWeight: "bold",
    color: "#f0f5f3",
  },
  boxContentTitle: {
    position: "relative",
    whiteSpace: "nowrap",
    width: 350,
    padding: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  boxContent: {
    width: '100%',
    paddingLeft:20,
  },
  boxCard: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    marginTop: 15,
    
     "@media (max-width:780px)" : {
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
     "@media (max-width:780px)" : {
      width: "100%",
      display: "block",
      //maxHeight: 'none',
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
  boxCarregar: {
    width: "calc(100% - 400px)",
    height: "100%",
    minHeight: 600,
    padding: 20,
    marginLeft: 15,
     "@media (max-width:780px)" : {
      display: "block",
      width: "100%",
      marginTop: 15,
      marginLeft: 0,
    },
  },
  carregar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: 500,
    opacity: 0.1,
  },
  imgCarregar: {
    width: 200,
    height: 200,
    zIndex: 999,
  },
});

export const detalheStyle = makeStyles({
  box: {
    width: "calc(100% - 400px)",
    padding: 20,
    marginLeft: 15,
     "@media (max-width:780px)" : {
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
   "@media (max-width:780px)" : {
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
