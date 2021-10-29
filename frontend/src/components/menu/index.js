import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from "@material-ui/icons//Create";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListAltIcon from '@material-ui/icons/ListAlt';
import CloseIcon from '@material-ui/icons/Close';

import Logo from "../../assets/logo.png";
import { useStyles } from "./styles";
import { Tooltip, Collapse } from "@material-ui/core";

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const [subOpen, setSubOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setSubOpen(!subOpen);
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
      >
        <List className={clsx(classes.list)}>
          <div className={classes.wrapper}>
            <img className={classes.imagem} src={Logo} />
            <button className={classes.btnClose} onClick={handleDrawerClose}>
            <CloseIcon/>
            </button>
          </div>
          <Divider />
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              {" "}
              <DashboardIcon />
            </ListItemIcon>
            <Link to="/painel" className={classes.link}>
              {" "}
              <ListItemText primary="Painel" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              {" "}
              <ListAltIcon />
            </ListItemIcon>
            <Link to="/chamadas" className={classes.link}>
              {" "}
              <ListItemText primary="Chamadas" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.icon}>
              <BarChartIcon />
            </ListItemIcon>

            <Link to="/dashbord" className={classes.link}>
              {" "}
              <ListItemText primary="Grafico" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon className={classes.icon}>
              {" "}
              <CreateIcon />
            </ListItemIcon>

            <Link className={classes.link}>
              <ListItemText primary="Cadastro" />
            </Link>
            <ListItemIcon className={classes.icon}>
              {subOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
          <Collapse in={subOpen} timeout="auto" unmountOnExit>
            <ListItem button className={classes.boxSubMenu}>
              <Link to="/cadastros/funcao" className={classes.link}>
                {" "}
                <ListItemText primary="Função" />
              </Link>
            </ListItem>
            <ListItem button className={classes.boxSubMenu}>
              <Link to="/cadastros/setor" className={classes.link}>
                {" "}
                <ListItemText primary="Setor" />
              </Link>
            </ListItem>
            <ListItem button className={classes.boxSubMenu}>
              <Link to="/cadastros/servico" className={classes.link}>
                {" "}
                <ListItemText primary="Serviço" />
              </Link>
            </ListItem>
            <ListItem button className={classes.boxSubMenu}>
              <Link to="/cadastros/usuario" className={classes.link}>
                {" "}
                <ListItemText primary="Usuário" />
              </Link>
            </ListItem>
          </Collapse>
        </List>
      </SwipeableDrawer>
    </>
  );
}
