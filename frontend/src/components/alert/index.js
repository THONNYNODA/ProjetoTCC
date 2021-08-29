import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Dialog from "@material-ui/core/Dialog";

import { alertStyle,Title,BoxDialog } from './styles';

function Alert() {
    const classes = alertStyle()

    setTimeout(() => {
        return window.location.reload();
      }, 3000);
  return (
    <>
      <Dialog open={true}>
        <BoxDialog>
          <Title>Enviado com Sucesso!!</Title>
          <CheckCircleIcon className={classes.icon} />
        </BoxDialog>
      </Dialog>
    </>
  );
}

export default Alert;
