import React from "react";
import { Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";
import CharsFinalizados from "../../components/chars/pendenteXfinalizado";
import Cards from "../../components/card";

import { chamdaStyle } from "./styles";
import RelatorioAla from "../../components/chars/ordemXalas";
import TabelaChamado from "../../components/tabela";
import ItemOrdem from "../../components/cadastro/itemOrdem";

function Chamadas() {
  const classes = chamdaStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer}>
        <Grid container  justifyContent="flex-end">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={11} className={classes.box}>
              <Cards title="Lista de Chamadas">
                <TabelaChamado />
              </Cards>
            </Grid>
          </Grid>
          <Buttom />
        </Grid>
      </Grid>
    </>
  );
}

export default Chamadas;
