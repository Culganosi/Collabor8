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
    <Card style={{maxHeight:'330px', height: '100%'}}>
      <CardActionArea
        className={classes.card}
        aria-disabled="true"
        tabIndex="-1"
        style={{display: "flex", justifyContent: "flex-start"}}
      >
        <Box
          component="img"
          src={avatar}
          sx={{
            height: 90,
            width: 90,
            borderRadius: "50%",
            objectFit: "cover",
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 300, md: 250 },
            
          }}
        />

        <CardContent>
        <Link to={`/People/${_id}`} style={{ textDecoration: "none" }}>
            <Typography variant="h5" color="secondary" style={{textAlign: "left"}}>
              {userhandle}
            </Typography>
          </Link>
          <Typography
            className={classes.title}
            variant="subtitle1"
            color="textSecondary"
            noWrap={false}
            style={{textAlign: "left", fontWeight: "bold"}}
            
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
          <div  style={{display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px 20px 10px"}}>
          <Typography className={classes.bio} style={{textAlign: "left"}}>{shortBio}</Typography>
          <Typography
            className={classes.skills}
            variant="subtitle1"
            color="secondary"
            style={{textAlign: "left"}}
          >
            {skills.join(" | ")}
          </Typography>
          {/* <CardContent> */}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
