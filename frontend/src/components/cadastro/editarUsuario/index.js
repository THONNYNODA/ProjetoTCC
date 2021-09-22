import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Dialog from "@material-ui/core/Dialog";
import { Checkbox, TextField, RadioGroup, Select } from "formik-material-ui";
import {
  FormControlLabel,
  MenuItem,
  Radio,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import * as yup from "yup";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import api from "../../../services/api";

import {
  InputForm,
  BoxForm,
  Title,
  BoxDialog,
  Btn,
  BtnCancelar,
} from "./styles";
import Alert from "../../alert";

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
  snPermissao: yup.string(),
  snAtivo: yup.boolean(),
});

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  check: {
    "& .MuiCheckbox-colorSecondary": {
      color: "#1FA774",
    },
    "& .MuiRadio-colorSecondary": {
      color: "#1FA774",
    },
  },
  boxRadio: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "noWrap",
  },
}));

function EditarUsuario(props) {
  const classes = useStyles();

  const initialValues = {
    nmColaborador: props.datas.datas.nmColaborador,
    dtNascimento: props.datas.datas.dtNascimento,
    funcao: props.datas.datas.funcao.nmFuncao,
    cpf: props.datas.datas.cpf,
    email: props.datas.datas.email,
    telefone: props.datas.datas.telefone,
    snAtivo: props.datas.datas.snAtivo,
    snPermissao: props.datas.datas.snPermissao,
  };
  console.log(props.datas.datas.snPermissao);

  const [funcao, setFuncao] = useState([]);
  const [confirmacao, setConfirmacao] = useState(false);

  useEffect(() => {
    api.get("/funcao").then((res) => {
      const funcao = res.data.funcao;
      setFuncao(funcao);
    });
  }, []);

  const handleClose = () => {
    props.setEditar(false);
  };
  return (
    <Dialog onClose={handleClose} open={props.editar} fullWidth>
      <BoxDialog>
        <Title>Editar Usuario</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(async () => {
              await api
                .put(`/usuario/editar/${props.datas.datas._id}`, values)
                .then((res) => {
                  setSubmitting(false);
                  return setConfirmacao(true);
                });
            }, 3000);
          }}
        >
          {({ errors, touched, isSubmitting, values }) => (
            <Form>
              <BoxForm>
                <InputForm>
                  <Field
                    name="nmColaborador"
                    fullWidth
                    component={TextField}
                    label="Nome Completo"
                  />
                  {errors.nmColaborador && touched.nmColaborador}
                </InputForm>
              </BoxForm>
              <BoxForm>
                <InputForm>
                  <Field
                    name="dtNascimento"
                    fullWidth
                    type="date"
                    component={TextField}
                    label="Nascimento"
                  />
                  {errors.dtNascimento && touched.dtNascimento}
                </InputForm>

                <InputForm>
                  <Field
                    name="cpf"
                    fullWidth
                    component={TextField}
                    label="CPF"
                  />
                  {errors.cpf && touched.cpf}
                </InputForm>
              </BoxForm>
              <BoxForm>
                <InputForm>
                  <Field
                    name="telefone"
                    fullWidth
                    component={TextField}
                    label="Telefone"
                  />
                  {errors.telefone && touched.telefone}
                </InputForm>
                <InputForm>
                  <Field
                    name="email"
                    fullWidth
                    component={TextField}
                    label="Email"
                  />
                  {errors.email && touched.email}
                </InputForm>
              </BoxForm>
              <InputForm>
                <FormControl fullWidth >
                  <InputLabel htmlFor="age-simple">Funcao</InputLabel>
                  <Field
                    
                    component={Select}
                    name="funcao"
                    inputProps={{
                      id: "age-simple",
                    }}
                  >
                    {funcao
                      .sort((a, b) => (a.nmFuncao > b.nmFuncao ? 1 : -1))
                      .map((e) => (
                        <MenuItem value={e._id} key={e._id}>
                          {e.nmFuncao}
                        </MenuItem>
                      ))}
                  </Field>
                  {errors.funcao && touched.funcao}
                </FormControl>
              </InputForm>
              <InputForm>
                <div className={classes.boxRadio}>
                  <Field
                    className={classes.boxRadio}
                    component={RadioGroup}
                    defaultValue="USUARIO"
                    name="snPermissao"
                  >
                    <FormControlLabel
                      className={classes.check}
                      label="Administrador"
                      value="ADMIN"
                      control={<Radio disabled={isSubmitting} />}
                    />
                    <FormControlLabel
                      className={classes.check}
                      label="Prestador"
                      value="PRESTADOR"
                      control={<Radio disabled={isSubmitting} />}
                    />
                    <FormControlLabel
                      className={classes.check}
                      label="Usuario"
                      value="USUARIO"
                      control={<Radio disabled={isSubmitting} />}
                    />
                  </Field>
                </div>
                <FormControlLabel
                  className={classes.check}
                  label="Ativo?"
                  control={
                    <Field
                      type="checkbox"
                      name="snAtivo"
                      component={Checkbox}
                    />
                  }
                />
              </InputForm>

              {isSubmitting && (
                <Backdrop className={classes.backdrop} open={true}>
                  <CircularProgress color="inherit" />
                </Backdrop>
              )}

              <Btn variant="contained" disabled={isSubmitting} type="submit">
                Editar
              </Btn>
              <BtnCancelar onClick={handleClose}>Cancelar</BtnCancelar>
              {confirmacao === true ? (
                <Alert title="Ordem Gerado com Sucesso!!" />
              ) : null}
            </Form>
          )}
        </Formik>
      </BoxDialog>
    </Dialog>
  );
}

export default EditarUsuario;
