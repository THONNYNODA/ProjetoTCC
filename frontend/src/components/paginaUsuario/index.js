import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import { Box, Dialog, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import UserImg from "../../assets/user.png";

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
import Alert from "../alert";
import EditarOrdem from "../cadastro/editarOrdem";
import EditarItemOrdem from "../cadastro/editarItemOrdem";
import DeletarUsuario from "../cadastro/DeletarUsuario";
import DeletarItemOrdem from "../cadastro/DeletarItemOrdem";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import FeedbackIcon from "@material-ui/icons/Feedback";
import EditarUsuario from "../cadastro/editarUsuario";

function DetalheUsuario(props) {
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
    return <DeletarUsuario />;
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

  const Datas = (lista) => {
    const datas =
      new Date(props.lista[props.idAtual].dtNascimento).getDate() +
      "/" +
      (new Date(props.lista[props.idAtual].dtNascimento).getMonth() + 1) +
      " de " +
      new Date(props.lista[props.idAtual].dtNascimento).getFullYear() +
      " ";
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
        <Paper className={classes.boxItem}>
          <div className={classes.boxCardUser}>
            <SubBox>
              <img className={classes.boxImg} src={UserImg} />
              <div className={classes.boxFlex}>
                <Title>
                  {props.lista[props.idAtual].nmColaborador.toUpperCase()}
                </Title>

                <Text>
                  Status:
                  <span
                    className={
                      props.lista[props.idAtual].snAtivo === false
                        ? classes.textVermelho
                        : classes.textVerde
                    }
                  >
                    {props.lista[props.idAtual].snAtivo === true
                      ? "Ativo"
                      : "Desativado"}
                  </span>
                </Text>
                <Text>
                  Tipo de Permissão: {props.lista[props.idAtual].snPermissao}{" "}
                </Text>
              </div>
            </SubBox>

            <BackBox>
              <SubBox>
                <Text>CPF: {props.lista[props.idAtual].cpf}</Text>
                <Text noWrap={false}>
                  Data de Nascimento: {Datas(props.lista[props.idAtual])}
                </Text>
              </SubBox>
              <SubBox>
                <div>
                  <Text>Contato:</Text>
                  <Text noWrap={false}>
                    Email: {props.lista[props.idAtual].email}
                  </Text>
                  <Text noWrap={false}>
                    Telefone: {props.lista[props.idAtual].telefone}
                  </Text>
                </div>
                <Text>Cargo: {props.lista[props.idAtual].funcao.nmFuncao}</Text>
              </SubBox>
            </BackBox>
          </div>
        </Paper>

        <BtnBox display="flex" flexDirection="row-reverse">
          <div>
            <ButtomChamado
              onClick={() => handleEditar(props.lista[props.idAtual])}
            >
              <EditIcon />
              Editar
            </ButtomChamado>
            <BtnDelete
              onClick={() => handleDeletar(props.lista[props.idAtual])}
            >
              <DeleteIcon />
              Deletar
            </BtnDelete>
          </div>
        </BtnBox>

        {confirmacao === true ? (
          <DeletarUsuario {...{ datas, confirmacao, setConfirmacao }} />
        ) : null}
        {editar === true ? (
          <EditarUsuario {...{ datas, editar, setEditar }} />
        ) : null}
       
        
      </Paper>
     
    </>
  );
}

export default DetalheUsuario;
