import { makeStyles } from "@material-ui/core/styles";

export const cardStyles = makeStyles({
    root: {
        maxWidth: "100%",
        //maxHeight: 600,
        
      },
      boxHeader: {
        background: "#1FA774",
      },
      boxHeaderTitle: {
        position: "relative",
        padding: 5,
        fontWeight: "bold",
        color: "#f0f5f3"
      },
  
      boxContentTitle: {
        display: 'flex',
        justifyContent: 'space-around'
      },
     
});
