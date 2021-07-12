import React, {  useEffect, useState } from 'react';
import api from '../../services/api';

import { login } from '../../config/auth';
import { useHistory, Link } from 'react-router-dom';


//import * as yup from 'yup';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import logoImg from '../../assets/logo.png'

import { loginSyles, Imput, Title, Text, BackBox, BoxText } from './styles';




const Login = () => {
 const classes = loginSyles()
 const history = useHistory()

 const inicialValue = {
  nmUsuario: "",
  dsSenha: "",
}



 const [ values, setValues] = useState(inicialValue)
 const [ erro, setErro ] = useState("")

function onChangeLogin(ev){
  const {name, value} = ev.target;
  setValues({ ...values, [name]: value})
}
  
 const handleSubmit = async e =>{
  e.preventDefault();
  console.log(values.nmUsuario)
  console.log(values.dsSenha)

  function erroLogin(){
    setErro(() => (
      <Alert variant="filled" severity="warning">
        Houve um problema com o login, verifique suas credenciais
      </Alert>)
      
    )
    
  }

  if(values.nmUsuario.length === 0 || values.dsSenha.length === 0){
    return setErro(() => (
      <Alert variant="filled" severity="error">
        Preencha usuário e senha para continuar!
      </Alert>)
    );
  }else{
    try {
      
      const response = await api.post('/usuario/autenticacao', values)
      login(response.data.token)
      return history.push('/painel')
      
    } catch (error) {
        return erroLogin()
         
    }

  }  
 }    
    return(
      
      <div className={classes.wrapperContainer}>
        <BackBox />
        <Grid container sm={12} className={classes.wrapperLogin} >       
          <Paper className={classes.boxLogin}>
          <div>
            <img className={classes.logoSize} src={logoImg}/>
            <Title>
              Acesse ao S.O.S
            </Title>
          </div>       
              <form className={classes.formSize} onSubmit={handleSubmit} >
               {erro}
                <Imput>                           
                  <TextField name="nmUsuario"  fullWidth  id="nmUsuario" label="Login" onChange={onChangeLogin}/>
                </Imput>         
                <Imput>                  
                  <TextField  fullWidth type="password" name="dsSenha" id="dsSenha" label="Senha" onChange={onChangeLogin} />
                </Imput>         
                <BoxText>
                  <Text>Esqueceu a senha?</Text>
                  <Link to='/cadastro' className={classes.link}>
                    <Text>Não sou Cadastrado(a)</Text>
                  </Link>                  
                </BoxText>
                <Button type="submit" className={classes.buttom}>
                  Entrar
                </Button>
              </form>           
          </Paper>
        </Grid>
      </div>
    )  
}


export default Login;