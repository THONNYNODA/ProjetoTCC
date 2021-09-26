import { Typography } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";

export const Title = styled(Typography)({
  fontSize:35,
  
});
export const NumStatus = styled(Typography)({
  fontSize: 27,
});

export const statusStyles = makeStyles((theme) => ({
  grow: {    
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    flexDirection:'column',
    textAlign: "center",
    flexWrap:'wrap',   
    '@media (max-width:780px)':{
      flexDirection:'column',
      margin: 20,
    }
  },
  boxStatus: {
    flex: 1,
    //border:'1px solid #42f5a1',
    '@media (max-width:780px)':{
      border:'1px outset #D8DCD6 '
    }
  },
  link: {
    width: '100%',
    textDecoration: "none",
    color: "#1FA774",
    textAlign:'center',
    padding: 20,
  },
  title:{
    textAlign:'center',
    fontSize: 47
  }
}));
