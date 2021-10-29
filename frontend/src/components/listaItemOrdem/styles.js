import { makeStyles, styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

export const Conteiner = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  flex: 1,
  "@media (max-width:780px)": {
    display: "block",
    maxHeight: "none",
  },
});
export const BoxText = styled(Box)({
  width: "100%",
  padding: 20,
  paddingLeft: 10,
  backgroundColor: "#f0f5f3",
});
export const Title = styled(Typography)({
  position: "relative",
  whiteSpace: "normal",
  textOverflow: "ellipsis",
  fontWeight: "bold",
  padding: "15px 0px 10px 20px",
  color: " #1FA774",
});
export const Text = styled(Typography)({
  position: "relative",
  whiteSpace: "normal",
  textOverflow: "ellipsis",
  fontWeight: "lighter",
  //color: " #1FA774",
});

export const listaitemOrdemStyle = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    maxWidth: 500,
    maxHeight: 600,
    backgroundColor: "#1FA774",
    flexDirection: "column",
    overflow: "auto",
    justifyContent: "space-between",
    "@media (max-width:780px)": {
      display: "block",
      //maxHeight: 'none',
    },
  },
  boxHeader: {
    background: "#ffffff",
    marginBottom: 5,
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxContent: {
    width: "100%",
  },
  boxCard: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    marginTop: 5,
    backgroundColor: "#1FA774",

    "@media (max-width:780px)": {
      maxWidth: "100%",
      display: "block",
    },
  },
});
