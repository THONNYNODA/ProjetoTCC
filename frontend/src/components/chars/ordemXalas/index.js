import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import {
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  LabelSeries,
  AreaSeries 
} from "react-vis";

import { charStyles } from "./styles";

function RelatorioAla() {
  const classes = charStyles();
  const [lista, setLista] = useState([]);
  const [setor, setSetor] = useState([]);

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      setLista(lista);
    });
  }, []);

  const ordem = lista
    .sort((x, y) => (x.idSetor.nmSetor > y.idSetor.nmSetor ? 1 : -1))
    .map((e) => e.idSetor.nmSetor);

  const listas = [];
  let total = 1;
  for (let i = 0; i < ordem.length; i++) {
    if (i < ordem.length - 1 && ordem[i] === ordem[i + 1]) {
      total++;
    } else {
      listas.push({ x: ordem[i], y: total });
      total = 1;
    }
  }


  const BarSeries = VerticalBarSeries;
  return (
    <div className={classes.teste} >
      <FlexibleWidthXYPlot xType="ordinal" color="#1FA774"  height={350}>     
        <YAxis />
        <BarSeries barWidth={0.90} data={listas} />
        <LabelSeries data={listas} rotation={-45} getLabel={d => d.x} />
      </FlexibleWidthXYPlot>
    </div>
  );
}

export default RelatorioAla;
