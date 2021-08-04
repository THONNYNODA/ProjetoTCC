import { Typography } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";

export const Title = styled(Typography)({
  fontSize: 18,
  
});
export const NumStatus = styled(Typography)({
  fontSize: 27,
});

export const statusStyles = makeStyles((theme) => ({
  grow: {    
    background: "#f0f5f3",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    flexWrap:'wrap',   
    margin: "40px 60px",
    ['@media (max-width:780px)']:{
      flexDirection:'column',
      margin: 20,
    }
  },
  boxStatus: {
    flex: 1,
    //border:'1px solid #42f5a1',
    padding: "10px 20px",
    "&:nth-of-type(4)":{
      background:"#1FA774",
      color:'#f0f5f3'
    },
    ['@media (max-width:780px)']:{
      border:'1px outset #D8DCD6 '
    }
  },
  teste:{
      //border:'2px solid #DA467D'
  }
}));
