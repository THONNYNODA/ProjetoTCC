import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

import Ordem from "../cadastro/ordem";
import { bottomSyles } from "./styles";



function Buttom() {
  const classes = bottomSyles();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Tooltip title="Novo Chamado" aria-label="add">
        <Fab className={classes.absolute} onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Ordem
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default Buttom;
