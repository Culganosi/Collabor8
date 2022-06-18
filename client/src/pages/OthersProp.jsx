import * as React from "react";
import { useEffect, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import axios from "axios";
import { DataContext } from "./../DataContext";
import {
  Typography,
  Button,
  Box,
  CardContent,
  Grid,
} from "@material-ui/core";

export default function OthersProp() {
  const classes = useStyles();
  const proposals = useContext(DataContext);
  const {user, setUser} = useContext(DataContext);

  useEffect(() => {

    axios.get("/users/:id")
      .then((res) => {
        // console.log(res.data.skills)
        setUser(res.data)
      })

    axios.get("/proposals/:id")
    .then(res => {
      console.log(res.data)
    })
  }, []);
  // _id

return (
  <Box p={5}>
    <div className={classes.card}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: 'flex', justifyContent: "center" }}>
          <Paper className={classes.content} elevation={8} style={{ display: 'flex', justifyContent: "center" }}>
            <CardContent>
              <img src={user.avatar}
                className={classes.userprofileavatar}
                alt="user profile"
              />

              <Typography className={classes.title} component="h5" variant="h5" color="secondary" style={{ display: 'flex', justifyContent: "center" }}>
                {user.userhandle}
              </Typography>
              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                style={{ display: 'flex', justifyContent: "center" }}>
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
                {/* {proposals.id.title} */}
              </Typography>
              <Typography className={classes.title} variant="h6" color="textSecondary">
                Just for Fun
              </Typography>

              <Typography className={classes.title} variant="h6" color="textSecondary">
                Looking for: {proposals.seeking}
              </Typography>
              <Typography className={classes.bio}>
                {proposals.shortDescription}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </Box>
);
}


