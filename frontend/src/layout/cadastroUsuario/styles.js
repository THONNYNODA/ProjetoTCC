import { makeStyles } from "@material-ui/core/styles";

export const configStyle = makeStyles({
    box:{
        marginTop: '90px',
        margin: 10,
        "@media (max-width: 960px)":{
            width: "100%",
            marginTop: '10px',
        }
    },
    boxContainer:{
        //border:'2px solid blue',
        height: '100%',
        
    }
})