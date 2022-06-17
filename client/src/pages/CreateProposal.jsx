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

export default function CreateProposal() {
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
    <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Create a proposal
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Fill out the following details to upload your proposal for other interested collaborators
        </Typography>
      </Container>

      <Box p={5}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper className={classes.createprofile} elevation={8}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  color="secondary"
                >
                  Title of Proposal
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Provide a title for your proposal"
                    multiline
                    rows={1}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>

                <Typography
                  className={classes.title}
                  variant="h5"
                  color="secondary"
                >
                  Descriptive line for project
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Provide a one-line description of your proposal"
                    multiline
                    rows={1}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>

                <Typography component="h5" variant="h5" color="secondary">
                  Who are you looking for ?
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
                  Select a category
                </Typography>
                <ToggleButtonGroup
                  color="secondary"
                  value={category}
                  exclusive
                  onChange={handleChangeCategory}
                >
                  <ToggleButton value="front">Portfolio</ToggleButton>
                  <ToggleButton value="back">Practice</ToggleButton>
                  <ToggleButton value="any">Educational</ToggleButton>
                  <ToggleButton value="any1">Leisure</ToggleButton>
                </ToggleButtonGroup>


                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Description of Proposal
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Provide a brief description of your proposal"
                    multiline
                    rows={6}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
              </CardContent>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Create Proposal
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
