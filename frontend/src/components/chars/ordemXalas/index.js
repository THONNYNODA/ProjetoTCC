import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
} from "react-vis";


function RelatorioAla() {
  
  const [lista, setLista] = useState([]);
  
  
  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      setLista(lista);
    });
  }, []);



  
  const ordem = Object.keys(lista).map((id) =>({x:lista[id].idSetor.nmSetor,y:[lista[id].idSetor].length}));

  const setores = Object.keys(lista).filter(e => lista[e] == lista[e]).map((id) =>(lista[id].idSetor.nmSetor));
  console.log(ordem);
 

  const labelData = ordem.map((d, idx) => ({
    x: d.x,
    y: Math.max(ordem[idx].y),
  }));


  const BarSeries = VerticalBarSeries;
  return (
    <>
      <XYPlot animation xType="ordinal" width={350} height={350} xDistance={50}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={ordem} />
        <LabelSeries data={labelData} getLabel={(d) => d.x} />
      </XYPlot>
    </>
  );
}

export default RelatorioAla;
