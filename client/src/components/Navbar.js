import React from "react";
import {AppBar, Button, Toolbar, CssBaseline, Typography, makeStyles,} from "@material-ui/core";
import { Link } from "react-router-dom";
import Splash from "./Splash";
function Navbar() {

  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "purple",
        borderBottom: "1px solid white",
      },
    },
  }));


  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          {/* <Link to="/UserProfile" clasName={classes.link}> */}
          Collab||8
          {/* </Link> */}
        </Typography>
          <div className={classes.navlinks}>
          <Button variant="contained" color="primary">
            <Link to="/Splash" className={classes.link}> 
              Home
            </Link>
            </Button>
            <Button variant="contained" color="primary">
            <Link to="/Register" className={classes.link}>
              Register
            </Link>
            </Button>
            <Button variant="contained" color="primary">
            <Link to="/Dashboard" className={classes.link}>
              Dashboard
            </Link>
            </Button>
            <Button variant="contained" color="primary">
            <Link to="/Login" className={classes.link}>
              Logout
            </Link>
            </Button>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
