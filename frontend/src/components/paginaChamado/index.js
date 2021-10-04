import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ItemOrdem from "../cadastro/itemOrdem";

import {
  detalheStyle,
  Text,
  Title,
  BackBox,
  SubBox,
  ButtomChamado,
  BtnDelete,
  BtnBox,
  BtnIcon,
  BtnIconEdit,
} from "./styles";
import api from "../../services/api";
import FinalizarOrdem from "../cadastro/finalizarOrdem";
import EditarOrdem from "../cadastro/editarOrdem";
import EditarItemOrdem from "../cadastro/editarItemOrdem";
import DeletarOrdem from "../cadastro/DeletarOrdem";
import DeletarItemOrdem from "../cadastro/DeletarItemOrdem";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PermissaoComponent from "../../config/authComponent";

function DetalheChamado(props) {
  const classes = detalheStyle();
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [confirmacao, setConfirmacao] = useState(false);
  const [editar, setEditar] = useState(false);
  const [editarItem, setEditarItem] = useState(false);
  const [deletItem, setDeletItem] = useState(false);
  const [datas, setDatas] = useState("");
  const [list, setList] = useState([]);

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

  const handleDeletar = (id) => {
    setConfirmacao(true);
    setDatas({ ...datas, datas: props.lista[props.idAtual] });
    return <DeletarOrdem />;
  };
  const handleEditar = (id) => {
    setEditar(true);
    setDatas({ ...datas, datas: props.lista[props.idAtual] });
    return <EditarOrdem />;
  };
  const handleDeletarItem = (id) => {
    setDeletItem(true);
    setDatas({ ...datas, datas: props.lista[props.idAtual] });
    return <DeletarItemOrdem />;
  };
  const handleEditarItem = (list) => {
    setEditarItem(true);
    setDatas({ ...datas, datas: list });
    return <EditarItemOrdem />;
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

  const horasInicio = (list) => {
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
  const horasFinal = (list) => {
    const datas =
      new Date(list.dtFinal).getDate() +
      "/" +
      (new Date(list.dtFinal).getMonth() + 1) +
      " de " +
      new Date(list.dtFinal).getFullYear() +
      " às " +
      new Date(list.dtFinal).getHours() +
      ":" +
      new Date(list.dtFinal).getMinutes() +
      "h";

    return datas;
  };

  useEffect(() => {
    api.get("/itemordem").then((res) => {
      const list = res.data.itemOrdem;
      setList(list);
    });
  }, []);

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
          <SubBox>
            <Text>
              Status:
              <span
                className={
                  props.lista[props.idAtual].dsStatus === "PENDENTE"
                    ? classes.textVermelho
                    : classes.textVerde
                }
              >
                {props.lista[props.idAtual].dsStatus}
              </span>
            </Text>
            <Text>Setor: {props.lista[props.idAtual].idSetor.nmSetor} </Text>
          </SubBox>
          <Text>Detalhe: {props.lista[props.idAtual].dsDetalhe} </Text>
          <Divider variant="middle" />
          <Title>Resposta: </Title>
          <Box className={classes.rowItem}>
            {list
              .filter((e) => e.idOrdem._id === props.lista[props.idAtual]._id)
              .map((lis) => (
                <>
                  <Paper className={classes.boxItem} key={lis._id}>
                    <SubBox>
                      <Text>
                        Prestador em:{" "}
                        {lis.idUsuario.nmColaborador.toUpperCase()}
                      </Text>
                      <Text>Servico Realidado: {lis.idServico.nmServico}</Text>
                    </SubBox>
                    <SubBox>
                      <Text>Inicializado em: {horasInicio(lis)}</Text>
                      <Text>Finalizado em: {horasFinal(lis)}</Text>
                    </SubBox>
                    <Text>Comentario: {lis.dsServicoRealizado}</Text>
                    <BtnBox
                      display={
                        props.lista[props.idAtual].dsStatus === "PENDENTE"
                          ? "flex"
                          : "none"
                      }
                      flexDirection="row-reverse"
                    >
                      <div>
                        <BtnIconEdit onClick={() => handleEditarItem(lis)}>
                          <EditIcon />
                        </BtnIconEdit>
                        <BtnIcon onClick={() => handleDeletarItem(lis._id)}>
                          <DeleteIcon />
                        </BtnIcon>
                      </div>
                    </BtnBox>
                  </Paper>
                </>
              ))}
          </Box>
        </BackBox>
        <BtnBox
          display={
            props.lista[props.idAtual].dsStatus === "PENDENTE" ? "flex" : "none"
          }
        >
          <PermissaoComponent permissoes={["Admin", "Prestador"]}>
            <div>
              <ButtomChamado
                onClick={() => handleOpen(props.lista[props.idAtual])}
              >
                <FeedbackIcon />
                Responder
              </ButtomChamado>
              <ButtomChamado
                onClick={() => handleFinalizar(props.lista[props.idAtual])}
              >
                <DoneOutlineIcon />
                Finalizar
              </ButtomChamado>
            </div>
          </PermissaoComponent>
          <div>
            <ButtomChamado
              onClick={() => handleEditar(props.lista[props.idAtual])}
            >
              <EditIcon />
              Editar
            </ButtomChamado>
            <PermissaoComponent permissoes={["Admin"]}>
              <BtnDelete
                onClick={() => handleDeletar(props.lista[props.idAtual])}
              >
                <DeleteIcon />
                Deletar
              </BtnDelete>
            </PermissaoComponent>
          </div>
        </BtnBox>
        {confirmacao === true ? (
          <DeletarOrdem {...{ datas, confirmacao, setConfirmacao }} />
        ) : null}
        {open === true ? <ItemOrdem {...{ datas, open, setOpen }} /> : null}
        {end === true ? <FinalizarOrdem {...{ datas, end, setEnd }} /> : null}
        {editar === true ? (
          <EditarOrdem {...{ datas, editar, setEditar }} />
        ) : null}
        {deletItem === true ? (
          <DeletarItemOrdem {...{ datas, deletItem, setDeletItem }} />
        ) : null}
        {editarItem === true ? (
          <EditarItemOrdem {...{ datas, editarItem, setEditarItem }} />
        ) : null}
      </Paper>
    </>
  );
}

export default DetalheChamado;
