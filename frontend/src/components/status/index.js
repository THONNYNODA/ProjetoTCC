import { Paper, Box, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { NumStatus, statusStyles, Title } from "./styles";

function Status() {
  const [status, setStatus] = useState([]);

  const now = new Date();
  const data2 = now.getDate();

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const status = res.data.ordem;
      setStatus(status);
    });
  }, []);

  const classes = statusStyles();

  return (
    <Paper className={classes.grow} square>
      <Box className={classes.boxStatus}>
        <Title>Hoje</Title>
        <NumStatus>
          {
            status.filter((e) => new Date(e.dtCriado).getDate() === data2)
              .length
          }
        </NumStatus>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.boxStatus}>
        <Title>Pendente</Title>
        <NumStatus>
          {status.filter((e) => e.dsStatus === "PENDENTE").length}
        </NumStatus>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.boxStatus}>
        <Title>Finalizados</Title>
        <NumStatus>
          {status.filter((e) => e.dsStatus === "FINALIZADO").length}
        </NumStatus>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className={classes.boxStatus}>
        <Title>Chamados</Title>
        <NumStatus>{status.length}</NumStatus>
      </Box>
    </Paper>
  );
}

export default Status;
