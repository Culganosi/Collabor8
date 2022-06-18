import * as React from "react";
import { useEffect, useContext, useState} from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import axios from "axios";
import { DataContext } from "./../DataContext";

import {useParams, useNavigate} from 'react-router-dom';


import {
  Typography,
  Button,
  Box,
  CardContent,
  Grid,
} from "@material-ui/core";

export default function OthersProp() {

  const classes = useStyles();



  const [proposal, setProposal] = useState({})
  const [author, setAuthor] = useState({});

  const params = useParams();
  const proposalId = params.id

  
  useEffect(() => {

    async function getInfo () {
      
      const proposalResponse = await axios.get(`/proposals/${proposalId}`)
      setProposal(proposalResponse.data)

      const authorId = proposalResponse.data.author

      const authorResponse = await axios.get(`/users/${authorId}`) 
      setAuthor(authorResponse.data)
    }

    getInfo()

  }, []);



return (
  <Box p={5}>
    <div className={classes.card}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: 'flex', justifyContent: "center" }}>
          <Paper className={classes.content} elevation={8} style={{ display: 'flex', justifyContent: "center" }}>
            <CardContent>
              <img src={author.avatar}
                className={classes.userprofileavatar}
                alt="user profile"
              />

              <Typography className={classes.title} component="h5" variant="h5" color="secondary" style={{ display: 'flex', justifyContent: "center" }}>
                {author.userhandle}
              </Typography>
              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                style={{ display: 'flex', justifyContent: "center" }}>
                {author.role}
              </Typography>
              <Typography className={classes.bio}></Typography>
              <Box textAlign="center">

                <Button variant="contained" color="secondary">
                  Message User
                </Button>
              </Box>
            </CardContent>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Paper className={classes.content} elevation={8}>
            <CardContent className={classes.cardContent}>
              <Typography component="h5" variant="h5" color="secondary">
                {proposal.title}
              </Typography>

              <img src={proposal.image}
                className={classes.proposalImg}
                alt="proposal img"
              />
              
              <Typography className={classes.title} variant="h6" color="textSecondary">
                Looking for: {proposal.seeking && proposal.seeking.join(", ")}
              </Typography>
              <Typography className={classes.bio}>
                {proposal.description}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </Box>
);
}


