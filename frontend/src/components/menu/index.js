import React from 'react';
import clsx from 'clsx';

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

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div>
     <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
    >
            <MenuIcon />
            
    </IconButton>
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
        <ListItemText primary="Painel" />
      </ListItem>
      <ListItem button >
        <ListItemIcon> <InboxIcon /></ListItemIcon>
        <ListItemText primary="Chamadas" />
      </ListItem>
      <ListItem button >
        <ListItemIcon><BarChartIcon /></ListItemIcon>
        <ListItemText primary="Grafico" />
      </ListItem>
      <ListItem button >
        <ListItemIcon> <InboxIcon /></ListItemIcon>
        <ListItemText primary="Cadastro" />
      </ListItem>
      <Divider variant='middle'/>
      <ListItem button >
        <ListItemIcon> <SettingsIcon /></ListItemIcon>
        <ListItemText primary="Configuração" />
      </ListItem>
    </List>
    
    </SwipeableDrawer>
     
    </div>
  );
}
