import React from "react";

import { Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";
import Cards from "../../components/card";

import { configStyle } from "./styles";
import ListaUsuario from "../../components/listaUser";

function Configuracao() {
  console.log(localStorage.sistemPermisson);
  const classes = configStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer}>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12}>
            <Header />
            <Grid className={classes.box} item xs={12}>
              <Status />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid xs={11} className={classes.box}>
              <Cards title="Usuarios">
                <ListaUsuario />
              </Cards>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </>
  );
}

export default Configuracao;
