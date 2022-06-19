import { Link, Routes, Route } from 'react-router-dom';
import OtherProfile from '../pages/OtherProfile';
import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import useStyles from "../styles";



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
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMediaUser}
        image={avatar}
        title="avatar"
      />
      <Divider />
      <div className={classes.details}>
        <CardContent className={classes.cardContent}>
          <Typography component="h5" variant="h5" color="secondary">
            {userhandle}
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            color="textSecondary"
          >
            {role}
          </Typography>
          <Typography
            className={classes.skills}
            variant="subtitle1"
            color="secondary"
          >
            {skills.join(" | ")}
          </Typography>
          <Typography className={classes.bio}>{shortBio}</Typography>

          <Link to={`/People/${_id}`} style={{ textDecoration: 'none' }} element={<OtherProfile />} >
            <Button variant="contained" color="secondary">
              See User Profile
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}
