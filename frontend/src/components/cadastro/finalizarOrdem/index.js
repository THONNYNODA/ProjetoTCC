import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import { Box } from "@material-ui/core/";
import {  Radio, RadioGroup, Typography } from "@material-ui/core";
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


function FinalizarOrdem(props) {
  const classes = finalOrdemStyle();
  const [status, setStatus] = useState({
    dsStatus: "PENDENTE",
  });

  const [alert, setAlert] = useState(false);
  const [drop, setDrop] = useState(false);


  const handleChenge = (e) => {
    const { name, value } = e.target;
    setStatus({ ...status, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDrop(true);
    setTimeout(() => {
      api.put(`/ordem/${props.datas.datas._id}`, status).then((res) => {
        return setAlert(true)
      });
      setDrop(false)
    }, 2000);
  };

  const handleClouse = () =>{
    props.setEnd(false)
  }

  return (
    <>
      <Dialog open={props.end} fullWidth>
        <BoxDialog>
          <Title>Deseja Finalizar a Ordem?</Title>
          <form onSubmit={handleSubmit}>
            <RadioGroup value={status.dsStatus}>
              <InputForm>
                <FormControlLabel
                
                  value="FINALIZADO"
                  name="dsStatus"
                  onChange={handleChenge}
                  control={<Radio className={classes.boxRadio} />}
                  label="Sim"
                />
                <FormControlLabel
                  value="PENDENTE"
                  name="dsStatus"
                  onChange={handleChenge}
                  control={<Radio className={classes.boxRadio}/>}
                  label="Nao"
                />
              </InputForm>
            </RadioGroup>
            <Box>
              <Btn type="submit">Ok</Btn>
             <BtnCancalar onClick={handleClouse}>
               Cancelar
             </BtnCancalar>
            </Box>
          </form>
        </BoxDialog>
      </Dialog>
      {alert === true ? <Alert /> : null}
      {drop === true ? (
        <Backdrop className={classes.backdrop} open={drop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
    
    </>
  );
}

export default FinalizarOrdem;