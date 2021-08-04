import { makeStyles } from "@material-ui/core/styles";

export const tabelaStyle = makeStyles({
  box: {
    '& .super-app-theme--header':{
        background: "#1FA774",
        color: "#f0f5f3"
    },
    '& .super-app.negative': {
        //backgroundColor: ,
        
        color: '#FF6163',
        fontWeight: '600',
      },
      '& .super-app.positive': {
        //backgroundColor: ,
        color: "#1FA774",
        fontWeight: '600',
      },
    
  },
});
