import React, {useContext, useState, useEffect} from "react";
import {DataContext} from "./../DataContext";
import axios from 'axios';


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
  Avatar,
} from "@material-ui/core";
import useStyles from "../styles";
import { red } from '@mui/material/colors';
import UserCard from "../components/UserCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BrowseProp() {

  const {profiles, setProfiles} = useContext(DataContext);


  useEffect(() => {
    axios.get("/users")
    .then(res => {
      setProfiles(res.data)
      //Now the "profiles" state variables should hold the data (which is an object)
    })

  }, [])


  const listOfUserCards = Object.values(profiles).map(profile => {
    return (
      <Grid item={profile} xs={12} sm={6} md={4}>
        <UserCard 
          key={profile._id}
          _id={profile._id}
          avatar={profile.avatar}
          shortBio={profile.shortBio}
          skills={profile.skills}
          userhandle={profile.userhandle}
          role={profile.role}     
        />
      </Grid>
    )

  })


  const classes = useStyles();

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
            Browse Users
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Looking for somebody to work with on your project? You're in the
            right place. Click on a profile below to see a more detailed view.
          </Typography>
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="secondary">
                  Search Users
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

            {listOfUserCards}


            {/* {cards.map((card) => (
              <Grid item={card} xs={12} sm={6} md={4}>
                <UserCard />

              </Grid>
            ))} */}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
