import React, {useEffect, useState} from "react";
import useStyles from "../styles";
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

export default function SkillListEdit({skillsObject, setSkillsObject, oldProfile}) {

    const [oldSkills, setOldSkills] = useState([])

    useEffect(() => {
        if(Object.keys(oldProfile) > 0) {
            setOldSkills(oldProfile.skills)
        }
    }, [oldProfile])
  
  const classes = useStyles();
  // const { uxui, full, front, back } = state;
 // const error = [uxui, full, front, back].filter((v) => v).length !== 1;

  const handleSkill = (event) => {
    setSkillsObject(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.checked,
      }
    })
  };

  const {
    html,
    css,
    sass,
    jquery,
    reactjs,
    vuejs,
    angularjs,
    nodejs,
    express,
    sql,
    mongodb,
    photoshop,
    figma,
    uxresearch,
    git,
    tdd,
    vscode,
  } = skillsObject;
  
  

  return (
    <Grid container>
                    <Grid item style={{ marginBottom: 15 }}>
                      <Typography
                        className={classes.title}
                        variant="h5"
                        color="secondary"
                      >
                        Select Skills
                      </Typography>
                    </Grid>

                    <Grid container wrap="nowrap">
                      <FormControl
                        required
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                      >
                        <Grid container spacing={2}>
                          <Grid item>


                          <FormLabel component="legend">Front-End</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={oldSkills.length>0 && oldSkills.includes("CSS")}
                                  onChange={handleSkill}
                                  name="html"
                                />
                              }
                              label="HTML"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={css}
                                  onChange={handleSkill}
                                  name="css"
                                />
                              }
                              label="CSS"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={sass}
                                  onChange={handleSkill}
                                  name="sass"
                                />
                              }
                              label="Sass"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={jquery}
                                  onChange={handleSkill}
                                  name="jquery"
                                />
                              }
                              label="jQuery"
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={reactjs}
                                  onChange={handleSkill}
                                  name="reactjs"
                                />
                              }
                              label="ReactJS"
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={angularjs}
                                  onChange={handleSkill}
                                  name="angularjs"
                                />
                              }
                              label="AngularJS"
                            />
                          </FormGroup>
                        </Grid>
                        
                     
                          <Grid item>
                          <FormLabel component="legend">Back-End</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={nodejs}
                                  onChange={handleSkill}
                                  name="nodejs"
                                />
                              }
                              label="NodeJS"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={express}
                                  onChange={handleSkill}
                                  name="express"
                                />
                              }
                              label="Express"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={sql}
                                  onChange={handleSkill}
                                  name="sql"
                                />
                              }
                              label="SQL"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={mongodb}
                                  onChange={handleSkill}
                                  name="mongodb"
                                />
                              }
                              label="MongoDB"
                            />
                          </FormGroup>
                        </Grid>
                        
                     
                          <Grid item>

                          
                          <FormLabel component="legend">UX/UI</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={photoshop}
                                  onChange={handleSkill}
                                  name="photoshop"
                                />
                              }
                              label="Photoshop"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={figma}
                                  onChange={handleSkill}
                                  name="figma"
                                />
                              }
                              label="Figma"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={uxresearch}
                                  onChange={handleSkill}
                                  name="exresearch"
                                />
                              }
                              label="UX Research"
                            />
                          </FormGroup>
                        </Grid>
                       
                        
                          <Grid item>
                          <FormLabel component="legend">Other</FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={git}
                                  onChange={handleSkill}
                                  name="git"
                                />
                              }
                              label="Git"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={tdd}
                                  onChange={handleSkill}
                                  name="tdd"
                                />
                              }
                              label="TDD"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={vscode}
                                  onChange={handleSkill}
                                  name="vscode"
                                />
                              }
                              label="VS Code"
                            />
                          </FormGroup>
                        </Grid>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>
  )
}
