import React, {useEffect} from "react";
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


export default function SkillListItem({skillsObject, setSkillsObject}) {

  
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
                        variant="h6"
                        color="secondary"
                      >
                        What are some key skills you want to show off?
                      </Typography>
                    </Grid>

                    <Grid container wrap="nowrap">
                      <FormControl                        
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                      >
                        <Grid container spacing={6}>
                          <Grid item>

                          <FormLabel component="legend" style={{color: "blueviolet"}}>Front-end</FormLabel>
                          <FormGroup style={{marginTop: "10px", marginLeft: "11px"}}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={html}
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
                                  onChange={handleSkill}
                                  name="angularjs"
                                />
                              }
                              label="AngularJS"
                            />
                          </FormGroup>
                        </Grid>
                        
                     
                          <Grid item>
                          <FormLabel component="legend" style={{color: "blueviolet"}}>Back-end</FormLabel>
                          <FormGroup style={{marginTop: "10px", marginLeft: "11px"}}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={nodejs}
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
                                  onChange={handleSkill}
                                  name="express"
                                />
                              }
                              label="Express"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
                                  onChange={handleSkill}
                                  name="mongodb"
                                />
                              }
                              label="MongoDB"
                            />
                          </FormGroup>
                        </Grid>
                        
                     
                          <Grid item>

                          
                          <FormLabel component="legend" style={{color: "blueviolet"}}>UX/UI</FormLabel>
                          <FormGroup style={{marginTop: "10px", marginLeft: "11px"}}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={photoshop}
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
                                  onChange={handleSkill}
                                  name="figma"
                                />
                              }
                              label="Figma"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                          <FormLabel component="legend" style={{color: "blueviolet"}}>Other</FormLabel>
                          <FormGroup style={{marginTop: "10px", marginLeft: "11px"}}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
                                  style={{color: "blueviolet", marginRight: "5px"}}
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
