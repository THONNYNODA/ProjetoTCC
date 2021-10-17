import React, { useEffect, useState } from "react";
import api from "../../services/api";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import { cardStyles } from "./styles";

function ListaChamadas() {
  const classes = cardStyles();
  const [lista, setLista] = useState([]);

  useEffect(() => {
    api.get(`/ordem/`).then((res) => {
      const lista = res.data.ordem;
      console.log(lista);
      setLista(lista);
    });
  }, []);

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

  return (
    <>
      <Card className={classes.root} >
        <Typography variant="subtitle1" className={classes.title}>Ultimas Chamadas</Typography>
        <Card className={classes.boxCard} variant="outlined" >
          {lista 
            .sort((a, b) => (a.dtCriado < b.dtCriado ? 1 : -1))
            .map((lista) => (
              <>
                <CardHeader
                  key={lista._id}
                  className={classes.boxHeader}
                  title={
                    <Typography
                      className={classes.boxHeaderTitle}
                      variant="subtitle1"
                    >
                      {lista.dsProblema.toUpperCase()}
                    </Typography>
                  }
                  subheader={
                    <div className={classes.boxSub}>
                      <Typography
                        //className={classes.boxHeaderTitle}
                        //color="textSecondary"
                        component="p"
                        align="right"
                      >
                        {lista.dsStatus}
                      </Typography>
                      <Typography
                        //className={classes.boxHeaderTitle}
                        //color="textSecondary"
                        component="p"
                        align="right"
                      >
                        {horas(lista)}
                      </Typography>
                    </div>
                  }
                ></CardHeader>

                <CardContent className={classes.boxContent}>
                  <Typography
                   
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {lista.dsDetalhe}
                  </Typography>
                </CardContent>
               
              </>
            ))}
            
        </Card>
      </Card>
    </>
  );
}

export default ListaChamadas;
