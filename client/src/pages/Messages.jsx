import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Typography, Button, Box, Grid, Container } from "@material-ui/core";
import useStyles from "../styles";

export default function BrowseProp() {
  const classes = useStyles();

  return (

<div className={classes.container}>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="secondary" gutterBottom>
            Messages
          </Typography>
          {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
          </Typography> */}
        </Container>
      </div>



  )

}