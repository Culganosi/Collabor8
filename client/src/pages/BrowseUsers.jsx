import React, {useContext, useState, useEffect} from "react";
import {DataContext} from "./../DataContext";
import axios from 'axios';
import {
  Typography,
  Button,
  Box,
  Grid,
  Container,
} from "@material-ui/core";
import styled from "styled-components";

import useStyles from "../styles";
import UserCard from "../components/UserCard";

export default function BrowseUsers() {
  const classes = useStyles();
  
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
      <Grid item={profile} style={{maxWidth: '400px', minHeight: '400px'}}>
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
            Browse users
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Looking for somebody to work with on your project? You're in the
            right place.
          </Typography>
        </Container>
      </div>
      <Box border={2} padding={6} margin={2} borderRadius={16}>
    

          <Grid container spacing={5} justify="center" align="center">
          

            {listOfUserCards}
        
          </Grid>

    
      </Box>
    </main>
  );
}
 {/* {cards.map((card) => (
              <Grid item={card} xs={12} sm={6} md={4}>
                <UserCard />

              </Grid>
            ))} */}