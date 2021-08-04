import { makeStyles} from '@material-ui/core/styles';


export const bottomSyles = makeStyles(theme =>({
    fab: {
        margin: theme.spacing(2),
      },
      absolute: {
        display: 'inline-block',
        position: "relative",
        right: 10,
        bottom: 10,
        color: "#f0f5f3",
        background: "#1FA774",
        "&:hover": {
          background: "rgba(31, 167, 116,0.8)",
        },
      },    
  }));