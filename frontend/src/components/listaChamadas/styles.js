import { makeStyles } from "@material-ui/core/styles";

export const cardStyles = makeStyles((theme) => ({
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
  }));