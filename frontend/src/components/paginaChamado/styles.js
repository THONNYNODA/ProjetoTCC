import { makeStyles, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export const BackBox = styled(Box)({
  width: "100%",

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

export const detalheStyle = makeStyles({
  box: {
    width: "100%",
    margin: 20,
    padding: 20,
    display: 'flex',
    flexDirection:'column'
  },
  boxTable: {
    width: "100%",
  },
  thTable: {
    width: 100,
  },
  root: {
    maxWidth: 600,
    maxHeight: 600,
    overflow: "auto",
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
    marginTop: 5,
  },
  boxSub: {
    color: "#f0f5f3",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "#f0f5f3",
    fontWeight: "bold",
    padding: 20,
    background: "#1FA774",
  },
});
export const tabelaStyle = makeStyles({
  
  box: {
    display:'flex',
    flexWrap:'nowrap',
    background: "#55454554"

    //flexDirection:'column',
   // overflow: "auto",
    
  },
  boxTable: {
    width: "100%",
  },
  thTable: {
    width: 100,
  },
  root: {
    maxWidth: 600,
    maxHeight: 600,
    marginRight: 30,
    overflow: "auto",
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
    color: "#f0f5f3"
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
    marginTop: 5,
  },
  boxSub:{
    color: '#f0f5f3',
    display:'flex',
    justifyContent: 'space-between'
  },
  title:{
    color: '#f0f5f3',
    fontWeight:'bold',
    padding: 20,
    background: "#1FA774",
  }
  
});

