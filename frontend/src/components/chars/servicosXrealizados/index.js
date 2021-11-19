import React, { useEffect, useState } from "react";
import { RadialChart, DiscreteColorLegend } from "react-vis";

import api from "../../../services/api";

import { charStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

function CharsServico() {
  const classes = charStyles();
  const [status, setStatus] = useState([]);

  useEffect(() => {
    api.get("/itemordem").then((res) => {
      const status = res.data.itemOrdem;

      setStatus(status);
    });
  }, []);

  function getRandomColor() {
    var letters = "0123456789AB";
    var color = "#";
    for (var i = 0; i < 4; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const ordem = status
    .sort((x, y) => (x.idServico.nmServico > y.idServico.nmServico ? 1 : -1))
    .map((e) => e.idServico.nmServico);

  const listas = [];
  let total = 1;
  for (let i = 0; i < ordem.length; i++) {
    if (i < ordem.length - 1 && ordem[i] === ordem[i + 1]) {
      total++;
    } else {
      listas.push({
        title: ordem[i].toUpperCase(),
        angle: total,
        color: getRandomColor(),
      });
      total = 1;
    }
  }


  return (
    <div>
      <Box className={classes.containerRadial}>
        <RadialChart
          animation
          labelsStyle={{fontSize:9 }}
          data={listas}
          getLabel={d => d.title}
          width={350}
          height={350}
          showLabels
        />
      </Box>
    </div>
  );
}

export default CharsServico;
