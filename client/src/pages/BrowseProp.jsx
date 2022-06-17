import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./../DataContext";
import {
  Typography,
  Button,
  Box,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../styles";
import ProposalCard from "../components/ProposalCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BrowseProp() {
  const classes = useStyles();

  
  //   GET http://localhost:3001/proposals
  // Content-Type: application/json
  
  // {
  //     "filterInput": {"seeking": ["Front-end developer"]},
  //     "sortInput": "-createdAt"
  // }

  // axios({
  //   method: 'post',
  //   url: '/login',
  //   data: {
  //     firstName: 'Finn',
  //     lastName: 'Williams'
  //   }
  // });
  
  // axios({
  //   method: "get",
  //   url: "/proposals",
  //   data: {filterInput: {}, sortInput: ""},
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  const { proposals, setProposals } = useContext(DataContext);
  useEffect(() => {
    axios
    .get("/proposals")
    .then(res => {
      setProposals(res.data)
      //setProposals(res.data);
      //Now the "proposals" state variables should hold the data (which is an object)
    })
    // .catch((Error) => console.log(Error));
  }, []);
  
  const listOfProposalCards = Object.values(proposals).map(proposal => {
    return (
      <Grid item={proposal} xs={12} sm={6} md={4}>
        <ProposalCard
          key={proposal._id}
          _id={proposal._id}
          author={proposal.author}
          title={proposal.title}
          shortDescription={proposal.shortDescription}
          image={proposal.image}
          seeking={proposal.seeking}
        />
      </Grid>
    );
  });

  return (
    <main>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography
            variant="h2"
            align="center"
            color="secondary"
            gutterBottom
          >
            Browse Proposals
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Please browse our list of active proposals and choose one that best
            suits your needs.
          </Typography>
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="secondary">
                  Search Proposals
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">
                  Or don't
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Box border={2} padding={5} margin={2} borderRadius={16}>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>

            {listOfProposalCards}

          </Grid>
        </Container>
      </Box>
    </main>
  );
}
