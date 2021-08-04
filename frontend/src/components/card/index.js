import React from "react";


import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import { cardStyles } from "./styles";
import { Typography } from "@material-ui/core";

function Cards(props) {
  const classes = cardStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          className={classes.boxHeader}
          title={
            <Typography className={classes.boxHeaderTitle} variant="subtitle1">
              {props.title}
            </Typography>
          }
        />
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </>
  );
}

export default Cards;
