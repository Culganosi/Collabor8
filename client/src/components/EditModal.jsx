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
  Switch,
  FormGroup,
  FormControlLabel,
  TextField,
  MenuItem,
} from "@material-ui/core";

const categories = [
  {
    value: "Passion Project",
    label: "Passion Project"
  },
  {
    value: "Small Scale",
    label: "Small Scale",
  },
  {
    value: "Large Scale",
    label: "Large Scale",
  },
];

const roles = [
  {
    value: "Front-End",
    label: "Front-End"
  },
  {
    value: "Back-End",
    label: "Back-End",
  },
  {
    value: "Jack-of-All-Trades",
    label: "Jack-of-All-Trades",
  },
];

export default function OthersProp() {
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [category, setCategories] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const classes = useStyles();

  return (

    <div className={classes.container}>
    <Container max-Width="sm">
      <Typography
        variant="h2"
        align="center"
        color="secondary"
        gutterBottom
      >
        Edit Proposal
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
      >
Make changes below to update the details of your proposal
      </Typography>
    </Container>


    <Box p={5}>
      <Grid container justify="center">
        <Grid item xs={8}>
          <Paper className={classes.ownprofile} elevation={8}>
            <CardContent className={classes.cardContent}>
              <Typography component="h5" variant="h5" color="secondary">
                Title of the Proposal
              </Typography>
              <TextField
                id="filled-basic"
                label="Edit"
                variant="filled"
                color="secondary"
              />
              <Typography
                className={classes.title}
                variant="h6"
                color="secondary"
              >
                Type of Proposal
              </Typography>
              <TextField
                id="filled-select-category"
                select
                label="Category"
                value={value}
                onChange={handleChange}
                helperText="Please select your category"
                variant="filled"
                color="secondary"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Typography
                className={classes.title}
                variant="h6"
                color="secondary"
              >
                Looking for:
              </Typography>
              <TextField
                id="filled-select-category"
                select
                label="Role"
                value={value}
                onChange={handleChange}
                helperText="Please select your category"
                variant="filled"
                color="secondary"
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Typography
                className={classes.title}
                variant="h6"
                color="secondary"
              >
                Description
              </Typography>
              <div>
                <TextField
                  id="filled-multiline-static"
                  label="Multiline"
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  label={`Proposal is ${checked ? "Active" : "Inactive"}`}
                />
              </FormGroup>
            </CardContent>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Save Changes
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
