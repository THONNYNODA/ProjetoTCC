import { makeStyles, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

export const Conteiner = styled(Box)({
  display: "flex",
  justifyContent:"space-between",
  width: "100%",
  flex: 1,
   "@media (max-width:780px)" : {
    display: "block",
    maxHeight: "none",
  },
});

export const tabelaStyle = makeStyles({
  root: {
    display: "flex",
    minWidth: 400,
    maxHeight: 600,
    backgroundColor:"#1FA774",
    flexDirection: "column",
    overflow: "auto",
    justifyContent: "space-between",
     "@media (max-width:780px)" : {
      display: "block",
      //maxHeight: 'none',
    },
  },
  boxHeader: {
    background: "#f0f5f3",
    padding: 20,
    marginBottom: 5,
    display: 'flex',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
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
    color: " #1FA774",
  },
  boxContent: {
    width: '100%',
    paddingLeft:20,
  },
  boxCard: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    marginTop: 5,
    backgroundColor:"#1FA774",
    
     "@media (max-width:780px)" : {
      maxWidth: "100%",
      display: "block",
    },
  },

  textColor:{
     color: "#FF6163"
  },  
  boxSub: {
    color: "#1FA774",
    display: "flex",
    justifyContent: "space-between",
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
