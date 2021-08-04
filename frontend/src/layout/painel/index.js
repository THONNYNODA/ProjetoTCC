import React from "react";
import {  Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";
import ListaChamadas from "../../components/listaChamadas";
import CharsFinalizados from "../../components/chars/pendenteXfinalizado";

import { painelStyle } from "./styles";
import Cards from "../../components/card";

function painel() {
  const classes = painelStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer} >
        <Grid container  justifyContent="flex-end">
          <Grid item xs={12}>
            <Header />
            <Grid className={classes.box} item xs={12}>
              <Status />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid  className={classes.box} >
              <ListaChamadas />
            </Grid>
            <Grid className={classes.box} >
              <Cards title="Pendente X Finalizados">
                <CharsFinalizados />
              </Cards>
            </Grid>
          </Grid>
        <Buttom />
        </Grid>

      </Grid>
    </>
  );
}

export default painel;
