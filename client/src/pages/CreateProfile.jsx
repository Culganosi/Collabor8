import * as React from "react";
import Paper from "@material-ui/core/Paper";
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
import { ToggleButton, ToggleButtonGroup } from "@mui/material";


export default function OthersProp() {
  const classes = useStyles();

  const [role, setRole] = React.useState("Front-End Dev");
  const [skill, setSkill] = React.useState("Front-End Dev");

  const handleChangeRole = (event, newRole) => {
    setRole(newRole);
  };
  const handleChangeSkill = (event, newSkill) => {
    setSkill(newSkill);
  };

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

      <Box p={5}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper className={classes.createprofile} elevation={8}>
              <CardContent className={classes.cardContent}>
                <Box
                  component="img"
                  style={{
                    height: 300,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <Grid item style={{ marginBottom: 25}}>

                <Button variant="outlined" color="secondary">
                  Upload Profile Picture
                </Button>
                </Grid>
                <Typography component="h5" variant="h5" color="secondary">
                  Choose your Role
                </Typography>
                <ToggleButtonGroup
                  color="secondary"
                  value={role}
                  exclusive
                  onChange={handleChangeRole}
                >
                  <ToggleButton value="front">Front-End</ToggleButton>
                  <ToggleButton value="back">Back-End</ToggleButton>
                  <ToggleButton value="any">Any</ToggleButton>
                </ToggleButtonGroup>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Relevant Skills
                </Typography>
                <ToggleButtonGroup
                  color="secondary"
                  value={skill}
                  exclusive
                  onChange={handleChangeSkill}
                >
                  <ToggleButton value="front">Front-Flips</ToggleButton>
                  <ToggleButton value="back">Back-Flips</ToggleButton>
                  <ToggleButton value="any">Cartwheels</ToggleButton>
                  <ToggleButton value="any1">
                    Farting with your Elbow
                  </ToggleButton>
                  <ToggleButton value="any2">Talks to Animals</ToggleButton>
                  <ToggleButton value="any3">Making Buttons</ToggleButton>
                </ToggleButtonGroup>
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
                    <Button variant="contained" color="secondary">
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
