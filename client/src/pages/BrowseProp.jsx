import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./../DataContext";
import { Typography, Button, Box, Grid, Container } from "@material-ui/core";
import useStyles from "../styles";
import ProposalCard from "../components/ProposalCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BrowseProp() {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const classes = useStyles();

  const { proposals, setProposals } = useContext(DataContext);
  useEffect(() => {
    axios.get("/proposals").then((res) => {
      setProposals(res.data);
    });
  }, []);

  const listOfProposalCards = Object.values(proposals).map((proposal) => {
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
            Browse proposals
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Check out the creative ideas of other Collab||8ors
          </Typography>
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
