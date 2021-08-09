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
      ['@media (max-width:780px)']:{
        textAlign: 'center',
        width:'100%',
        padding:10,
      }
    },
    name: {
      //display: 'block',
      //margin: 30,
      width:'20%',
      textAlign: 'left',
      ['@media (max-width:780px)']:{
        display: 'none'
      }     
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
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