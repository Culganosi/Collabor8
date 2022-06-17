import "./Login.css";
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

export default function Login() {
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
      .then(() => navigate("/Home"))
      .catch(err => console.log(err))
  }



  //FUNCTION TO LOG IN
  const login = () => {
    axios.post("/auth/in", { userhandle, password })
      .then(response => {
        setSelf(response.data)
      })
      .then(() => navigate("/Home"))
      .catch(err => console.log(err))
  }



  return (
    <>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="secondary" gutterBottom>
            Login
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
                helperText="Please enter your username"
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

            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              onClick={() => login()}
            >
              Submit</Button>


            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>

            <h4>Temporary shortcuts - login as: </h4>
            <button type="button" onClick={() => shortcutLogin("kmyrtle0")}>kmyrtle0</button>
            <button type="button" onClick={() => shortcutLogin("rgostridge1")}>rgostridge1</button>
            <button type="button" onClick={() => shortcutLogin("lreardon2")}>lreardon2</button>

          </form>
        </div>

       

      </Box>

    </>
  );
}
