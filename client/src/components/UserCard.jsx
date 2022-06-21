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
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  root: {
    listStyle: "none",
  },
  card: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    paddingTop: "10px",
    paddingBottom: "10px",
    ["@media (min-width:600px)"]: {
      flexDirection: "row",
    },
  },
  media: {
    width: "auto",
    borderRadius: "55%",
    ["@media (min-width:600px)"]: {
      width: "100px",
    }
  },
  title: {
    width: "auto",
    alignItems: "stretch",

  },

  topRight: {
    paddingLeft: "80px"
  },
  bio: {
    paddingLeft: "25px",
  } ,
  skills: {
    paddingLeft: "25px",
    paddingTop: "25px"
  }
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
  
      <Card component="li" className={classes.root}>
        <CardActionArea
          component="div"
          className={classes.card}
          aria-disabled="true"
          role="presentation"
          tabIndex="-1"
        >
          <CardMedia
            className={classes.media}
            image={avatar}
          />

          <CardContent className={classes.topRight}>
            <Typography component="h4" variant="h5" color="secondary">
              {userhandle}
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              color="textSecondary"
              noWrap
            > 
              {role}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <Grid container>
          <Grid item>
            <Typography
              className={classes.skills}
              variant="subtitle1"
              color="secondary"
            >
              {skills.join(" | ")}
            </Typography>
            <Typography className={classes.bio}>{shortBio}</Typography>
            <CardContent className={classes.card}>
              <Link
                to={`/People/${_id}`}
                style={{ textDecoration: "none" }}
                element={<OtherProfile />}
              >
                <Button variant="contained" color="secondary">
                  See User Profile
                </Button>
              </Link>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
  );
}
