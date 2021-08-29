import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "formik-material-ui";
import { MenuItem, Typography } from "@material-ui/core";
import * as yup from "yup";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import api from "../../../services/api";

import { InputForm, BoxForm, Title, BoxDialog, Btn } from "../itemOrdem/styles";

const validationSchema = yup.object().shape({
  dsProblema: yup.string().required("Campo e obrigatorio"),
  dsDetalhe: yup.string().required("Campo e obrigatorio"),
  idSetor: yup.string().required("Campo e obrigatorio"),
});

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Ordem(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const initialValues = {
    dsProblema: "",
    dsDetalhe: "",
    idSetor: "",
    
  };
 
  const [setores, setSetor] = useState([]);

  
  useEffect(() => {
    api.get("/setor").then((res) => {
      const setores = res.data.setor;
      setSetor(setores);
    });
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <BoxDialog>
        <Title>Novo Chamado</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm}) => {
            setTimeout(() => {
             api.post("/ordem", values);
              console.log(values)
              setSubmitting(false);
              resetForm({});
              onClose(true)
              
            }, 3000);
            //window.location.reload();
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <BoxForm>
                <InputForm>
                  <Field
                    name="dsProblema"
                    fullWidth
                    component={TextField}
                    label="Assunto"
                  />
                  {errors.dsProblema && touched.dsProblema}
                </InputForm>
                <InputForm>
                  <Field
                    name="idSetor"
                    fullWidth
                    component={TextField}
                    label="Setor"
                    select
                  >
                    {setores
                      .sort((a, b) => (a.nmSetor > b.nmSetor ? 1 : -1))
                      .map((e) => (
                        <MenuItem value={e._id} key={e._id}>
                          {e.nmSetor}
                        </MenuItem>
                      ))}
                  </Field>
                  {errors.idSetor && touched.idSetor}
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
                {errors.dsDetalhe && touched.dsDetalhe}
              </InputForm>
              {isSubmitting && (
                <Backdrop className={classes.backdrop} open={true}>
                  <CircularProgress color="inherit" />
                </Backdrop>
              )}

              <Btn variant="contained"  disabled={isSubmitting} type="submit">
                Enviar
              </Btn>
            </Form>
          )}
          
        </Formik>
      </BoxDialog>
    </Dialog>
  );
}

export default Ordem;