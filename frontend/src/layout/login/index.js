import React from 'react';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logoImg from '../../assets/logo.png'

import {loginSyles, Imput, Title, Text, BackBox, BoxText} from './styles';


function login() {
  const classes = loginSyles();

  return(
    <div className={classes.wrapperContainer}>
      <BackBox />
      <Grid container xs={12} className={classes.wrapperLogin} >       
        <Paper className={classes.boxLogin}>
        <div>
          <img className={classes.logoSize} src={logoImg}/>
          <Title>
            Acesse ao S.O.S
          </Title>
        </div>
        <form className={classes.formSize}   noValidate autoComplete="off">
          <Imput>
            <TextField fullWidth  id="standard-basic" label="Login" />
          </Imput>         
          <Imput>
            <TextField fullWidth type="password" id="standard-basic" label="Senha" />
          </Imput>         
        </form>
        <BoxText>
          <Text>Esqueceu
             a senha?</Text>
          <Text>Não sou Cadastrado(a)</Text>
        </BoxText>
        <Button className={classes.buttom}>
          Entrar
        </Button>
        </Paper>
      </Grid>
    </div>
  )
}

export default login;