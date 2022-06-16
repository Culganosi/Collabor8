import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider
} from "@material-ui/core";
import useStyles from "../styles";
import { red } from '@mui/material/colors';


export default function UserCard() {
  const classes = useStyles();

  return (
<Card className={classes.card}>
<CardMedia
  className={classes.cardMediaUser}
  image="data:image/jpeg;base64,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"
  title="avatar"
/>
<Divider />
<div className={classes.details}>
<CardContent className={classes.cardContent}>
  <Typography component="h5" variant="h5" color="secondary">
    UserNameGoesHere
  </Typography>
  <Typography className={classes.title} variant="h6" color="textSecondary">
    Junior Web Developer
  </Typography>
  <Typography className={classes.skills}variant="subtitle1" color="secondary">Skill1, Skill2, Skill3</Typography>
  <Typography className={classes.bio}>
    Short Bio: I'm just a human being looking for another human being
    to work on a project that will benefit other human beings.
  </Typography>
  <Button variant="contained" color="secondary">
        See User Profile
      </Button>
</CardContent>

</div>
</Card>
  )
}