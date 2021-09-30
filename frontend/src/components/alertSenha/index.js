import React from "react";

import Dialog from "@material-ui/core/Dialog";

import { alertStyle,Title,BoxDialog,Text } from './styles';

function AlertSenha(props) {
    const classes = alertStyle()

    setTimeout(() => {
      return window.location.reload();
    }, 3000);
  return (
    <>
      <Dialog open={true}>
        <BoxDialog>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          
        </BoxDialog>
      </Dialog>
    </>
  );
}

export default AlertSenha;
