import React, { useEffect, useState } from "react";
import api from "../../services/api";
import InputMask from "react-input-mask";
import { useHistory, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import logoImg from "../../assets/logo.png";
import { Box, Divider, TextField, Typography } from "@material-ui/core";
import Alert from "../../components/alert";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { loginSyles, InputForm, Title, Text, BackBox, BoxForm } from "./styles";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  nmColaborador: yup.string().required("Campo e obrigatorio"),
  email: yup
    .string()
    .email("Email nao e valido")
    .required("Campo e obrigatorio"),
  dtNascimento: yup.string().required("Campo e obrigatorio"),
  cpf: yup.string().required("Campo e obrigatorio"),
  funcao: yup.string().required("Campo e obrigatorio"),
  telefone: yup.string().required("Campo e obrigatorio"),
  dsSenha: yup
    .string()
    .min(8, "No minimo 8 characteres")
    .required("Campo e obrigatorio"),
  dsSenhaCon: yup
    .string()
    .oneOf([yup.ref("dsSenha")], "A senha nao confirma")
    .required("Campo e obrigatorio"),
});

const Cadastro = () => {
  const classes = loginSyles();
  const history = useHistory();

  const [drop, setDrop] = useState(false);
  const [alert, setAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      nmColaborador: "",
      dtNascimento: "",
      funcao: "",
      cpf: "",
      email: "",
      telefone: "",
      dsSenha: "",
      dsSenhaCon: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      setDrop(true);
      setTimeout(async () => {
        await api.post("/usuario", values);
        
        setSubmitting(false);
        setDrop(false);
        return setAlert(true);
      }, 3000);
    },
  });

  const [erro, setErro] = useState("");
  const [listas, setListas] = useState([]);

  useEffect(() => {
    api.get("/funcao").then((res) => {
      const listas = res.data.funcao;
      setListas(listas);
    });
  }, []);
  return (
    <div className={classes.wrapperContainer}>
      <BackBox />
      <Box className={classes.wrapperLogin}>
        <Paper className={classes.boxLogin}>
          <div>
            <img className={classes.logoSize} src={logoImg} />
            <Title>Acesse ao S.O.S</Title>
          </div>
          {erro}
          <form className={classes.formSize} onSubmit={formik.handleSubmit}>
            <BoxForm>
              <InputForm>
                <TextField
                  name="nmColaborador"
                  fullWidth
                  id="nmColaborador"
                  label="Nome Completo"
                  value={formik.values.nmColaborador}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.nmColaborador &&
                    Boolean(formik.errors.nmColaborador)
                  }
                  helperText={
                    formik.touched.nmColaborador && formik.errors.nmColaborador
                  }
                  //inputProps={{ style: { textTransform: "uppercase" } }}
                />
              </InputForm>
              <InputForm>
                <FormControl
                  fullWidth
                  value={formik.values.telefone}
                  onChange={formik.handleChange}
                >
                  <InputMask mask="999.999.999-99" maskChar=" ">
                    {(inputProps) => (
                      <TextField
                        {...inputProps}
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
              </InputForm>
            </BoxForm>
            <BoxForm>
              <InputForm>
                <TextField
                  name="email"
                  fullWidth
                  id="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </InputForm>
              <InputForm>
                <FormControl
                  fullWidth
                  value={formik.values.telefone}
                  onChange={formik.handleChange}
                >
                  <InputMask mask="(99) 9 9999 - 9999" maskChar=" ">
                    {(inputProps) => (
                      <TextField
                        {...inputProps}
                        fullWidth
                        id="telefone"
                        name="telefone"
                        label="Telefone"
                        error={
                          formik.touched.telefone &&
                          Boolean(formik.errors.telefone)
                        }
                        helperText={
                          formik.touched.telefone && formik.errors.telefone
                        }
                      />
                    )}
                  </InputMask>
                </FormControl>
              </InputForm>
            </BoxForm>
            <BoxForm>
              <InputForm>
                <TextField
                  label="Data Nascimento"
                  type="date"
                  name="dtNascimento"
                  id="dtNascimento"
                  className={classes.select}
                  InputLabelProps={{ shrink: true }}
                  value={formik.values.dtNascimento}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.dtNascimento &&
                    Boolean(formik.errors.dtNascimento)
                  }
                  helperText={
                    formik.touched.dtNascimento && formik.errors.dtNascimento
                  }
                />
              </InputForm>
              <InputForm>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    select
                    label="Funcao"
                    name="funcao"
                    id="funcao"
                    value={formik.values.funcao}
                    onChange={formik.handleChange}
                    helperText={formik.touched.funcao && formik.errors.funcao}
                    error={
                      formik.touched.funcao && Boolean(formik.errors.funcao)
                    }
                  >
                    {listas
                      .sort((a, b) => (a.nmFuncao > b.nmFuncao ? 1 : -1))
                      .map((e) => (
                        <MenuItem value={e._id} key={e._id}>
                          {e.nmFuncao}
                        </MenuItem>
                      ))}
                  </TextField>
                </FormControl>
              </InputForm>
            </BoxForm>
            <Divider />
            <BoxForm>
              <InputForm>
                <TextField
                  name="dsSenha"
                  fullWidth
                  type="password"
                  id="dsSenha"
                  label="Senha"
                  value={formik.values.dsSenha}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.dsSenha && Boolean(formik.errors.dsSenha)
                  }
                  helperText={formik.touched.dsSenha && formik.errors.dsSenha}
                />
              </InputForm>
              <InputForm>
                <TextField
                  name="dsSenhaCon"
                  fullWidth
                  type="password"
                  id="dsSenhaCon"
                  label="Confirme a Senha"
                  value={formik.values.dsSenhaCon}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.dsSenhaCon &&
                    Boolean(formik.errors.dsSenhaCon)
                  }
                  helperText={
                    formik.touched.dsSenhaCon && formik.errors.dsSenhaCon
                  }
                />
              </InputForm>
            </BoxForm>

            <Button type="submit" className={classes.buttom}>
              Cadastrar
            </Button>
          </form>

          <Link to="/" className={classes.link}>
            <Text>Retornar ao Login</Text>
          </Link>
        </Paper>
      </Box>
      {alert === true ? <Alert title="Cadastrado com Sucesso" /> : null}
      {drop === true ? (
        <Backdrop className={classes.backdrop} open={drop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
    </div>
  );
};

export default Cadastro;
