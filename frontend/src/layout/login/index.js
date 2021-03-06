import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { login } from "../../config/auth";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import InputMask from "react-input-mask";

import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import AlertSenha from "../../components/alertSenha";

import logoImg from "../../assets/logo.png";

import { loginSyles, Imput, Title, Text, BackBox, BoxText } from "./styles";
import { IconButton } from "@material-ui/core";

const validationSchema = yup.object({
  cpf: yup.string().required("Campo e obrigatorio"),
  dsSenha: yup.string().required("Campo e obrigatorio"),
});

const Login = () => {
  const classes = loginSyles();
  const history = useHistory();

  const [drop, setDrop] = useState(false);
  const [open, setOpan] = useState(false);

  const handleOpenPass = () => {
    setOpan(true);
  };

  const formik = useFormik({
    initialValues: {
      cpf: "",
      dsSenha: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      setDrop(true);
      setTimeout(async () => {
        try {
          const response = await api.post("/usuario/autenticacao", values);
          const token = response.data.token;
          const nome = response.data.usuario.nmColaborador;
          const role = response.data.usuario.snPermissao;

          login(token, nome, role);
          setDrop(false);
          return history.push("/painel");
        } catch (error) {
          return erroLogin();
        }
      }, 3000);
    },
  });

  const [erro, setErro] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  const handleShowSenha = () => {
    setShowSenha(!showSenha);
  };

  function erroLogin() {
    setDrop(false);
    setErro(() => (
      <Alert variant="filled" severity="warning">
        Houve um problema com o login, verifique suas credenciais
      </Alert>
    ));
  }

  return (
    <div className={classes.wrapperContainer}>
      <BackBox />
      <Grid container sm={12} className={classes.wrapperLogin}>
        <Paper className={classes.boxLogin}>
          <div>
            <img className={classes.logoSize} src={logoImg} />
            <Title>Acesse ao S.O.S</Title>
          </div>
          <form className={classes.formSize} onSubmit={formik.handleSubmit}>
            {erro}
            <Imput>
              <FormControl
                value={formik.values.cpf}
                onChange={formik.handleChange}
                fullWidth
              >
                <InputMask mask="999.999.999-99" maskChar=" ">
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
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

            <div className={classes.inputPass}>
              <Imput>
                <FormControl fullWidth>
                  <TextField
                    name="dsSenha"
                    fullWidth
                    type={showSenha ? "text" : "password"}
                    id="dsSenha"
                    label="Senha"
                    value={formik.values.dsSenha}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dsSenha && Boolean(formik.errors.dsSenha)
                    }
                    helperText={formik.touched.dsSenha && formik.errors.dsSenha}
                  />
                </FormControl>
              </Imput>
              <IconButton
                onChange={handleShowSenha}
                onMouseDown={handleShowSenha}
                className={classes.buttomPass}
              >
                {showSenha ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            <BoxText>
              <Text onClick={handleOpenPass}>Esqueceu a senha?</Text>

              <Link to="/cadastro" className={classes.link}>
                <Text>N??o sou Cadastrado(a)</Text>
              </Link>
            </BoxText>
            <Button type="submit" className={classes.buttom}>
              Entrar
            </Button>
          </form>
        </Paper>
      </Grid>
      {drop === true ? (
        <Backdrop className={classes.backdrop} open={drop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
      {open === true ? (
        <AlertSenha
          title="Aten????o!!"
          text="Por favor entre em contato com a TI para a altera????o de senha"
          {...open}
        />
      ) : null}
    </div>
  );
};

export default Login;
