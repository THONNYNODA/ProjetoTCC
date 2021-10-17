import React, { useEffect, useState } from "react";
import { RadialChart } from "react-vis";

import api from "../../../services/api";

import { charStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

function CharsFinalizados() {
  const classes = charStyles();
  const [status, setStatus] = useState([]);

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const status = res.data.ordem;
      setStatus(status);
    });
  }, []);

  const pendente = status
    .filter((e) => e.dsStatus === "PENDENTE")
    .map((e) => e.dsStatus).length;
  const finalizado = status
    .filter((e) => e.dsStatus === "FINALIZADO")
    .map((e) => e.dsStatus).length;

  return (
    <>
      <Box className={classes.boxContentTitle}>
        <div className={classes.boxText}>
          <Typography>Pendentes</Typography>
          <div className={classes.boxPendente} />
        </div>
        <div className={classes.boxText}>
          <Typography>Finalizados</Typography>
          <div className={classes.boxFinalizado} />
        </div>
      </Box>
      <RadialChart
        colorType="literal"
        data={[
          {
            angle: pendente,
            color: "#FD4659",
            label: "pendente",
            name: "pendente",
          },
          {
            angle: finalizado,
            color: "#1FA774",
            label: "finalizados",
            name: "finalizados",
          },
        ]}
        width={350 }
        height={350}
      />
    </>
  );
}

export default CharsFinalizados;
