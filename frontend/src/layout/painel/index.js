import React from "react";
import { Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";
import ListaChamadas from "../../components/listaChamadas";
import CharsFinalizados from "../../components/chars/pendenteXfinalizado";

import { painelStyle } from "./styles";
import Cards from "../../components/card";
import ListaItemOrdem from "../../components/listaItemOrdem";

function painel() {
  const classes = painelStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Header />
            <Grid className={classes.box} item xs={12}>
              <Status />
            </Grid>
          </Grid>
          <Grid container xs={10}>
            <Grid className={classes.box} xs>
              <Cards title="Ultimas Chamadas">
                <ListaChamadas />
              </Cards>
            </Grid>
            <Grid className={classes.box} xs>
              <Cards title="Pendente X Finalizados">
                <CharsFinalizados />
              </Cards>
            </Grid>
            <Grid className={classes.box}xs>
              <Cards title="Ultimos Serviços">
                <ListaItemOrdem />
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
