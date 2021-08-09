import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Divider, TextField } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import { BoxForm, Btn, funcaoStyle, InputForm } from "./styles";

function Funcao() {
  const classes = funcaoStyle();
  const [values, setValues] = useState([]);
  const [value, setValue] = useState()

  useEffect(() => {
    api.get("/funcao").then((res) => {
      const values = res.data.funcao;
      console.log(values);
      setValues(values);
    });
  }, []);

  const handleDelete = (id, e) => {
    api.delete(`/funcao/${id}`).then((res) => {
      const value = values.filter((values) => id !== values._id);
      setValues(value);
    });
  };
  const handleAdd = (value) => {
    api.post(`/funcao`).then((res) => {
      
      setValue(value);
    });
  };

  const row = values
    .sort((a, b) => (a.nmFuncao > b.nmFuncao ? 1 : -1))
    .map((e) => ({ id: e._id, funcao: e.nmFuncao }));

  return (
    <>
      <TableContainer className={classes.root} component={Paper}>
        <Table
          //size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={classes.boxHeader}>
              <TableCell className={classes.headerTitle}>Funcao</TableCell>
              <TableCell align="center" className={classes.headerTitle}>
                Acao
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.nmFuncao}
                </TableCell>
                <TableCell align="right">
                  <Button
                    className={classes.iconEditar}
                    onClick={(e) => handleDelete(row._id)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                  
                    className={classes.iconDelete}
                    onClick={(e) => handleDelete(row._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <form>
        </form>         
      <InputForm onSubmit={handleAdd(value)}>
        <BoxForm>
          <TextField fullWidth values={value} onChange={e => setValue(e.target.value)} variant="outlined"/>
          <Btn type='submit'>
            <AddIcon />
          </Btn>
        </BoxForm>
      </InputForm>
    </>
  );
}

export default Funcao;
