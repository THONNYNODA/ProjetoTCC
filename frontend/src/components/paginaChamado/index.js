import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Paper from "@material-ui/core/Paper";
import { Dialog, Divider } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import ItemOrdem from "../cadastro/itemOrdem";

import {
  detalheStyle,
  Text,
  Title,
  BackBox,
  SubBox,
  ButtomChamado,
} from "./styles";

function DetalheChamado(props) {
  const classes = detalheStyle();
  const [open, setOpen] = useState(false)

  const [item, setItem] = useState({
    idItemOrdem: {
      dsServicoRealizado: "",
    },
  });

  useEffect(
    (idAtual) => {
      if (props.idAtual === " ") {
        setItem({ ...item });
      } else {
        setItem({ ...props.lista[props.idAtual] });
      }
    },
    [props.idAtual, props.lista]
  );

  const handleOpen = (id) => {
    setOpen(true)
    console.log(id)
   
    
    return <ItemOrdem />;
  };

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
      <Paper key={props.idAtual} className={classes.box}>
        <SubBox>
          <Title>Chamada - {props.idAtual}</Title>
          <Text> Solicitado em {horas(props.lista[props.idAtual])}</Text>
        </SubBox>
        <BackBox>
          <SubBox>
            <Text>
              Assunto: {props.lista[props.idAtual].dsProblema.toUpperCase()}
            </Text>
            <Text noWrap={false}>
              Solicitante:{" "}
              {props.lista[props.idAtual].idUsuario.nmColaborador.toUpperCase()}
            </Text>
          </SubBox>
          <Text>
            Status:
            <span
              className={
                props.lista[props.idAtual].dsStatus == "PENDENTE"
                  ? classes.textVermelho
                  : classes.textVerde
              }
            >
              {props.lista[props.idAtual].dsStatus}
            </span>
          </Text>
          <Text>Detalhe: {props.lista[props.idAtual].dsDetalhe} </Text>
          <Divider variant="middle" />
          <Title>Resposta: </Title>

          {props.lista[props.idAtual].idItemOrdem.map((lis) => (
            <>
              <SubBox>
                <Text>Prestador em: {lis.idUsuario}</Text>
                <Text>Servico Realidado: {lis.idServico}</Text>
                {/* {props.lista[props.idAtual].idUsuario.map(lis => (
                 <Text>Prestador em: {lis.nmColaborador}</Text>
              ))} */}
              </SubBox>
              <SubBox>
                <Text>Inicializado em: {lis.dtInicio}</Text>
                <Text>Finalizado em: {lis.dtFinal}</Text>
              </SubBox>
              <Text>Comentario: {lis.dsServicoRealizado}</Text>
            </>
          ))}
        </BackBox>
        <ButtomChamado onClick={()=>handleOpen(props.lista[props.idAtual])}>Inserir</ButtomChamado>
        {open === true ? <ItemOrdem {...props.lista[props.idAtual]}/>: null}
      </Paper>
    </>
  );
}

export default DetalheChamado;
