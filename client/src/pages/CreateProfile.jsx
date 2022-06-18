import * as React from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import useStyles from "../styles";
import { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function CreateProfile() {
  const [state, setState] = React.useState({
    default: false,
  });

  const handleRole = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { uxui, full, front, back } = state;
  const error = [uxui, full, front, back].filter((v) => v).length !== 1;

  const handleSkill = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
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
  } = state;
  const errorSkill =
    [
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
    ].filter((v) => v).length !== 1;

  //   #This is both for filling out the profile and for editing it later
  // PATCH http://localhost:3001/users/self
  // Content-Type: application/json
  // {
  //     "bio": "Ths is an updated bio to test 2"
  // }

  const createProfile = () => {
    const userData = {
      role,
      skills,
      shortBio,
      bio,
      socialMedia,
    };

    axios.patch("users/self", userData).then((res) => {
      console.log(res.data);
    });
  };

  const classes = useStyles();
  // const { self, setSelf } = useContext(DataContext);
  const [role, setRole] = React.useState("Front-End Developer");
  const [skills, setSkills] = React.useState(["Git", "JavaScript"]);
  const [bio, setBio] = React.useState("This is a test long bio");
  const [shortBio, setShortBio] = React.useState("This is a test short bio");
  const [socialMedia, setSocialMedia] = React.useState({
    Portfolio: "htto://google.com",
    GitHub: "http://GitHub.com",
  });

  return (
    <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Create your profile
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Set up your profile in order to best match you with other Collab||8rs!
        </Typography>
      </Container>

      <Box border={2} padding={5} margin={6} borderRadius={16}>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={5}>
            <Paper className={classes.card} elevation={4} style={{width: '600px'}}>
              <CardContent className={classes.cardContent}>
                <Box
                  component="img"
                  style={{
                    height: "auto",
                    width: "100%",
                  }}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <Box>
                  <Grid container justify="center" alignItems="stretch">
                    <Grid item style={{ marginBottom: 25 }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        component="label"
                      >
                        Upload Profile Picture
                        <input type="file" hidden />
                      </Button>
                    </Grid>

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
                  </Grid>

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
                        error={error}
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
                                  checked={html}
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
                                  checked={uxui}
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
                  
                </Box>

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Short Bio
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Enter a short description"
                    multiline
                    rows={1}
                    defaultValue="Lorem ipsum dolor proident"
                    value={shortBio}
                    onChange={setShortBio}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Enter your Github URL
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Github URL"
                    variant="outlined"
                    color="secondary"
                    onChange={setSocialMedia}
                  />
                </Box>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Enter your LinkedIn
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="LinkedIn URL"
                    variant="outlined"
                    color="secondary"
                    onChange={setSocialMedia}
                  />
                </Box>

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Bio
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Enter a short description"
                    multiline
                    rows={6}
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
              </CardContent>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => createProfile()}
                    >
                      Create Profile
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
