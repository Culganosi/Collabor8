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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";


export default function CreateProposal() {

  const navigate = useNavigate();


  const createProposal = () => {
    const proposalData = {title, status: "Active", description, shortDescription, seeking}
    axios.post("/proposals", proposalData)
      .then((res) => {
        console.log(res.data)
        navigate("/My-Profile")
    })
    
  }

  const classes = useStyles();

  const [title, setTitle] = React.useState("")
  const [seeking, setSeeking] = React.useState([]);
  const [description, setDescription] = React.useState("")
  const [shortDescription, setShortDescription] = React.useState("")



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
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
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
                    value={shortDescription}
                    onChange={(event) => setShortDescription(event.target.value)}
                  />
                </div>

                <Typography component="h5" variant="h5" color="secondary">
                  Who are you looking for (Role) ?
                </Typography>
                <ToggleButtonGroup
                  color="secondary"
                  value={seeking}
                  exclusive
                  onChange={(event) => setSeeking([event.target.value])}
                >
                  <ToggleButton value="front">UX/UI designer</ToggleButton>
                  <ToggleButton value="front2">Front-end developer</ToggleButton>
                  <ToggleButton value="front3">Back-end developer</ToggleButton>
                  <ToggleButton value="front4">Full-stack developer</ToggleButton>
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
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} 
                    style={{ width: "75%" }}
                  />
                </div>
              </CardContent>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="secondary" onClick={() => createProposal()}>
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
