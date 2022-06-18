import * as React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import { useState } from 'react'
import {
  Typography,
  Button,
  Box,
  CardContent,
  Grid,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { sizing } from "@material-ui/system";

export default function OthersProp() { // ??
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const classes = useStyles();

  return (
    <Box p={5}>
      <Grid container justify="center">
        <Grid item xs={8}>
          <Paper className={classes.ownprofile} elevation={8}>
            <CardContent className={classes.cardContent}>
              <Typography component="h5" variant="h5" color="secondary">
                Title of the Proposal
              </Typography>
              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
              >
                Just for Fun
              </Typography>

              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
              >
                Looking for: UX/UI Designer
              </Typography>
              <Typography className={classes.bio}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={checked} onChange={toggleChecked} />}
                  label={`Proposal is ${checked ? "Active" : "Inactive"}`}
                />
              </FormGroup>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
