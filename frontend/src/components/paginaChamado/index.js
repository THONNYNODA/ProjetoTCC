import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";

import ItemOrdem from "../cadastro/itemOrdem";

import {
  detalheStyle,
  Text,
  Title,
  BackBox,
  SubBox,
  ButtomChamado,
} from "./styles";
import api from "../../services/api";
import FinalizarOrdem from "../cadastro/finalizarOrdem";

function DetalheChamado(props) {
  const classes = detalheStyle();
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [datas, setDatas] = useState("");
  const [list, setList] = useState([])

  const handleOpen = () => {
    setOpen(true);
    setDatas({ ...datas, datas: props.lista[props.idAtual] });
    return <ItemOrdem />;
  };
  const handleFinalizar = () => {
    setEnd(true);
    setDatas({ ...datas, datas: props.lista[props.idAtual] });
    return <FinalizarOrdem />;
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

  const horasItem = (list) => {
    const datas =
      new Date(list.dtInicio).getDate() +
      "/" +
      (new Date(list.dtInicio).getMonth() + 1) +
      " de " +
      new Date(list.dtInicio).getFullYear() +
      " às " +
      new Date(list.dtInicio).getHours() +
      ":" +
      new Date(list.dtInicio).getMinutes() +
      "h";

    return datas;
  };

  useEffect(()=> {
    api.get('/itemordem').then(res => {
      const list = res.data.itemOrdem;
      setList(list)      
    })
  },[])




  return (
    <>
      <Paper key={props.lista[props.idAtual]._id} className={classes.box}>
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
              Solicitante:
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
          <Box className={classes.rowItem}>

          
          {list.filter(e => e.idOrdem._id === props.lista[props.idAtual]._id).map((lis) => (
            <>
              <Paper className={classes.boxItem} key={lis._id}>
              <SubBox>
                  <Text>Prestador em: {lis.idUsuario.nmColaborador.toUpperCase()}</Text>
                  <Text>Servico Realidado: {lis.idServico.nmServico}</Text>
                  
                </SubBox>
                <SubBox>
                  <Text>Inicializado em: {lis.dtInicio}</Text>
                  <Text>Finalizado em: {lis.dtFinal}</Text>
                </SubBox>
                <Text>Comentario: {lis.dsServicoRealizado}</Text>
              </Paper>
            </>
          ))}
          </Box>
        </BackBox>
        <ButtomChamado onClick={() => handleOpen(props.lista[props.idAtual])}>
          Responder
        </ButtomChamado>
        <ButtomChamado  onClick={() =>handleFinalizar(props.lista[props.idAtual])}>
          Finalizar
        </ButtomChamado>
        {open === true ? <ItemOrdem {...{datas, open,setOpen}} /> : null}
        {end === true ? <FinalizarOrdem {...{datas,end,setEnd}} /> : null}
      </Paper>
    </>
  );
}

export default DetalheChamado;
