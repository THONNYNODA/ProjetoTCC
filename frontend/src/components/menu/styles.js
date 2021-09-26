import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  list: {
    width: 250,
    
  },
  wrapper: {
    display: "flex",
    padding: "5px 0 20px 0",
  },
  imagem: {
    margin: "0 auto",
    width: 70,
    height: 70,
  },
  link: {
    textDecoration: "none",
    color: "#1FA774",
  },

  btnClose:{
    position: 'absolute',
    top: 0,
    right: 0,
    border: 0,
    fontSize:30,
    padding: 5,
    backgroundColor:'#fff',
    color: "rgb(200,200,200)",
    cursor: "pointer"        
  },
  boxSubMenu:{
    paddingLeft:80,
  },
  icon:{
    color: "#1FA774",
  }
});
