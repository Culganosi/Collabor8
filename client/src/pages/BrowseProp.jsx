import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./../DataContext";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../styles";
import ProposalCard from "../components/ProposalCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BrowseProp() {
  const classes = useStyles();

  const { proposals, setProposal } = useContext(DataContext);
  
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
  useEffect(() => {
    axios.get("/proposals", {"Content-Type": "application/json"})
    .then((res) => {
      console.log(res.data)
      //setProposals(res.data);
      //Now the "proposals" state variables should hold the data (which is an object)
    })
    .catch(Error => console.log(Error))
  }, []);

  // const listOfProposalCards = Object.values(proposals).map((proposal) => {
  //   return (
  //     <Grid item={proposals} xs={12} sm={6} md={4}>
  //       <ProposalCard
  //         key={proposals._id}
  //         _id={proposals._id}
  //         avatar={proposals.avatar} 
  //         shortBio={proposals.shortBio}
  //         skills={proposals.skills}
  //         userhandle={proposals.userhandle}
  //         role={proposals.role}
  //       />
  //     </Grid>
  //   );
  // });

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
    </main>
  );
}

