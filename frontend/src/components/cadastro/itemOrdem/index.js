import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@material-ui/core/Dialog";
import { TextField} from "formik-material-ui";
import { MenuItem, RadioGroup, Typography } from "@material-ui/core";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import api from "../../../services/api";

import { InputForm, BoxForm, Title, BoxDialog, Btn, itemOrdemStyle } from "./styles";

function ItemOrdem(props) {
  const classes = itemOrdemStyle()
  const initialValues = {
    dtInicio: "",
    dtFinal: "",
    dsServicoRealizado: "",
    idServico: "",
  };

  const data = {
    dsStatus: "FINALIZADO",
    idItemOrdem: [],
  };

  const [servico, setServico] = useState([]);

  useEffect(() => {
    api.get("/servico").then((res) => {
      const servico = res.data.servico;
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
              data.idItemOrdem.push(values);
              setTimeout(async () => {
                await api.put(`/ordem/${props.datas._id}`, data);
                setSubmitting(false);
                return alert("cadastrado");
              }, 3000);
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
                <RadioGroup>
                  <Field />
                </RadioGroup>
                {isSubmitting && (
                  <Backdrop className={classes.backdrop} open={true}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
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
