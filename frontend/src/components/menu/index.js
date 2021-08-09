import React,{useState} from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';

import Logo from '../../assets/logo.png'
import { useStyles } from './styles'
import { Tooltip } from '@material-ui/core';

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
     <Tooltip title="Menu" placement="bottom-start">
     <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
    >
            <MenuIcon />
            
    </IconButton>
     </Tooltip>
    <SwipeableDrawer 
    variant="temporary"
    anchor="left"
    open={open}
    onClick={handleDrawerClose} 
      
    >
      <List className={clsx(classes.list)} > 
      <div className={classes.wrapper}>
        <img className={classes.imagem} src={Logo} />
      </div>
      <Divider/>   
      <ListItem button >
        <ListItemIcon > <DashboardIcon  /></ListItemIcon>
        
        <Link to='/painel' className={classes.link}> <ListItemText primary="Painel" /></Link>
      </ListItem>
      <ListItem button >
        <ListItemIcon> <InboxIcon /></ListItemIcon>
        <Link to='/chamadas' className={classes.link}> <ListItemText primary="Chamadas" /></Link>
      </ListItem>
      <ListItem button >
        <ListItemIcon><BarChartIcon /></ListItemIcon>
        
        <Link to='/dashbord' className={classes.link}> <ListItemText primary="Grafico" /></Link>
      </ListItem>
      <ListItem button >
        <ListItemIcon> <InboxIcon /></ListItemIcon>
        
        <Link to='/cadastros' className={classes.link}><ListItemText primary="Cadastro" /></Link>
      </ListItem>
      <Divider variant='middle'/>
      <ListItem button >
        <ListItemIcon> <SettingsIcon /></ListItemIcon>
        
        <Link to='/config' className={classes.link}> <ListItemText primary="Configuração" /></Link>
      </ListItem>
    </List>
    
    </SwipeableDrawer>
     
    </>
  );
}
