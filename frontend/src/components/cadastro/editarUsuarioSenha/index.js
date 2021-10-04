import React, {  useState } from "react";
import { Formik, Form, Field } from "formik";
import Dialog from "@material-ui/core/Dialog";
import {  TextField } from "formik-material-ui";
import { IconButton } from "@material-ui/core";
import * as yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import api from "../../../services/api";

import {
  InputForm,
  BoxForm,
  Title,
  BoxDialog,
  Btn,
  BtnCancelar,
  editarUsuario,
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

function EditarSenha(props) {
  const classes = editarUsuario();

  const initialValues = {
    dsSenha: "",
    dsSenhaCon: "",
  };

  const [confirmacao, setConfirmacao] = useState(false);
  const [showSenha, setShowSenha] = useState({
    newPass:false,
    confirmPass:false
  });

  const handleShowSenha = () => {
    setShowSenha({...showSenha, newPass: !showSenha.newPass});
  };
  const handleShowConfirmSenha = () => {
    setShowSenha({...showSenha, confirmPass: !showSenha.confirmPass});
  };

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
                    type={showSenha.newPass ? "text" : "password"}
                    name="dsSenha"
                    component={TextField}
                    label="Nova Senha"
                  />
                  <IconButton
                    onChange={handleShowSenha}
                    onMouseDown={handleShowSenha}
                  >
                    {showSenha.newPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  {errors.dsSenha && touched.dsSenha}
                </InputForm>
                <InputForm>
                  <Field
                    name="dsSenhaCon"
                    type={showSenha.confirmPass ? "text" : "password"}
                    component={TextField}
                    label="Confirme a Senha"
                  />
                  <IconButton
                    onChange={handleShowConfirmSenha}
                    onMouseDown={handleShowConfirmSenha}
                  >
                    {showSenha.confirmPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
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
