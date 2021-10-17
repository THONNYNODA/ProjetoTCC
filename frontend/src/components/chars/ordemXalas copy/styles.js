import { makeStyles } from "@material-ui/core/styles";

export const charStyles = makeStyles({
      barColor:{
          background:"#FD4659",
          color : "#FD4659",
          
      },
      boxFinalizado:{
          width: 15,
          height: 15,
          borderRadius:10,
          background: "#1FA774"
      },
      boxText:{
          display: 'flex',
          flex: 1,
          alignItems:"center",
          justifyContent: 'space-around'
      }
});
