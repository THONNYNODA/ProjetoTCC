import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  Modal,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import {
  BoxCheck,
  BoxForm,
  Btn,
  BtnAlterar,
  BtnCancalar,
  funcaoStyle,
  InputForm,
  Title,
} from "./styles";
import { Link, useParams, useHistory } from "react-router-dom";

function Funcao() {
  const classes = funcaoStyle();
  const [values, setValues] = useState([]);
  const [funcao, setFuncao] = useState({
    nmFuncao: " ",
  });
  const [open, setOpen] = useState(null);
  const [idAtual, setIdAtual] = useState("");
  const [check, setCheck] = useState(false)

  useEffect(() => {
    api.get("/funcao").then((res) => {
      const values = res.data.funcao;
      setValues(values);
    });
  }, []);

  const handleChenge = (e) => {
    const { name, value } = e.target;
    setFuncao({ ...funcao, [name]: value });
    console.log(funcao)
  };

  const handleDelete = (id, e) => {
    api.delete(`/funcao/${id}`).then((res) => {
      const value = values.filter((values) => id !== values._id);
      setValues(value);
      return alert("Deletado com sucesso");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (funcao.nmFuncao == " ") return alert("Campo vazio");
    api.post(`/funcao`, funcao).then((res) => {
      console.log(funcao);
      return alert("Cadastrado com sucesso");
    });
    window.location.reload();
  };

  const handleChengeCheck = (e) => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
    console.log(values)
  };

  const handleOpen = (id) => {
    setIdAtual(id);
    console.log(id)
    setOpen(true);
    return <ModalEditar {...{ idAtual, values }} />;
  };
  const ModalEditar = (props) => {
    
    const history = useHistory();
    const [funcao, setFuncao] = useState({
      nmFuncao: "",
      snAtivo: true,
    });

    useEffect(() => {

      if (idAtual == " ") {
        setFuncao({ ...funcao });
      } else {
        setFuncao({...values[idAtual]} );
       console.log({...values[idAtual]});
      }
    }, [idAtual, values]);

    const handleChenge = (e) => {
      const { name, value } = e.target;
      setFuncao({ ...funcao, [name]: value });
      console.log(funcao)
    };
    const handleClose = (e) => {
      setOpen(false);
      return history.push("/cadastros");
    };

    const handleSubmitEdit = async (e) => {
      e.preventDefault();

      await api.put(`/funcao/${values[idAtual]._id}`, funcao).then((res) => {
        setOpen(false);
        return history.push("/cadastros");
      });
      window.location.reload();
    };

    return (
      <>
        <Dialog open={true}>
          <Paper>
            <InputForm>
              <Title>Editar Funcao</Title>
              <BoxForm>
                <form onSubmit={handleSubmitEdit}>
                  <TextField
                    fullWidth
                    name="nmFuncao"
                    variant="outlined"
                    onChange={handleChenge}
                    value={funcao.nmFuncao}
                    //label="Nome Funcao"
                  />

                  <BtnAlterar type="submit">Alterar</BtnAlterar>
                  <BtnCancalar onClick={handleClose}>Cancelar</BtnCancalar>
                </form>
              </BoxForm>
            </InputForm>
          </Paper>
        </Dialog>
      </>
    );
  };
  

  return (
    <>
      <TableContainer className={classes.root} component={Paper}>
        <Table
          //size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.boxHeader}>
              <TableCell className={classes.headerTitle}>Ativo</TableCell>
              <TableCell className={classes.headerTitle}>Funcao</TableCell>
              <TableCell align="center" className={classes.headerTitle}>
                Acao
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(values).map((id) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  <BoxCheck>
                    <Checkbox
                      checked={values[id].snAtivo}
                      //value={values[id].snAtivo}
                      onChange={()=> handleChengeCheck(id)}
                      name="snAtivo"
                    />
                  </BoxCheck>
                  {values[id].snAtivo}
                </TableCell>
                <TableCell
                  className={
                    values[id].snAtivo == false || "" ? classes.ativado : null
                  }
                  component="th"
                  scope="row"
                >
                  {values[id].nmFuncao}
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleOpen(id)}
                    className={classes.iconEditar}
                  >
                    <EditIcon />
                  </Button>

                  <Button
                    className={classes.iconDelete}
                    onClick={(e) => handleDelete(values[id]._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <form onSubmit={handleSubmit}>
        <InputForm>
          <TextField
            //fullWidth
            name="nmFuncao"
            variant="outlined"
            onChange={handleChenge}
            label="Nome Funcao"
          />
          <Btn type="submit">
            <AddIcon />
          </Btn>
        </InputForm>
      </form>
      <Checkbox
                      checked={check}
                      //value={check}
                      onChange={handleChengeCheck}
                    />

      {open ? <ModalEditar /> : null}
    </>
  );
}

export default Funcao;
