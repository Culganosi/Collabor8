import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles";
import {Container, Typography} from "@material-ui/core"

export default function Register() {
  const classes = useStyles();

    return (
      <>
      <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Register
        </Typography>

      </Container>
    </div>
      <div>
        <Link to="/">Go back to home</Link>
      </div>

      </>
    );
}
