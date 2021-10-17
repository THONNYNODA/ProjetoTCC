import React from "react";
import { Grid } from "@material-ui/core/";
import Header from "../../components/header";
import CharsFinalizados from "../../components/chars/pendenteXfinalizado";
import Cards from "../../components/card";

import { painelStyle } from "./styles";
import RelatorioAla from "../../components/chars/ordemXalas";

function painel() {
  const classes = painelStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer}>
        <Grid container className={classes.box} justifyContent="flex-end">
          <Grid item xs={12} className={classes.headerMarg}>
            <Header />
          </Grid>
          <Grid xs container justifyContent="center" >
            <Grid  className={classes.boxSub}>
              <Cards title="Pendente X Finalizado">
                <CharsFinalizados />
              </Cards>
            </Grid>
            <Grid sm className={classes.boxSub}>
              <Cards title="Ordem x Setor">
                <RelatorioAla />
              </Cards>
            </Grid>
            <Grid sm className={classes.boxSub}>
              <Cards title="Ordem x Setor">
                <RelatorioAla />
              </Cards>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default painel;
