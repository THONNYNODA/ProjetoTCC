import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {loginSyles} from './styles';
import logoImg from '../../assets/logo.png'

function login() {
  const classes = loginSyles();

  return(
    <div className={classes.wrapper}>
      <Grid container xs={12} className={classes.wrapperLogin} > 
      
        <Paper className={classes.loginItem}>
        <div>
          <img className={classes.logoSize} src={logoImg}/>
          <h2>
            Acesse ao S.O.S
          </h2>
        </div>
        <form className={classes.formSize}   noValidate autoComplete="off">
          <div>
          <TextField id="standard-basic" label="Login" />
          </div>
          <div>
          <TextField type="password" id="standard-basic" label="Senha" />
          </div>
        </form>
        <p>Esqueceu a senha?</p>
        <Button variant="contained" color="primary">
          Enviar
        </Button>
        </Paper>
      </Grid>
    </div>
  )
}

export default login;