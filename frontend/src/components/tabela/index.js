import React, { useEffect, useState } from "react";

import api from "../../services/api";
import ListaChamadas from "../listaChamadas";
import DetalheChamado from "../paginaChamado";

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
  InputForm,
  BoxForm,
  BoxDialog,
  Btn,
} from "./styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, CardActions } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";
import { Divider, Paper } from "@material-ui/core";
import ItemOrdem from "../cadastro/itemOrdem";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@material-ui/core/Dialog";
//import { TextField } from "formik-material-ui";
import { MenuItem } from "@material-ui/core";

export default function TabelaChamado() {
  const classes = tabelaStyle();
  const [lista, setLista] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [idAtual, setIdAtual] = useState("");
  const [openCadastro, setOpenCadastro] = useState(false);

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
    setIdAtual(id);
    setOpen(true); 
    console.log({...{ idAtual, lista }})
    return <DetalheChamado {...{ idAtual, lista }} />;
  };
  const handleOpenItem = (id) => {
    setItem(true);
  };

  const handleClose = (value) => {
    window.location.reload();
    //setOpen(false);
  };
  const handleOpenteste = (id) => {
    setOpenCadastro(true);
    setIdAtual(id);
    return <TesteItemOrdem {...{ idAtual, lista }} />;
  };

  

  const TesteItemOrdem = (props) => {
    
    const initialValues = {
      dsStatus:'FINALIZADO',
      idItemOrdem: [],
    };

    const [servico, setServico] = useState([]);
    const [itemO, setItemO] = useState({
      dtInicio: "",
      dtFinal: "",
      dsServicoRealizado: "",
    });


    const handleChenge = (e) => {
      const { name, value } = e.target;
      setItemO({ ...itemO, [name]: value });

    };

    const handleSubmitEdit = (e) => {
      e.preventDefault();
     initialValues.idItemOrdem.push(itemO);
     
      
      console.log(lista[idAtual]);
      setTimeout(async () => {
        await api.put(`/ordem/${lista[idAtual]._id}`, initialValues).then((res) => {});
        return alert("enviado");
      }, 200);

      console.log(initialValues);
      console.log(lista[idAtual]);
    };

    return (
      <>
        <Dialog open fullWidth>
          <BoxDialog>
            <Title>Finalizar Chamadas</Title>
            <form onSubmit={handleSubmitEdit} key={lista[idAtual]._id}>
              <TextField
                fullWidth
                name="dsServicoRealizado"
                variant="outlined"
                onChange={handleChenge}

                //label="Nome Servico"
              />
              <Btn type="submit">Enviar</Btn>
            </form>
          </BoxDialog>
        </Dialog>
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
                        {lista[id].dsProblema}
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
                          {lista[id].dsStatus}
                        </Typography>
                        <Typography
                          //className={classes.boxHeaderTitle}
                          //color="textSecondary"
                          component="p"
                          align="right"
                        >
                          {horas(lista[id])}
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
                  <CardActions className={classes.cardAction}>
                    <Button
                      className={classes.button}
                      size="small"
                      onClick={() => handleOpenteste(id)}
                    >
                      Teste
                    </Button>
                  </CardActions>
                </>
              ))}
          </Card>
        </Card>
        {openCadastro ? <TesteItemOrdem /> : null}
        {open ? <DetalheChamado {...{ idAtual, lista }} /> : <Title> CARREGANDO...</Title>}
      </Conteiner>
    </>
  );
}
