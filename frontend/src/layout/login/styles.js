import { makeStyles } from '@material-ui/core/styles';

export const loginSyles = makeStyles({
    logoSize:{
      width:90,
      height:90,
    },
    formSize:{
      margin:"15px 0",
    },

    wrapper: {
      width: "100%",
      height: "100vh",        
      backgroundColor: "#e8e8e8",
      backgroundImage: "linear-gradient(0deg, #e8e8e8 0%, #7af9c6 100%)",
      
    },
    wrapperLogin:{
        display:'Grid',
        placeItems:'center',
        height:'100vh'
    },
    loginItem:{
      backgroundColor: 'rgba(232, 232, 232,0.7)',
      padding: 30,
      textAlign:'center'
  },
  });