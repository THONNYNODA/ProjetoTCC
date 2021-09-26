import React from "react";
import { Grid } from "@material-ui/core/";
import Header from "../../components/header";
import Status from "../../components/status";
import Buttom from "../../components/buttom";

import { cadastrosStyle } from "./styles";
import Cards from "../../components/card";
import Funcao from "../../components/cadastro/funcao";
import Servico from "../../components/cadastro/servicos";
import Setor from "../../components/cadastro/setor";
import MenuCadastro from "../../components/menuCadastro";

function cadastrosSetor() {
  const classes = cadastrosStyle();
  return (
    <>
      <Grid container alignItems="flex-start" className={classes.boxContainer}>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid container justifyContent="center">
            <Grid className={classes.box} xs={12} sm={2} >
              <MenuCadastro />
            </Grid>
            <Grid className={classes.box} xs={12} sm={9} >
              <Cards title="Lista Setor">
                <Setor />
              </Cards>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default cadastrosSetor;
