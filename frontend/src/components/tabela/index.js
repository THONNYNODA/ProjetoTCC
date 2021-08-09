import React, { useEffect, useState } from "react";

import api from "../../services/api";
import ListaChamadas from "../listaChamadas";
import {
  tabelaStyle,
  detalheStyle,
  Text,
  Title,
  BackBox,
  SubBox,
  Conteiner,
  TextVermelho,
  ButtomChamado,
} from "./styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Divider, Paper } from "@material-ui/core";
import ItemOrdem from "../cadastro/itemOrdem";

export default function TabelaChamado() {
  const classes = tabelaStyle();
  const [lista, setLista] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      setLista(lista);
    });
  }, []);

  const handleDelete = (id, e) => {
    api.delete(`/ordem/${id}`).then((res) => {
      const listas = lista.filter((lista) => id !== lista._id);
      setLista(listas);
      return alert("Deletado com sucesso");
    });
  };
  const handleOpen = (id) => {
    api.get(`/ordem/${id}`).then((res) => {
      const listas = lista.filter((lista) => id === lista._id);
      setLista(listas);
      setOpen(true);
      //return <DetalheChamado/>
    });
  };
  const handleOpenItem = (id) => {
   setItem(true)
  };

  const handleClose = (value) => {
    window.location.reload();
    //setOpen(false);
  };

  const handleUpdate = () =>{

    return(
      <>
        <form>
          <input></input>
        </form>
      
      </>
    )
  }

  const DetalheChamado = () => {
    const clas = detalheStyle();

    return (
      <>
        {lista.map((lis) => (
          <Paper key={lis._id} className={clas.box}>
            <SubBox>
              <Title>Chamada - {lis._id}</Title>
              <Text> Solicitado em {horas(lis)} </Text>
            </SubBox>
            <BackBox>
              <SubBox>
                <Text>Assunto: {lis.dsProblema}</Text>
                <Text>
                  Solicitante: {lis.idUsuario.nmColaborador.toUpperCase()}
                </Text>
              </SubBox>
              <Text>
                Status:{" "}
                <span
                  className={
                    lis.dsStatus == "PENDENTE"
                      ? clas.textVermelho
                      : clas.textVerde
                  }
                >
                  {lis.dsStatus}
                </span>
              </Text>
              <Text>Detalhe: {lis.dsDetalhe} </Text>
              <Divider variant="middle" />
              <Title>Resposta: </Title>
              <Text noWrap={true}>{lis.dsDetalhe} </Text>
            </BackBox>
            <ButtomChamado onClick={e => handleClose(lis._id)}>Voltar</ButtomChamado>
            <ButtomChamado onClick={handleOpenItem} >Inserir</ButtomChamado>
            {item ? <ItemOrdem/> : null}
            
          </Paper>
        ))}
      </>
    );
  };

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
            {lista
              .sort((a, b) => (a.dtCriado < b.dtCriado ? 1 : -1))
              .map((lista) => (
                <>
                  <CardHeader
                    key={lista._id}
                    className={classes.boxHeader}
                    title={
                      <Typography
                        className={classes.boxHeaderTitle}
                        variant="subtitle1"
                      >
                        {lista.dsProblema}
                      </Typography>
                    }
                    subheader={
                      <div className={classes.boxSub}>
                        <Typography
                          //className={classes.boxHeaderTitle}
                          //color="textSecondary"
                          component="p"
                          align="right"
                        >
                          {lista.dsStatus}
                        </Typography>
                        <Typography
                          //className={classes.boxHeaderTitle}
                          //color="textSecondary"
                          component="p"
                          align="right"
                        >
                          {horas(lista)}
                        </Typography>
                      </div>
                    }
                  ></CardHeader>
                  <CardContent className={classes.boxContent}>
                    <Typography
                      //className={classes.boxContentTitle}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {lista.dsDetalhe}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button className={classes.button} size="small" onClick={(e) => handleOpen(lista._id)}>
                      Ver
                    </Button>
                  </CardActions>
                </>
              ))}
          </Card>
        </Card>
        {open ? <DetalheChamado /> : null}
      </Conteiner>
    </>
  );
}
