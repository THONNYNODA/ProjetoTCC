import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "formik-material-ui";
import { MenuItem } from "@material-ui/core";

import api from "../../../services/api";

import { InputForm, BoxForm, Title, BoxDialog, Btn } from "./styles";

function ItemOrdem(props) {
  const { onClose, selectedValue, open } = props;

  const initialValues = {
    dtInicio: "",
    dtFinal: "",
    hrInicio: "",
    hrFinal: "",
    dsServicoRealizado: "",
    idServico: "",
  };


  const [ordens, setOrdens] = useState([]);

  useEffect(() => {
    api.get('/ordem').then((res) => {
      const ordens = res.data.ordem;
      console.log(ordens);
      setOrdens(ordens);
    });
  }, []);


  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog  fullWidth>
      <BoxDialog>
        <Title>Finalizar Chamadas</Title>
        <p>{ordens.dsProblema}</p>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              api.post("/ordem", values);
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <BoxForm>
              <InputForm>
                <Field
                  name="dsProblema"
                  fullWidth
                  component={TextField}
                  label="Assunto"
                />
                <ErrorMessage name="dsProblema" component="div" />
              </InputForm>
              <InputForm>
                <Field
                  name="idSetor"
                  fullWidth
                  component={TextField}
                  label=" "
                  type="datetime-local"
                >
                  
                </Field>
                <ErrorMessage name="idSetor" component="div" />
              </InputForm>
            </BoxForm>
            <InputForm>
              <Field
                name="dsDetalhe"
                fullWidth
                component={TextField}
                label="Detalhe"
                multiline
                rows={4}
              />
              <ErrorMessage name="dsDetalhe" component="div" />
            </InputForm>
        <pre>{JSON.stringify(props, null, 2)}</pre>

            <Btn variant="contained" type="submit">
              Enviar
            </Btn>
          </Form>
        </Formik>
      </BoxDialog>
    </Dialog>
  );
}

export default ItemOrdem;
