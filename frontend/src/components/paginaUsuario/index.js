import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
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
} from "./styles";
import api from "../../services/api";
import EditarOrdem from "../cadastro/editarOrdem";
import DeletarUsuario from "../cadastro/DeletarUsuario";
import EditarUsuario from "../cadastro/editarUsuario";
import EditarSenha from "../cadastro/editarUsuarioSenha";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PermissaoComponent from "../../config/authComponent";

function DetalheUsuario(props) {
  const classes = detalheStyle();
  const [confirmacao, setConfirmacao] = useState(false);
  const [editar, setEditar] = useState(false);
  const [senha, setSenha] = useState(false);
  const [datas, setDatas] = useState("");
  const [list, setList] = useState([]);

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
  const handleEditarSenha = (list) => {
    console.log(list);
    setSenha(true);
    setDatas({ ...datas, datas: list });
    return <EditarSenha />;
  };


  const Datas = (lista) => {
    const formatData = n => {
      return ('0' + n).slice(-2);
    }
    const datas =
      formatData(new Date(lista).getDate()) +
      "/" +
      formatData((new Date(lista).getMonth() + 1)) +
      " de " +
      new Date(lista).getFullYear() +
      " às " +
      formatData(new Date(lista).getHours()) +
      ":" +
      formatData (new Date(lista).getMinutes()) +
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
                  Data de Nascimento: {Datas(props.lista[props.idAtual].dtNascimento)}
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
        <PermissaoComponent permissoes={["Admin"]}>
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
            <ButtomChamado
              onClick={() => handleEditarSenha(props.lista[props.idAtual])}
            >
              <VpnKeyIcon />
              Alterar Senha
            </ButtomChamado>
          </BtnBox>
        </PermissaoComponent>

        {confirmacao === true ? (
          <DeletarUsuario {...{ datas, confirmacao, setConfirmacao }} />
        ) : null}
        {editar === true ? (
          <EditarUsuario {...{ datas, editar, setEditar }} />
        ) : null}
        {senha === true ? (
          <EditarSenha {...{ datas, senha, setSenha }} />
        ) : null}
      </Paper>
    </>
  );
}

export default DetalheUsuario;
