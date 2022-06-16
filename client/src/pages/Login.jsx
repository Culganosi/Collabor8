import "./Login.css";
import React from 'react';
import Button from "@material-ui/core/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Background from "./Background";
import {Grid, Link} from "@material-ui/core"

export default function Login() {
  return (
   
      <Box>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Username"
                helperText="Please enter your username"
                multiline
                maxRows={3}
              // value={value}
              // onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Password"
                helperText="Please enter your password"
                multiline
                maxRows={3}
              // value={value}
              // onChange={handleChange}
              />
            </div>
    
            <Button 
            variant="outlined"
            size="medium"
            color="secondary"
            >Submit</Button>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </form>
        </div>
      </Box>
  

  );
}
