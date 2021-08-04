import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import clsx from 'clsx';
import { Button } from "@material-ui/core";
import api from "../../services/api";
import { tabelaStyle } from "./styles";


export default function TabelaChamado() {
  const classes = tabelaStyle();
  const [lista, setLista] = useState([]);

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      console.log(lista);
      setLista(lista);
    });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Id",
      headerClassName: "super-app-theme--header",
      width: 100,
      editable: false,
    },
    {
      field: "problema",
      headerName: "Assunto",
      headerClassName: "super-app-theme--header",
      width: 300,
      editable: false,
    },
    {
      field: "detalhe",
      headerName: "Detalhe",
      width: 500,
      headerClassName: "super-app-theme--header",
      editable: false,
    },
    {
      field: "datas",
      headerName: "Data",
      width: 150,
      headerClassName: "super-app-theme--header",
      editable: false,
    },
    {
      field: "solicitante",
      headerName: "Solicitante",
      width: 300,
      headerClassName: "super-app-theme--header",
      editable: false,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      headerName: "Status",
      width: 165,
      editable: false,
      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value === "PENDENTE",
        positive: params.value === "FINALIZADO",
      }),
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, "descricao") || ""} ${
    //       params.getValue(params.id, "lastName") || ""
    //     }`,
    // },
  ];

  const horas = (lista) => {
    const datas =
      new Date(lista.dtCriado).getDate() +
      "/" +
      (new Date(lista.dtCriado).getMonth() + 1) +
      " de " +
      new Date(lista.dtCriado).getFullYear() +
      " " +
      new Date(lista.dtCriado).getHours() +
      ":" +
      new Date(lista.dtCriado).getMinutes() +
      "h";

    return datas;
  };

  const rows = lista
    .sort((a, b) => (a.dtCriado < b.dtCriado ? 1 : -1))
    .map((e) => ({
      id: e._id,
      problema: e.dsProblema,
      detalhe: e.dsDetalhe,
      datas: horas(e),
      solicitante: e.idUsuario.nmColaborador,
      status: e.dsStatus,
    }));

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        className={classes.box}
        autoHeight={true}
        autoPageSize={true}
        rows={rows}
        columns={columns}
        pageSize={7}
        //checkboxSelection
        disableColumnSelector
        color="secondary"
       
     >
         
     </DataGrid>
      
    </div>
  );
}
