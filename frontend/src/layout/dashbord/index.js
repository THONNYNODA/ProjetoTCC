import React from "react";
import {  Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";
import CharsFinalizados from "../../components/chars/pendenteXfinalizado";
import Cards from "../../components/card";

import { painelStyle } from "./styles";
import RelatorioAla from "../../components/chars/ordemXalas";

function painel() {
  const classes = painelStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer} >
        <Grid container className={classes.box} justifyContent="flex-end">
          <Grid item xs={12}>
            <Header />
            <Grid className={classes.box} item xs={12}>
              <Status />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid  className={classes.box} >
              <Cards title="Pendente X Finalizado">
                <CharsFinalizados/>
              </Cards>
              
            </Grid>
            <Grid  className={classes.box} >
              <Cards title="Ordem">
                <RelatorioAla/>
              </Cards>
            </Grid>
            <Grid  className={classes.box} >
              <Cards title="Tony noda"/>
            </Grid>
          </Grid>
        <Buttom />
        </Grid>

      </Grid>
    </>
  );
}

export default painel;
