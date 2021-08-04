import React, { useEffect, useState } from "react";
import api from "../../services/api";
import InputMask from "react-input-mask";
import { useHistory, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import logoImg from "../../assets/logo.png";
import { Box, Divider, Input } from "@material-ui/core";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { loginSyles, InputForm, Title, Text, BackBox, BoxForm } from "./styles";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";

import Dialog from "@material-ui/core/Dialog";

const validationSchema = yup.object().shape({
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

const Teste = () => {
  const classes = loginSyles();
  const history = useHistory();

  const CustomInput = (props) => (
    <InputMask {...props}>
      {(inputProps) => (
        <Field component={TextField} fullWidth {...inputProps} />
      )}
    </InputMask>
  );

  const initialValues = {
    nmColaborador: "",
    dtNascimento: "",
    funcao: "",
    cpf: "",
    email: "",
    telefone: "",
    dsSenha: "",
    dsSenhaCon: "",
  };

  const [erro, setErro] = useState("");
  const [listas, setListas] = useState([]);
  const [listasA, setListasA] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    api.get("/funcao").then((res) => {
      const listas = res.data.funcao;
      setListas(listas);
    });
  }, []);
  useEffect(() => {
    api.get("/usuario").then((res) => {
      const listasA = res.data.usuario;
      console.log(listasA)
      setListasA(listasA);
    });
  }, []);

  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
let data = new Date();
let dataFormatada = ((data.getDate() + " /" + meses[(data.getMonth())] + " /" + data.getFullYear()));
console.log(dataFormatada);

  return (
    <div className={classes.wrapperContainer}>
      <BackBox />
      <Box className={classes.wrapperLogin}>
        <Paper className={classes.boxLogin}>
          <div>
            <img className={classes.logoSize} src={logoImg} />
            <Title>Acesse ao S.O.S</Title>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const changedValue = values.telefone
                .replace(/\)/g, "")
                .replace(/\(/g, "")
                .replace(/-/g, "")
                .replace(/ /g, "");
              const changedValueCPF = values.cpf
                .replace(/\)/g, "")
                .replace(/\(/g, "")
                .replace(/./g, "")
                .replace(/ /g, "");

              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 3000);
            }}
          >
            {({ submitForm, values, isSubmitting, setFieldValue }) => (
              <Form className={classes.formSize}>
                <BoxForm>
                  <InputForm>
                    <Field
                      name="nmColaborador"
                      fullWidth
                      id="nmColaborador"
                      label="Nome Completo"
                      component={TextField}
                    />
                  </InputForm>
                  <InputForm>
                    <Field name="cpf">
                      {({ field }) => (
                        <InputMask mask="(99) 9 9999-9999" {...field}>
                          {({ inputProps }) => <Field {...inputProps} />}
                        </InputMask>
                      )}
                    </Field>
                  </InputForm>
                </BoxForm>
                <BoxForm>
                  <InputForm>
                    <Field
                      name="email"
                      fullWidth
                      id="email"
                      label="Email"
                      component={TextField}
                    />
                  </InputForm>
                  <InputForm>
                    <CustomInput
                      mask="(99) 9 9999-9999"
                      maskChar=" "
                      name="telefone"
                      label="Telefone"
                      onChange={(e) => {
                        const value = e.target.value || "";
                        console.log({ value });
                        setFieldValue("telefone", value);
                      }}
                    />
                  </InputForm>
                </BoxForm>
                <BoxForm>
                  <InputForm>
                    <Field
                      label="Data Nascimento"
                      type="date"
                      name="dtNascimento"
                      id="dtNascimento"
                      className={classes.select}
                      InputLabelProps={{ shrink: true }}
                      component={TextField}
                    />
                  </InputForm>
                  <InputForm>
                    <FormControl fullWidth>
                      <Field
                        fullWidth
                        select
                        label="Funcao"
                        name="funcao"
                        id="funcao"
                        component={TextField}
                      >
                        {listas
                          .sort((a, b) => (a.nmFuncao > b.nmFuncao ? 1 : -1))
                          .map((e) => (
                            <MenuItem >
                              {e.nmFuncao}
                            </MenuItem>
                          ))}
                      </Field>
                    </FormControl>
                  </InputForm>
                </BoxForm>
                <Divider />
                <BoxForm>
                  <InputForm>
                    <Field
                      name="dsSenha"
                      fullWidth
                      type="password"
                      id="dsSenha"
                      label="Senha"
                      component={TextField}
                    />
                  </InputForm>
                  <InputForm>
                    <Field
                      name="dsSenhaCon"
                      fullWidth
                      type="password"
                      id="dsSenhaCon"
                      label="Confirme a Senha"
                      component={TextField}
                    />
                  </InputForm>
                </BoxForm>

                {isSubmitting && (
                  <Backdrop
                    className={classes.backdrop}
                    open={open}
                    onClick={handleClose}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
                <Button
                  type="submit"
                  className={classes.buttom}
                  onClick={handleToggle}
                >
                  Cadastrar
                </Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>
          <Box>
            {listasA
              .sort((a, b) => (a.nmColaborador > b.nmColaborador  ? 1 : -1))
              .map((e) => (
               <div>
                  <MenuItem >
                  {e.nmColaborador }
                </MenuItem>
                <MenuItem  >
                  {e.dtCriacao}
                </MenuItem>
               </div>
              ))}
          </Box>

          <Link to="/" className={classes.link}>
            <Text>Retornar ao Login</Text>
          </Link>

        
        </Paper>
      </Box>
    </div>
  );
};

export default Teste;
