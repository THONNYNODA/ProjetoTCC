import React, {  useEffect, useState } from 'react';
import api from '../../services/api';

import { login } from '../../config/auth';
import { useHistory, Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import InputMask from "react-input-mask";

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import logoImg from '../../assets/logo.png'

import { loginSyles, Imput, Title, Text, BackBox, BoxText } from './styles';


const validationSchema = yup.object({
  cpf:yup.string().required("Campo e obrigatorio"),
  dsSenha:yup.string().required("Campo e obrigatorio")
});

const Login = () => {
 const classes = loginSyles()
 const history = useHistory()

 const formik = useFormik({
  initialValues: {
    cpf:"", 
    dsSenha: ""
  },
  validationSchema: validationSchema,

  onSubmit: (values ) => {
    setTimeout( async () => {
      try {      
        const response = await api.post('/usuario/autenticacao', values)
        const token = response.data.token;
        const nome = response.data.usuario.nmColaborador;
        login(token,nome)
        return history.push('/painel')
        
      } catch (error) {
          return erroLogin()
           
      }
     
    }, 3000);
  },
});


 
 const [ erro, setErro ] = useState("")

  function erroLogin(){
    setErro(() => (
      <Alert variant="filled" severity="warning">
        Houve um problema com o login, verifique suas credenciais
      </Alert>)      
    )    
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
              <form className={classes.formSize} onSubmit={formik.handleSubmit} >
               {erro}
                <Imput>                           
                  <FormControl 
                          fullWidth  
                          value={formik.values.cpf}
                          onChange={formik.handleChange}
                  >                                                                       
                    <InputMask mask="999.999.999-99"  maskChar=" ">
                      {(inputProps) =>(
                        <TextField {...inputProps}  
                          fullWidth
                          id="cpf"
                          name="cpf"
                          label="CPF"
                          error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                          helperText={formik.touched.cpf && formik.errors.cpf}
                        />
                      )}
                    </InputMask>  
                  </FormControl>
                </Imput>         
                <Imput>                  
                  <TextField 
                  name="dsSenha" 
                  fullWidth
                  type="password"  
                  id="dsSenha"
                  label="Senha"
                  value={formik.values.dsSenha}
                  onChange={formik.handleChange}
                  error={formik.touched.dsSenha && Boolean(formik.errors.dsSenha)}
                  helperText={formik.touched.dsSenha && formik.errors.dsSenha}
                  />
                </Imput>         
                <BoxText>                  
                  <Link to='/cadastro' className={classes.link}>
                    <Text>Esqueceu a senha?</Text>
                  </Link>                  
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