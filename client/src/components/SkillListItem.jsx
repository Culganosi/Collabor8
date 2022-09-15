import React, { useEffect } from "react";
import useStyles from "../styles";
import { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
///

export default function SkillListItem({
  skillsObject,
  setSkillsObject,
  skillsOptions,
}) {
  console.log(skillsOptions);
  const classes = useStyles();

  const handleSkill = (event) => {
    console.log(skillsObject);
    setSkillsObject((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.checked,
      };
    });
  };

  // const {
  //   html,
  //   css,
  //   sass,
  //   jquery,
  //   reactjs,
  //   vuejs,
  //   angularjs,
  //   nodejs,
  //   express,
  //   sql,
  //   mongodb,
  //   photoshop,
  //   figma,
  //   uxresearch,
  //   git,
  //   tdd,
  //   vscode,
  // } = skillsObject;

  return (
    <Grid container>
      <Grid item style={{ marginBottom: 15 }}>
        <Typography className={classes.title} variant="h5" color="secondary">
          What are some key skills you want to show off?
        </Typography>
      </Grid>

      <Grid container wrap="nowrap">
        <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
          <Grid container spacing={6}>
            {Object.keys(skillsOptions).map((skillsCategory) => (
              <Grid item>
                <FormLabel component="legend" style={{ color: "#363667" }}>
                  {skillsCategory}
                </FormLabel>
                <FormGroup style={{ marginTop: "10px", marginLeft: "0px" }}>
                  {skillsOptions[skillsCategory].map((skill) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={skillsObject[skill]}
                          style={{ color: "#363667", marginRight: "5px" }}
                          onChange={handleSkill}
                          name={skill}
                        />
                      }
                      label={skill}
                    />
                  ))}
                </FormGroup>
              </Grid>
            ))}
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
}
