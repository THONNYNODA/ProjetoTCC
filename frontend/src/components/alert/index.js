import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Dialog from "@material-ui/core/Dialog";

import { alertStyle,Title,BoxDialog } from './styles';

function Alert(props) {
    const classes = alertStyle()

    setTimeout(() => {
        return window.location.reload();
      }, 3000);
  return (
    <>
      <Dialog open={true}>
        <BoxDialog>
          <Title>{props.title}</Title>
          <CheckCircleIcon className={classes.icon} />
        </BoxDialog>
      </Dialog>
    </>
  );
}

export default Alert;
