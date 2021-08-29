import { styled,makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


export const BoxDialog = styled(Box)({
  padding: 40,
  textAlign: "center",
});

export const Title = styled(Typography)({
  padding: 5,
  fontSize: 25,
  color: "#1FA774",
  fontWeight: "bolder",
  textShadow: "4px 4px 4px rgba(150, 150, 150, 1)",
});

export const alertStyle = makeStyles({
  backdrop: {
    zIndex: 999,
    color: "#fff",
  },
  icon:{
    fontSize: 60,
    color: "#1FA774"
  }
})