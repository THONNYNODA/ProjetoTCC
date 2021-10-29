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
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { CircularProgress } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import {
  BoxCheck,
  BoxForm,
  Btn,
  BtnAlterar,
  BtnCancalar,
  funcaoStyle,
  InputForm,
  SubBox,
  Title,
} from "./styles";
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";

import Backdrop from "@material-ui/core/Backdrop";
import PermissaoComponent from "../../../config/authComponent";

function Setor() {
  const classes = funcaoStyle();
  const [values, setValues] = useState([]);
  const [setor, setSetor] = useState({
    nmSetor: " ",
  });
  const [open, setOpen] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);
  const [idAtual, setIdAtual] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    api.get("/setor").then((res) => {
      const values = res.data.setor;
      setValues(values);
    });
  }, []);

  const handleChenge = (e) => {
    const { name, value } = e.target;
    setSetor({ ...setor, [name]: value });
  };

  const handleDelete = (id, e) => {
    setOpenDialog(true);

    setTimeout(async () => {
      await api.delete(`/setor/${id}`).then((res) => {
        const value = values.filter((values) => id !== values._id);
        setValues(value);
        setOpenDialog(false);
        return setStatus(true);
      });
      window.location.reload();
    }, 3000);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (setor.nmSetor == " ") return alert("Campo vazio");
    setOpenDialog(true);
    setTimeout(async () => {
      await api.post(`/setor`, setor).then((res) => {
        return setStatus(true);
      });
      window.location.reload();
    }, 3000);
  };

  const handleOpen = (id) => {
    setIdAtual(id);
    setOpen(true);
    return <ModalEditar {...{ idAtual, values }} />;
  };
  const ModalEditar = (props) => {
    const history = useHistory();
    const [setor, setSetor] = useState({
      nmSetor: "",
      snAtivo: true,
    });
    const [openDialog, setOpenDialog] = useState(null);

    useEffect(() => {
      if (idAtual == " ") {
        setSetor({ ...setor });
      } else {
        setSetor({ ...values[idAtual] });
      }
    }, [idAtual, values]);

    const handleChenge = (e) => {
      const { name, value } = e.target;
      setSetor({ ...setor, [name]: value });
      console.log(setor);
    };
    const handleChengeCheck = (e) => {
      setSetor({ ...setor, snAtivo: !setor.snAtivo });
      console.log(setor);
    };

    const handleClose = (e) => {
      setOpen(false);
      return history.push("/cadastros");
    };

    const handleSubmitEdit = (e) => {
      e.preventDefault();

      setOpenDialog(true);
      setTimeout(async () => {
        await api.put(`/setor/${values[idAtual]._id}`, setor).then((res) => {
          setOpenDialog(false);
          return setStatus(true);
        });
        window.location.reload();
      }, 3000);
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
                    name="nmSetor"
                    variant="outlined"
                    onChange={handleChenge}
                    value={setor.nmSetor}
                    //label="Nome Funcao"
                  />
                  <BoxCheck>
                    <FormControlLabel
                      className={classes.check}
                      control={
                        <Checkbox
                          checked={setor.snAtivo}
                          name="snAtivo"
                          onChange={handleChengeCheck}
                          value={setor.snAtivo}
                        />
                      }
                      label="Ativo ?"
                    />
                  </BoxCheck>
                  {openDialog ? (
                    <Backdrop open={openDialog} className={classes.backdrop}>
                      <CircularProgress />
                    </Backdrop>
                  ) : null}
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
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.boxHeader}>
              <TableCell className={classes.headerTitle}>Ativo</TableCell>
              <TableCell className={classes.headerTitle}>Setor</TableCell>
              <TableCell align="center" className={classes.headerTitle}>
                Acao
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(values)
              .sort((a, b) =>
                values[a].nmSetor.toUpperCase() <
                values[b].nmSetor.toUpperCase()
                  ? -1
                  : 0
              )
              .map((id) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row" align="center">
                    {values[id].snAtivo === true ? (
                      <CheckIcon className={classes.iconCheck} />
                    ) : (
                      <BlockIcon className={classes.iconDelete} />
                    )}
                  </TableCell>
                  <TableCell
                    className={
                      values[id].snAtivo == false || "" ? classes.ativado : null
                    }
                    component="th"
                    scope="row"
                  >
                    {values[id].nmSetor.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      disabled={
                        localStorage.sistemPermisson === "ADMIN" ? false : true
                      }
                      onClick={() => handleOpen(id)}
                      className={classes.iconEditar}
                    >
                      <EditIcon />
                    </Button>

                    <Button
                      disabled={
                        localStorage.sistemPermisson === "ADMIN" ? false : true
                      }
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
      <PermissaoComponent permissoes={["Admin"]}>
        <form onSubmit={handleSubmit}>
          <InputForm>
            <SubBox>
              <TextField
                fullWidth
                name="nmSetor"
                variant="outlined"
                onChange={handleChenge}
                label="Novo Setor"
              />
              <Btn type="submit">
                <AddIcon />
              </Btn>
            </SubBox>
          </InputForm>
        </form>
      </PermissaoComponent>
      {openDialog ? (
        <Backdrop open={openDialog} className={classes.backdrop}>
          <CircularProgress />
        </Backdrop>
      ) : null}
      {status ? (
        <Snackbar open={status} autoHideDuration={6000}>
          <Alert severity="success">Realizado com Sucesso!!</Alert>
        </Snackbar>
      ) : null}
      {open ? <ModalEditar /> : null}
    </>
  );
}

export default Setor;
