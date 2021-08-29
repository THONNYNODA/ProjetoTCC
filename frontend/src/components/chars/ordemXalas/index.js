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



const greenData = [
  { x: "Ala 01", y: 5},
  { x: "B", y: 7 },
  { x: "C", y: 13 },
];
const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y),
}));

function RelatorioAla() {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      console.log(lista);
      setLista(lista);
    });
  }, []);

  const ordem = Object.keys(lista).filter(id => lista[id].idSetor.nmSetor === lista[id]).map((id) =>lista[id].idSetor.nmSetor);

  const setor = ordem.filter((e) => e._id === e.nmSetor).map((s) => s._id);
  console.log(ordem);

  const BarSeries = VerticalBarSeries;
  return (
    <>
      <XYPlot animation xType="ordinal" width={350} height={350} xDistance={50}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={greenData} />
        <LabelSeries data={labelData} getLabel={(d) => d.x} />
      </XYPlot>
    </>
  );
}

export default RelatorioAla;
