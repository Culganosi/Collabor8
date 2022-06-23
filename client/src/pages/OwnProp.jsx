import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import axios from "axios";
import EditModal from "./EditModal"
import {
  Typography,
  Button,
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";

export default function OwnProp() {

  //Scroll to top when entering page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const classes = useStyles();

  const [proposal, setProposal] = useState({})

  const params = useParams();
  const proposalId = params.id

  useEffect(() => {
    axios.get(`/proposals/${proposalId}`)
      .then((res) => {
        setProposal(res.data)
      })
  }, [])


  return (
    <div className={classes.container}>


    <Box p={5}>

      <Grid container justify="center">
        <Grid item xs={8}>
          <Paper className={classes.ownprofile} elevation={8} style={{padding: "80px"}}>
            <CardContent className={classes.cardContent}>
              <Typography component="h4" variant="h4" color="secondary">
                {proposal.title}
              </Typography>

              <Typography className={classes.bio} style={{marginTop: -15}} color="primary" variant="h6">
                <i>{proposal.shortDescription}</i>
              </Typography>

              <CardMedia className={classes.cardMedia} image={proposal.image} title="Title" 
              style={{borderRadius: "10px", width: "500px", height: "281px", objectFit: "cover", padding: 0, margin: 0}}/>


              <Typography className={classes.title} variant="h6" color="textSecondary">
                Looking for: {proposal.seeking && proposal.seeking.join(", ")}
              </Typography>

              <Typography className={classes.bio} variant="h7" color="textSecondary">
                Status: {proposal.status}
              </Typography>
              
              <Typography className={classes.bio}>
                {proposal.description}
              </Typography>

              <Link to="edit" element={<EditModal />} >
              <Button variant="outlined" color="secondary">
                Edit Proposal
              </Button>
              </Link>

          </CardContent>
        </Paper>
      </Grid>
    </Grid>
    
    </Box >
    </div>
  );
}


