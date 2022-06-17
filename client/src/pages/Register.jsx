import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles";
import Paper from "@material-ui/core/Paper";
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

export default function Register() {
  const classes = useStyles();

  const [role, setRole] = React.useState("Front-End Dev");
  const [category, setCategory] = React.useState("Front-End Dev");

  const handleChangeRole = (event, newRole) => {
    setRole(newRole);
  };
  const handleChangeCategory = (event, newCategory) => {
    setCategory(newCategory);
  };

    return (
      <>
      <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Register
        </Typography>

      </Container>
    </div>
    <Box p={5}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper className={classes.createprofile} elevation={8}>
              <CardContent className={classes.cardContent}>

                <Typography component="h5" variant="h5" color="secondary">
                  Choose your role
                </Typography>
                <ToggleButtonGroup
                  color="secondary"
                  value={role}
                  exclusive
                  onChange={handleChangeRole}
                >
                  <ToggleButton value="front">Front-End</ToggleButton>
                  <ToggleButton value="back">Back-End</ToggleButton>
                  <ToggleButton value="any">Full-stack</ToggleButton>
                  <ToggleButton value="design">UI/UX designer</ToggleButton>
                </ToggleButtonGroup>
                <br />
                <br />

                <Typography
                 component="h5" 
                 variant="h5" 
                 color="secondary"
                >
                  Choose your skills
                </Typography>
                <ToggleButtonGroup
                  color="secondary"
                  value={category}
                  exclusive
                  onChange={handleChangeCategory}
                >
                  <ToggleButton value="prof">Portfolio</ToggleButton>
                  <ToggleButton value="prac">Practice</ToggleButton>
                  <ToggleButton value="edu">Educational</ToggleButton>
                  <ToggleButton value="fun">Leisure</ToggleButton>
                </ToggleButtonGroup>
                <br />
                <br />

                <Typography
                 component="h5" 
                 variant="h5" 
                 color="secondary"
                >
                  Link your Github
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Github URL"
                    multiline
                    rows={1}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
                <br />
                <br />
                <Typography
                 component="h5" 
                 variant="h5" 
                 color="secondary"
                >
                  Link your LinkedIn
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="LinkedIn URL"
                    multiline
                    rows={1}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
                <br />
                <br />

                <Typography
                  component="h5" 
                  variant="h5" 
                  color="secondary"
                >
                  Short Bio
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Please include a short bio about yourself"
                    multiline
                    rows={4}
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

      </>
    );
}
