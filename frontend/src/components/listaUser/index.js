import React, { useEffect, useState } from "react";

import api from "../../services/api";
import ListaChamadas from "../listaChamadas";
import DetalheUsuario from "../paginaUsuario";

import { tabelaStyle, Conteiner } from "./styles";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import CarregandoImg from "../../assets/carregando.png";

export default function ListaUsuario() {
  const classes = tabelaStyle();
  const [lista, setLista] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");

  useEffect(() => {
    api.get("/usuario").then((res) => {
      const lista = res.data.usuario;
      setLista(lista);
    });
  }, []);

  
  const handleOpen = (id) => {
    setIdAtual(id);
    setOpen(true);
    console.log({ ...{ idAtual, lista } });
    return <DetalheUsuario {...{ idAtual, lista }} />;
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

  const Datas = (lista) => {
    const datas =
      new Date(lista.dtNascimento).getDate() +
      "/" +
      (new Date(lista.dtNascimento).getMonth() + 1) +
      " de " +
      new Date(lista.dtNascimento).getFullYear() +
      " ";
    return datas;
  };

  return (
    <>
      <Conteiner>
        <Card className={classes.root}>
          <Card className={classes.boxCard} key={lista._id} variant="outlined">
            {Object.keys(lista)
              .sort((a, b) =>
                lista[a].nmColaborador.toUpperCase() <
                lista[b].nmColaborador.toUpperCase()
                  ? -1
                  : 0
              )
              .map((id) => (
                <>
                  <Paper
                    onClick={() => handleOpen(id)}
                    className={classes.boxHeader}
                  >
                    <Avatar />
                    <div className={classes.boxContent}>
                      <Typography
                        className={classes.boxHeaderTitle}
                        variant="subtitle1"
                      >
                        {lista[id].nmColaborador.toUpperCase()}
                      </Typography>
                      <div className={classes.boxSub}>
                        <Typography component="p" align="right">
                          {lista[id].snPermissao}
                        </Typography>
                        <Typography
                          component="p"
                          className={
                            lista[id].snAtivo === false
                              ? classes.textColor
                              : null
                          }
                          align="right"
                        >
                          {lista[id].snAtivo === true ? "Ativo" : "Desativado"}
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </>
              ))}
          </Card>
        </Card>
        {open ? <DetalheUsuario {...{ idAtual, lista }} /> : <Carregando />}
      </Conteiner>
    </>
  );
}
