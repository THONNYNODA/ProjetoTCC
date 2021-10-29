import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  listaitemOrdemStyle,
  Conteiner,
  Title,
  Text,
  BoxText,
  TextStatus,
  BoxStatus,
} from "./styles";
import Card from "@material-ui/core/Card";
import { Paper } from "@material-ui/core";

export default function ListaChamadas() {
  const classes = listaitemOrdemStyle();
  const [lista, setLista] = useState([]);

  useEffect(() => {
    api.get("/ordem").then((res) => {
      const lista = res.data.ordem;
      console.log(lista);
      setLista(lista);
    });
  }, []);

  const horas = (list) => {
    const datas =
      new Date(list).getDate() +
      "/" +
      (new Date(list).getMonth() + 1) +
      " de " +
      new Date(list).getFullYear() +
      " às " +
      new Date(list).getHours() +
      ":" +
      new Date(list).getMinutes() +
      "h";

    return datas;
  };

  return (
    <>
      <Conteiner>
        <Card className={classes.root}>
          <Card className={classes.boxCard} key={lista._id} variant="outlined">
            {Object.keys(lista)
              .sort((a, b) => (lista[a].dtCriado > lista[b].dtCriado ? -1 : 0))
              .map((id) => (
                <>
                  <Paper className={classes.boxHeader}>
                    <div className={classes.boxContent}>
                      <Title>Problema: {lista[id].dsProblema}</Title>
                      <BoxText>
                        <BoxStatus>
                          <Text>Status:</Text>
                          <TextStatus
                            color={
                              lista[id].dsStatus === "FINALIZADO"
                                ? "#1FA774"
                                : "#FF6163"
                            }
                          >
                            {lista[id].dsStatus}
                          </TextStatus>
                        </BoxStatus>
                        <Text>
                          Data Solicitada: {horas(lista[id].dtCriado)}
                        </Text>
                        <Text>Detalhe do Problema: {lista[id].dsDetalhe}</Text>
                      </BoxText>
                    </div>
                  </Paper>
                </>
              ))}
          </Card>
        </Card>
      </Conteiner>
    </>
  );
}
