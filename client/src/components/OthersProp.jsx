import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { CardContent } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing * 2,
    textAlign: "center",
    color: "green"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Left Side @User, Description, Message, Avatar</Paper>
          <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Proposal #1
                    </Typography>
                    <Typography>
                      Check out the description of this proposal
                    </Typography>
                    <Typography>
                      We got all kinds of shyt
                      I want to
                      Make this thing
                      longer than it already
                      is so let
                      this got
                      We got all kinds of shyt
                      I want to
                      Make this thing
                      longer than it already
                      is so let
                      this got

                    </Typography>
                  </CardContent>
                  </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Right Side Title, subtitle, looking for, short text bio?</Paper>
        </Grid>
      </Grid>
    </div>
  );
}