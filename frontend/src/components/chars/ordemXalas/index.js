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
  { x: "Ala 01", y: 2 },
  { x: "B", y: 7 },
  { x: "C", y: 15 },
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

  const ordem = lista.filter((e) => e ===e.idSetor).map((e) => e.idSetor);

  const setor = ordem.filter((e) => e._id === e.nmSetor).map((s) => s._id);
  console.log(setor);
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
