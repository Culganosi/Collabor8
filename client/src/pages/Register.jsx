import "./Forms.css";
import React, { useState, useContext } from 'react';
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Background from "./Background";
import { Grid, Link } from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "./../DataContext"
import useStyles from '../styles';
import { Container, Typography } from '@material-ui/core'
import purplewave from "../images/purplewave.webp";

export default function Register() {
  const classes = useStyles();

  const navigate = useNavigate();
  const { self, setSelf } = useContext(DataContext);


  const [userhandle, setUserhandle] = useState(undefined);
  const [password, setPassword] = useState(undefined);


  //TEMP SHORTCUT TO LOG IN
  const shortcutLogin = (shortcutUserhandle) => {
    console.log(shortcutUserhandle)
    axios.post("/auth/in", { userhandle: shortcutUserhandle, password: "123" })
      .then(response => {
        setSelf(response.data)
      })
      .then(() => navigate("/Create-Profile"))
      .catch(err => console.log(err))
  }



  //FUNCTION TO LOG IN
  const register = () => {
    axios.post("/auth/in", { userhandle, password })
      .then(response => {
        setSelf(response.data)
      })
      .then(() => navigate("/Create-Profile"))
      .catch(err => console.log(err))
  }



  return (
    <>
      <div className={classes.headercontainer}>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="secondary" gutterBottom>
            Register
          </Typography>

        </Container>
      </div>
      <Box>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Username"
                helperText="Please type in a username"
                multiline
                maxRows={1}
                value={userhandle}
                onChange={(event) => setUserhandle(event.target.value)}
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Password"
                helperText="Please enter your password"
                multiline
                maxRows={1}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Password "
                helperText="Please re-enter your password for confirmation"
                multiline
                maxRows={1}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => register()}
            >
              Submit</Button>
          </form>
        </div>
      </Box>
    </>
  );
}
