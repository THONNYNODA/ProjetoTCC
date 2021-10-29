import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ListaChamadas from "../listaChamadas";
import DetalheUsuario from "../paginaUsuario";
import { listaitemOrdemStyle, Conteiner, Title, Text, BoxText } from "./styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, Divider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import CarregandoImg from "../../assets/carregando.png";

export default function ListaItemOrdem() {
  const classes = listaitemOrdemStyle();
  const [lista, setLista] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");

  useEffect(() => {
    api.get("/itemordem").then((res) => {
      const lista = res.data.itemOrdem;
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
                      <Title>
                        Serviço Realizado: {lista[id].idServico.nmServico}
                      </Title>
                      <BoxText>
                        <Text>
                          Referente ao Chamado : {lista[id].idOrdem.dsProblema}
                        </Text>
                        <Text>Iniciado em: {horas(lista[id].dtInicio)}</Text>
                        <Text>Finalizado em: {horas(lista[id].dtFinal)}</Text>
                        <Text>
                          Descrição do Serviço: {lista[id].dsServicoRealizado}
                        </Text>
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
