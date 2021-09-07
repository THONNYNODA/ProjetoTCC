import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import { Box } from "@material-ui/core/";
import { Radio, RadioGroup } from "@material-ui/core";
import Alert from "../../alert";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import api from "../../../services/api";

import {
  InputForm,
  Title,
  BoxDialog,
  Btn,
  finalOrdemStyle,
  BtnCancalar,
} from "./styles";

function DeletarItemOrdem(props) {
  const classes = finalOrdemStyle();
  const [alert, setAlert] = useState(false);
  const [drop, setDrop] = useState(false);
  
  console.log(props.datas.datas)

  const handleDelete = (e) => {
    e.preventDefault();
    setDrop(true);
    setTimeout(async () => {
      await api.delete(`/itemordem/${props.datas.datas._id}`).then((res) => {
        return setAlert(true);
      });
      setDrop(false);
    }, 2000);
  };

  const handleClouse = () => {
    props.setDeletItem(false);
  };

  return (
    <>
      <Dialog open={props.deletItem} fullWidth>
        <BoxDialog>
          <Title>Deseja Deletar a Item?</Title>
          <Box>
            <Btn onClick={handleDelete} type="submit">
              Sim
            </Btn>
            <BtnCancalar onClick={handleClouse}>Não</BtnCancalar>
          </Box>
        </BoxDialog>
      </Dialog>
      {alert === true ? <Alert title="Excluido com Sucesso!!" /> : null}
      {drop === true ? (
        <Backdrop className={classes.backdrop} open={drop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
    </>
  );
}

export default DeletarItemOrdem;
