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
  Tooltip,
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

function Servico() {
  const classes = funcaoStyle();
  const [values, setValues] = useState([]);
  const [servico, setServico] = useState({
    nmServico: " ",
  });
  const [open, setOpen] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);
  const [idAtual, setIdAtual] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    api.get("/servico").then((res) => {
      const values = res.data.servico;
      setValues(values);
    });
  }, []);

  const handleChenge = (e) => {
    const { name, value } = e.target;
    setServico({ ...servico, [name]: value });
  };

  const handleDelete = (id, e) => {
    setOpenDialog(true);
    setTimeout(async () => {
      await api.delete(`/servico/${id}`).then((res) => {
        const value = values.filter((values) => id !== values._id);
        setValues(value);
        return setStatus(true);
      });
      window.location.reload();
    }, 2000);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (servico.nmServico == " ") return alert("Campo vazio");
    setOpenDialog(true);
    setTimeout(async () => {
      await api.post(`/servico`, servico).then((res) => {
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
    const [servico, setServico] = useState({
      nmServico: "",
      snAtivo: true,
    });
    const [openDialog, setOpenDialog] = useState(null);

    useEffect(() => {
      if (idAtual == " ") {
        setServico({ ...servico });
      } else {
        setServico({ ...values[idAtual] });
      }
    }, [idAtual, values]);

    const handleChenge = (e) => {
      const { name, value } = e.target;
      setServico({ ...servico, [name]: value });
    };

    const handleChengeCheck = (e) => {
      setServico({ ...servico, snAtivo: !servico.snAtivo });
    };

    const handleClose = (e) => {
      setOpen(false);
      return history.push("/cadastros/servico");
    };

    const handleSubmitEdit = (e) => {
      e.preventDefault();

      setOpenDialog(true);
      setTimeout(async () => {
        await api
          .put(`/servico/${values[idAtual]._id}`, servico)
          .then((res) => {
            setOpenDialog(false);
            setOpen(false);
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
              <Title>Editar Servico</Title>
              <BoxForm>
                <form onSubmit={handleSubmitEdit}>
                  <TextField
                    fullWidth
                    name="nmServico"
                    variant="outlined"
                    onChange={handleChenge}
                    value={servico.nmServico}
                  />
                  <TextField
                    fullWidth
                    name="dsServico"
                    variant="outlined"
                    onChange={handleChenge}
                    value={servico.dsServico}
                  />
                  <BoxCheck>
                    <FormControlLabel
                      className={classes.check}
                      control={
                        <Checkbox
                          checked={servico.snAtivo}
                          name="snAtivo"
                          onChange={handleChengeCheck}
                          value={servico.snAtivo}
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
                  {status ? (
                    <Snackbar open={status} autoHideDuration={6000}>
                      <Alert onClose={handleClose} severity="success">
                        Alterado com Sucesso!!
                      </Alert>
                    </Snackbar>
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
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.boxHeader}>
              <TableCell className={classes.headerTitle}>Ativo</TableCell>
              <TableCell className={classes.headerTitle}>Servi??o</TableCell>
              <TableCell className={classes.headerTitle}>Descri????o</TableCell>
              <TableCell align="center" className={classes.headerTitle}>
                A????o
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(values)
              .sort((a, b) =>
                values[a].nmServico.toUpperCase() <
                values[b].nmServico.toUpperCase()
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
                    {values[id].nmServico.toUpperCase()}
                  </TableCell>
                  <TableCell
                    className={
                      values[id].snAtivo == false || "" ? classes.ativado : null
                    }
                    component="th"
                    scope="row"
                  >
                    {values[id].dsServico.toUpperCase()}
                  </TableCell>

                  <TableCell align="center">
                    <Tooltip title="Editar">
                      <Button
                        disabled={
                          localStorage.sistemPermisson === "ADMIN"
                            ? false
                            : true
                        }
                        onClick={() => handleOpen(id)}
                        className={classes.iconEditar}
                      >
                        <EditIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Deletar">
                      <Button
                        disabled={
                          localStorage.sistemPermisson === "ADMIN"
                            ? false
                            : true
                        }
                        className={classes.iconDelete}
                        onClick={(e) => handleDelete(values[id]._id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <InputForm>
        <PermissaoComponent permissoes={["Admin"]}>
          <form className={classes.boxRow} onSubmit={handleSubmit}>
            <SubBox>
              <TextField
                fullWidth
                name="nmServico"
                variant="outlined"
                onChange={handleChenge}
                label="Novo Servi??o"
              />
              <TextField
                fullWidth
                name="dsServico"
                variant="outlined"
                onChange={handleChenge}
                label="Descri????o"
              />
              <Tooltip title="Adicionar">
                <Btn type="submit">
                  <AddIcon />
                </Btn>
              </Tooltip>
            </SubBox>
          </form>
        </PermissaoComponent>
      </InputForm>
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

export default Servico;
