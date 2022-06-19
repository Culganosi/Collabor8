import * as React from "react";
import useStyles from "../styles";
import { useState } from "react";
import {
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function RolesListItem() {
  const [state, setState] = React.useState({
    default: false,
  });
  const classes = useStyles();

  const handleRole = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { uxui, full, front, back } = state;
  const error = [uxui, full, front, back].filter((v) => v).length !== 1;

  return (
  <Grid container>
    <Grid item xs={6} style={{ marginBottom: 15 }}>
      <Typography
        className={classes.title}
        variant="h5"
        color="secondary"
      >
        Select Areas of Expertise
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">
          Select one or more{" "}
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={uxui}
                onChange={handleRole}
                name="uxui"
              />
            }
            label="UX/UI Designer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={full}
                onChange={handleRole}
                name="full"
              />
            }
            label="Full-Stack Developer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={front}
                onChange={handleRole}
                name="front"
              />
            }
            label="Front-End Developer"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={back}
                onChange={handleRole}
                name="front"
              />
            }
            label="Back-End Developer"
          />
        </FormGroup>
      </FormControl>
    </Grid>
  </Grid>
          )}