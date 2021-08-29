import { makeStyles, styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import BackgroundImg from '../../assets/background.jpg'


//import styled from 'styled-components';

 export const InputForm = styled(Box)({
  width: "100%", 
  margin:'10px 5px',
  '& label.Mui-focused': {
    color: '#1FA774',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1FA774',
  },
  '&.Mui-focused fieldset': {
    borderColor: '#1FA774',
  },
 });

export const BackBox = styled(Box)({
  width: "100%",
  height: "100vh",
  position: 'absolute',
  filter:'blur(5px)',
  backgroundImage: `url(${BackgroundImg})`,
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
});

export const BoxForm= styled(Box)({
  display: 'flex',
  width: "100%",
  margin: "10px 0",
  justifyContent:'space-around',
  ['@media (max-width:780px)']:{
    display: 'block',
  }
});

export const Title = styled(Typography)({
  padding: 5,
  color: '#5f615f',
});

export const Text = styled(Typography)({
  margin: '10px',
  fontSize:"12px",
  color:'#5f615f',
  cursor: 'pointer',
  '&:hover':{
    color:'#1FA774',
    textDecoration: 'underline',
  }
});


export const loginSyles = makeStyles({
    logoSize:{
      width:90,
      height:90,
    },
    formSize:{
      margin:"15px 0 30px 0",
    },

    wrapperContainer: {
      width: "100%",
      height: "100vh",      
    },
    wrapperLogin:{
        display:'Grid',
        placeItems:'center',
        height:'100vh',
    },
    boxLogin:{
      width: '100%',
      maxWidth: 500,
      backgroundColor: '#e8e8e8',
      padding: 30,
      textAlign:'center',
      zIndex: 999,
      
  },
    buttom:{
      padding: "10px 30px",
      fontSize:'1.2rem',
      background: '#1FA774',
      border: '3px solid #1FA774',
      color: '#e8e8e8',
      '&:hover':{
        color:'#1FA774',
        
      }
    },
    link:{
      textDecoration: "none"
    },
    select:{
      width: "100%",
    },

    teste:{
      border:"2px solid #55b5b5b5"
    },
    backdrop: {
      zIndex: 9999,
      color: "#fff",
    },

  });