import React from "react";
import { Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";
import ListaChamadas from "../../components/listaChamadas";
import CharsFinalizados from "../../components/chars/pendenteXfinalizado";

import { cadastrosStyle } from "./styles";
import Cards from "../../components/card";
import Funcao from "../../components/cadastro/funcao";

function cadastros() {
  const classes = cadastrosStyle();
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
            <Grid className={classes.box}>
              <Cards title="Lista Setor"></Cards>
            </Grid>
            <Grid xs={4} className={classes.box}>
              <Cards title="Lista Funcao">
                <Funcao />
              </Cards>
            </Grid>
            <Grid className={classes.box}>
              <Cards title="Lista Servico"></Cards>
            </Grid>
          </Grid>
          <Buttom />
        </Grid>
      </Grid>
    </>
  );
}

export default cadastros;
