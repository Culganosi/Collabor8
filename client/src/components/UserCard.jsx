import { Link, Routes, Route } from "react-router-dom";
import OtherProfile from "../pages/OtherProfile";
import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Avatar,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    listStyle: "none",
  },
  card: {
    display: "flex",
    alignItems: "stretch",

    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    
    ["@media (min-width:600px)"]: {
      flexDirection: "row",
    },
  },
  title: {
    width: "100%",
  },
  skills: {
    paddingTop: "15px",
  },
});

export default function UserCard({
  _id,
  avatar,
  shortBio,
  skills,
  userhandle,
  role,
}) {
  const classes = useStyles();

  return (
    <Card style={{maxHeight:'400px', height: '100%'}}>
      <CardActionArea
        className={classes.card}
        aria-disabled="true"
        tabIndex="-1"
      >
        <Box
          component="img"
          src={avatar}
          sx={{
            height: 233,
            width: 300,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 300, md: 250 },
            
          }}
        />

        <CardContent>
          <Typography variant="h5" color="secondary">
            {userhandle}
          </Typography>
          <Typography
            className={classes.title}
            variant="subtitle1"
            color="textSecondary"
            noWrap={false}
            
          >
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <Grid
        container
        direction="column"

        
      >
        <Grid item>
          <Typography
            className={classes.skills}
            variant="subtitle1"
            color="secondary"
          >
            {skills.join(" | ")}
          </Typography>
          <Typography className={classes.bio}>{shortBio}</Typography>
          <CardContent>
            <Link
              to={`/People/${_id}`}
              style={{ textDecoration: "none" }}
              element={<OtherProfile />}
            >
              <Box display="flex" flexDirection="column" justifyContent="flex-end">

              <Button variant="contained" color="secondary">
                See User Profile
              </Button>
              </Box>
            </Link>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
