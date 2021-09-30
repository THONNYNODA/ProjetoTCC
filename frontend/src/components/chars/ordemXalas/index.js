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
  const [setor, setSetor] = useState([]);
  
  
  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      setLista(lista);
    });
  }, []);
  useEffect(() => {
    api.get("/setor").then((res) => {
      const setor = res.data.setor;
      setSetor(setor);
    });
  }, []);



  


  const setores = lista.map((id) =>(id.idSetor.nmSetor));
  
  const teste = lista.filter((a,b) => a.idSetor === b.idSetor );


  const ala4 = lista.filter(e=> e.idSetor.nmSetor === 'Ala-04').map((id) =>(id.idSetor.nmSetor));
  const rh = lista.filter(e=> e.idSetor.nmSetor === "Recurso Humano").map((id) =>(id.idSetor.nmSetor));
 

   console.log(setor);

  const data = [{x: 'Ala-04', y: ala4.length},{x: 'Rh', y: rh.length}]






  const BarSeries = VerticalBarSeries;
  return (
    <>
      <XYPlot animation xType="ordinal" width={400} height={350} xDistance={50}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={data} />
        <LabelSeries data={data}  />
      </XYPlot>
    </>
  );
}

export default RelatorioAla;
