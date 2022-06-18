import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import axios from "axios";
import EditModal from "./EditProp"
import {
  Typography,
  Button,
  Box,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";

export default function OthersProp() {
  const classes = useStyles();

  const [proposal, setProposal] = useState({})

  const params = useParams();
  const proposalId = params.id

  useEffect(() => {
    axios.get(`/proposals/${proposalId}`)
      .then((res) => {
        setProposal(res.data)
      })
  })


  return (
    <Box p={5}>

      <Grid container justify="center">
        <Grid item xs={8}>
          <Paper className={classes.ownprofile} elevation={8}>
            <CardContent className={classes.cardContent}>
              <CardMedia className={classes.cardMedia} image={proposal.image} title="Title" />
              <Typography component="h5" variant="h5" color="secondary">
                {proposal.title}
              </Typography>

              <Typography className={classes.title} variant="h6" color="textSecondary">
                Looking for: {proposal.seeking && proposal.seeking.join(", ")}
              </Typography>
              <Typography className={classes.bio}>
                {proposal.description}
              </Typography>

              <Link to="edit" element={<EditModal />} >
              <Button variant="contained" color="secondary">
                Edit Proposal
              </Button>
              </Link>

          </CardContent>
        </Paper>
      </Grid>
    </Grid>
    
    </Box >
  );
}


