import * as React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import {
  Typography,
  Button,
  Box,
  CardContent,
  Grid,
} from "@material-ui/core";


export default function OthersProp() {
  const classes = useStyles();


  return (
    <Box p={5}>
    <div className={classes.card}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: 'flex', justifyContent:"center"}}>
          <Paper className={classes.content} elevation={8} style={{ display: 'flex', justifyContent:"center"}}>
          <CardContent>
          <img src="https://i.pinimg.com/736x/6c/44/59/6c44599df53591ef7283e6212ea41e7c--desktop-backgrounds-desktop-wallpapers.jpg"
              className={classes.userprofileavatar}
              alt="Beaker"
            /> 
   
                <Typography className={classes.title} component="h5" variant="h5" color="secondary" style={{ display: 'flex', justifyContent:"center"}}>
                  UserNameGoesHere
                </Typography>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="textSecondary"
                  style={{ display: 'flex', justifyContent:"center"}}>
                  Junior Web Developer
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
        Title of the Proposal
      </Typography>
      <Typography className={classes.title} variant="h6" color="textSecondary">
        Just for Fun
      </Typography>
 
      <Typography className={classes.title} variant="h6" color="textSecondary">
        Looking for: UX/UI Designer
      </Typography>
      <Typography className={classes.bio}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Typography>
    </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </Box>
  );
}


