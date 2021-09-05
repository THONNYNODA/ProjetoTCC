import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "formik-material-ui";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import * as yup from "yup";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import api from "../../../services/api";

import {
  InputForm,
  BoxForm,
  Title,
  BoxDialog,
  Btn,
  itemOrdemStyle,
} from "./styles";
import Alert from "../../alert";
import { BtnCancalar } from "../finalizarOrdem/styles";

const validationSchema = yup.object().shape({
  dtInicio: yup.string().required("Campo e obrigatorio"),
  dtFinal: yup.string().required("Campo e obrigatorio"),
  dsServicoRealizado: yup.string().required("Campo e obrigatorio"),
  idServico: yup.string().required("Campo e obrigatorio"),
});

function ItemOrdem(props) {
  const classes = itemOrdemStyle();
  const initialValues = {
    dtInicio: "",
    dtFinal: "",
    dsServicoRealizado: "",
    idServico: "",
  };

  const data = {
    idItemOrdem: [],
  };

  const [servico, setServico] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    api.get("/servico").then((res) => {
      const servico = res.data.servico;
      setServico(servico);
    });
  }, []);

  console.log(props.datas.datas._id);

  const handleClouse = () => {
    props.setOpen(false);
  };

  return (
    <>
      <Dialog open={props.open} fullWidth>
        <BoxDialog>
          <Title>Finalizar Chamadas</Title>

          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              data.idItemOrdem.push(values);

              setTimeout(async () => {
                await api
                  .put(`/ordem/itemOrdem/${props.datas.datas._id}`, data)
                  .then((res) => {
                    setSubmitting(false);
                    return setAlert(true);
                  });
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
                        label="Iniciado em"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      ></Field>
                  
                    {errors.dtInicio && touched.dtInicio}
                  </InputForm>
                  <InputForm>
                    <Field
                      name="dtFinal"
                      fullWidth
                      component={TextField}
                      label="Finalizado em"
                        type="datetime-local"
                        InputLabelProps={{
                          shrink: true,
                        }}
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
                {isSubmitting && (
                  <Backdrop className={classes.backdrop} open={true}>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
                <Btn variant="contained" type="submit">
                  Enviar
                </Btn>
                <BtnCancalar onClick={handleClouse}>Cancelar</BtnCancalar>
              </Form>
            )}
          </Formik>
        </BoxDialog>
        {alert === true ? <Alert title="Realizado Sucesso!!" /> : null}
      </Dialog>
    </>
  );
}

export default ItemOrdem;
