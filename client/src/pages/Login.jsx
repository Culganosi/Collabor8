import "./Forms.css";
import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Background from "./Background";
import { Grid, Link } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "./../DataContext";
import useStyles from "../styles";
import { Container, Typography } from "@material-ui/core";
import purplewave from "../media/purplewave.webp";
import styled from "styled-components";
import Background from "../components/Background";

export default function Login() {
  //Scroll to top when entering page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  const navigate = useNavigate();
  const { self, setSelf } = useContext(DataContext);

  const [userhandle, setUserhandle] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  //TEMP SHORTCUT TO LOG IN
  const shortcutLogin = (shortcutUserhandle) => {
    console.log(shortcutUserhandle);
    axios
      .post("/api/auth/in", { userhandle: shortcutUserhandle, password: "123" })
      .then((response) => {
        setSelf(response.data);
      })
      .then(() => navigate("/Home"))
      .catch((err) => console.log(err));
  };

  //FUNCTION TO LOG IN
  const login = () => {
    axios
      .post("/api/auth/in", { userhandle, password })
      .then((response) => {
        setSelf(response.data);
      })
      .then(() => navigate("/Home"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="background">
        {/* <Wrapper> */}

        <div className={classes.headercontainer}>
          <Container max-Width="sm">
            <Typography
              variant="h2"
              align="center"
              color="secondary"
              className="title"
              gutterBottom
            >
              Login
            </Typography>
          </Container>
        </div>
        {/* </Wrapper> */}

        <Box>
          <div className="form-container">
            <form className="form">
              <div className="form-group">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Username"
                  color="warning"
                  variant="filled"
                  helperText="Please type in a username"
                  multiline
                  maxRows={1}
                  value={userhandle}
                  InputLabelProps={{
                    style: { color: "#CF9FFF" },
                  }}
                  InputProps={{
                    style: { color: "#ffffff" },
                  }}
                  onChange={(event) => setUserhandle(event.target.value)}
                />
              </div>
              <div className="form-group">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Password"
                  helperText="Please enter your password"
                  defaultValue=""
                  multiline
                  color="warning"
                  variant="filled"
                  maxRows={1}
                  type="password"
                  InputLabelProps={{
                    style: { color: "#CF9FFF" },
                  }}
                  InputProps={{
                    style: { color: "#ffffff" },
                  }}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <Button
                variant="contained"
                size="medium"
                color="secondary"
                onClick={() => login()}
              >
                Submit
              </Button>

              <br />
              <br />
            </form>
          </div>
        </Box>
      </div>
    </>
  );
}
