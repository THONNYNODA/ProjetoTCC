import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "formik-material-ui";
import { MenuItem, Typography } from "@material-ui/core";

import api from "../../../services/api";

import { InputForm, BoxForm, Title, BoxDialog, Btn } from "./styles";

function ItemOrdem() {
  const initialValues = {
    dtInicio: "",
    dtFinal: "",
    dsServicoRealizado: "",
    idServico: "",
  };

  const [servico, setServico] = useState([]);

  useEffect(() => {
    api.get("/servico").then((res) => {
      const servico = res.data.servico;
      console.log(servico);
      setServico(servico);
    });
  }, []);

  return (
    <>
      <Dialog open fullWidth>
        <BoxDialog>
          <Title>Finalizar Chamadas</Title>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout((id) => {
                
                api.put(`/ordem/${values._id}`, values);
                //const value = values.filter((values) => id === values._id)
                console.log(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
            <Form>
            <InputForm>
              <Field
                name="idServico"
                fullWidth
                component={TextField}
                select
                label="Servico"
              >
                {servico.map((e) => (
                  <MenuItem value={e._id} key={e._id}>
                    {e.nmServico}: {e.dsServico}
                  </MenuItem>
                ))}
              </Field>
              {errors.idServico && touched.idServico}
            </InputForm>
            <BoxForm>
              <InputForm>
                <Field
                  name="dtInicio"
                  fullWidth
                  component={TextField}
                  label=" "
                  type="datetime-local"
                ></Field>
                {errors.dtInicio && touched.dtInicio}
                
              </InputForm>
              <InputForm>
                <Field
                  name="dtFinal"
                  fullWidth
                  component={TextField}
                  label=" "
                  type="datetime-local"
                ></Field>
                {errors.dtFinal && touched.dtFinal}
              </InputForm>
            </BoxForm>
            <InputForm>
              <Field
                name="dsServicoRealizado"
                fullWidth
                component={TextField}
                label="Detalhe"
                multiline
                rows={4}
              />
              {errors.dsServicoRealizado && touched.dsServicoRealizado}
            </InputForm>

            <Btn variant="contained" type="submit">
              Enviar
            </Btn>
          </Form>
          )}   
            
          </Formik>
        </BoxDialog>
      </Dialog>
    </>
  );
}

export default ItemOrdem;
