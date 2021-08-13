import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { useHistory, useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { Button, TextField } from "@material-ui/core";

import { loginSyles, InputForm, BoxForm } from "./styles";
import AddIcon from "@material-ui/icons/Add";

const Teste = () => {
  const {id} = useParams()
  const classes = loginSyles();
  const history = useHistory();
  const [funcao, setFuncao] = useState({
    nmFuncao: "",
  });


  const handleChenge = (e) => {
    const { name, value } = e.target;
    setFuncao({ ...funcao, [name]: value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    api.put(`/funcao/${id}`, funcao).then((res) => {
      console.log(funcao,id)
      return history.push('/cadastros')
      
    });
    //window.location.reload();
  };

  return (
    <div className={classes.wrapperContainer}>
      <Paper>
        <form id={id ? Number.parseInt(id,10): null} onSubmit={handleSubmitEdit}>
          <InputForm>
            <BoxForm>
              <TextField
                fullWidth
                name="nmFuncao"
                variant="outlined"
                onChange={handleChenge}
             
              />
              <Button type="submit">
                <AddIcon />
              </Button>
            </BoxForm>
          </InputForm>
        </form>
      </Paper>
    </div>
  );
};

export default Teste;
