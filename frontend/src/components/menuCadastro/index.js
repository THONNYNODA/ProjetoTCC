import { Paper, Box, Divider, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { statusStyles, Title } from "./styles";

function MenuCadastro() {
  const classes = statusStyles();

  return (
    <Paper className={classes.grow} square>
      <Box className={classes.boxStatus}>
        <ListItem button>
          <Link to="/cadastros/setor" className={classes.link}>
            <Title>Setor</Title>
          </Link>
        </ListItem>
      </Box>
      <Divider orientation="horizontal" />
      <Box className={classes.boxStatus}>
        <ListItem button>
          <Link to="/cadastros/servico" className={classes.link}>
            <Title>Serviço</Title>
          </Link>
        </ListItem>
      </Box>
      <Divider orientation="horizontal" />
      <Box className={classes.boxStatus}>
        <ListItem button>
          <Link to="/cadastros/funcao" className={classes.link}>
            <Title>Função</Title>
          </Link>
        </ListItem>
      </Box>
      <Divider orientation="horizontal" />
      <Box className={classes.boxStatus}>
        <ListItem button>
          <Link to="/cadastros/usuario" className={classes.link}>
            <Title>Usuário</Title>
          </Link>
        </ListItem>
      </Box>
    </Paper>
  );
}

export default MenuCadastro;
