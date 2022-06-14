import React from "react";
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles,} from "@material-ui/core";
import { Link } from "react-router-dom";
  

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
        color: "yellow",
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
          Navbar
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}> 
              Home
            </Link>
            <Link to="/Register" className={classes.link}>
              Register
            </Link>
            <Link to="/Login" className={classes.link}>
              Login
            </Link>
            <Link to="/Dashboard" className={classes.link}>
              Dashboard
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
