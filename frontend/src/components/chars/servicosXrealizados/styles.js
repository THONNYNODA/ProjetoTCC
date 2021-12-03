import { Box } from "@material-ui/core";
import { makeStyles,styled } from "@material-ui/core/styles";

export const ColorChar = styled(Box)({
  width: 15,
  height: 15,
  borderRadius: 10,
  background: (props) => props.color ,
});



export const charStyles = makeStyles({
  boxContentTitle: {
    display: "flex",
    justifyContent: "space-around",
  },
  boxPendente: {
    width: 15,
    height: 15,
    borderRadius: 10,
    background: "#FD4659",
  },
  boxFinalizado: {
    width: 15,
    height: 15,
    borderRadius: 10,
    background: "#1FA774",
  },
  boxText: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerRadial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 480,
  },
});
