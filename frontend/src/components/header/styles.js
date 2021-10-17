import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,      
    },
    bar:{
      background:"#1FA774",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      
    },
    title: {
      display: 'block',
      width:'50%',
      textAlign: 'center',
      '@media (max-width:780px)':{
        textAlign: 'center',
        width:'100%',
        padding:10,
      }
    },
    name: {
      width:'20%',
      textAlign: 'left',
      '@media (max-width:780px)':{
        display: 'none'
      }     
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));