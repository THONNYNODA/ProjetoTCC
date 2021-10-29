import React, { useEffect, useState } from "react";

import api from "../../services/api";
import DetalheChamado from "../paginaChamado";

import {
  tabelaStyle,
  Conteiner,
} from "./styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import CarregandoImg from "../../assets/carregando.png";


export default function TabelaChamado() {
  const classes = tabelaStyle();
  const [lista, setLista] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      setLista(lista);
    });
  }, []);

  const handleOpen = (id) => {
    setIdAtual(id);
    setOpen(true);
    console.log({ ...{ idAtual, lista } });
    return <DetalheChamado {...{ idAtual, lista }} />;
  };

  const Carregando = () => (
    <>
      <Paper className={classes.boxCarregar}>
        <Box className={classes.carregar}>
          <img src={CarregandoImg} className={classes.imgCarregar} />
        </Box>
      </Paper>
    </>
  );

  const horas = (lista) => {
    const datas =
      new Date(lista.dtCriado).getDate() +
      "/" +
      (new Date(lista.dtCriado).getMonth() + 1) +
      " de " +
      new Date(lista.dtCriado).getFullYear() +
      " " +
      new Date(lista.dtCriado).getHours() +
      ":" +
      new Date(lista.dtCriado).getMinutes() +
      "h";

    return datas;
  };

  return (
    <>
      <Conteiner>
        <Card className={classes.root}>
          <Card className={classes.boxCard} variant="outlined">
            {Object.keys(lista)
              .sort((a, b) => (a.dtCriado < b.dtCriado ? 1 : -1))
              .map((id) => (
                <>
                  <CardHeader
                    key={id}
                    className={classes.boxHeader}
                    title={
                      <Typography
                        className={classes.boxHeaderTitle}
                        variant="subtitle1"
                      >
                        {lista[id].dsProblema.toUpperCase()}
                      </Typography>
                    }
                    subheader={
                      <div className={classes.boxSub}>
                        <Typography component="p" align="right">
                          {lista[id].dsStatus}
                        </Typography>
                        <Typography component="p" align="right">
                          {horas(lista[id])}
                        </Typography>
                      </div>
                    }
                  ></CardHeader>
                  <CardContent className={classes.boxContent}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {lista[id].dsDetalhe}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button
                      className={classes.button}
                      size="small"
                      onClick={() => handleOpen(id)}
                    >
                      Ver
                    </Button>
                  </CardActions>
                </>
              ))}
          </Card>
        </Card>
        {open ? <DetalheChamado {...{ idAtual, lista }} /> : <Carregando />}
      </Conteiner>
    </>
  );
}
