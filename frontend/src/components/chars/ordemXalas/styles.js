import { makeStyles } from "@material-ui/core/styles";

export const charStyles = makeStyles({
    root: {
        maxWidth: 600,
        //maxHeight: 600,
        
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
        display: 'flex',
        justifyContent: 'space-around'
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
      boxPendente:{
          width: 15,
          height: 15,
          borderRadius:10,
          background:"#FD4659" 
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
