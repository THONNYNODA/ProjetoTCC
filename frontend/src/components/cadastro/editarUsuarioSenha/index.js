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
  dsSenha: yup
  .string()
  .min(8, "No minimo 8 characteres")
  .required("Campo e obrigatorio"),
dsSenhaCon: yup
  .string()
  .oneOf([yup.ref("dsSenha")], "A senha nao confirma")
  .required("Campo e obrigatorio"),
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

function EditarSenha(props) {
  const classes = useStyles();

  const initialValues = {
    dsSenha: "",
    dsSenhaCon: "",
  };

  const [confirmacao, setConfirmacao] = useState(false);



  const handleClose = () => {
    props.setSenha(false);
  };
  return (
    <Dialog onClose={handleClose} open={props.senha} fullWidth>
      <BoxDialog>
        <Title>Alterar Senha</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(async () => {
              await api
                .put(`/usuario/senha/${props.datas.datas._id}`, values)
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
                    name="dsSenha"
                    fullWidth
                    component={TextField}
                    label="Nova Senha"
                  />
                  {errors.dsSenha && touched.dsSenha}
                </InputForm>
                <InputForm>
                  <Field
                    name="dsSenhaCon"
                    fullWidth
                    component={TextField}
                    label="Confirme a Senha"
                  />
                  {errors.dsSenhaCon && touched.dsSenhaCon}
                </InputForm>
              </BoxForm>
              
               

              {isSubmitting && (
                <Backdrop className={classes.backdrop} open={true}>
                  <CircularProgress color="inherit" />
                </Backdrop>
              )}

              <Btn variant="contained" disabled={isSubmitting} type="submit">
                Alterar
              </Btn>
              <BtnCancelar onClick={handleClose}>Cancelar</BtnCancelar>
              {confirmacao === true ? (
                <Alert title="Alterado com Sucesso!!" />
              ) : null}
            </Form>
          )}
        </Formik>
      </BoxDialog>
    </Dialog>
  );
}

export default EditarSenha;
