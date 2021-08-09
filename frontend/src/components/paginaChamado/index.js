import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Paper from "@material-ui/core/Paper";
import { Dialog, Divider } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { detalheStyle, Text, Title, BackBox, SubBox } from "./styles";

function DetalheChamado(props) {
  const classes = detalheStyle();
  const [lista, setLista] = useState([]);
  const { onClose, selectedValue, open } = props;

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      console.log(lista);
      setLista(lista);
    });
  }, []);

  const handleOpen = (id, e) => {
    api.get(`/ordem/${id}`).then((res) => {
      const lista = lista.filter((lista) => id !== lista._id);
      setLista(lista);
      console.log(lista);
      return alert("abert com sucesso");
    });
  };

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  const horas = (lista) => {
    const datas =
      new Date(lista.dtCriado).getDate() +
      "/" +
      (new Date(lista.dtCriado).getMonth() + 1) +
      " de " +
      new Date(lista.dtCriado).getFullYear() +
      " às " +
      new Date(lista.dtCriado).getHours() +
      ":" +
      new Date(lista.dtCriado).getMinutes() +
      "h";

    return datas;
  };

  return (
    <>
     
        <Paper key={lista._id} className={classes.box}>
        <SubBox>
          <Title>Chamada - {lista._id} </Title>
          <Text> {horas(lista)} </Text>
        </SubBox>
        <BackBox>
          <SubBox>
            <Text>Assunto: {lista.dsProblema} </Text>
            <Text>Solicitante: {lista.idUsuario} </Text>
          </SubBox>
          <Text>Status: {lista.dsStatus} </Text>
          <Text>Detalhe: {lista.dsDetalhe} </Text>
        </BackBox>
        <Divider variant="middle" />
        <Title>Resposta: </Title>
        <Text>{lista.dsDetalhe} </Text>
      </Paper>

    </>
  );
}

export default DetalheChamado;
