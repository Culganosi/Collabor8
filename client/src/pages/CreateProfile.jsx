import * as React from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import useStyles from "../styles";
import { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  CardContent,
  Grid,
  TextField,
  CardMedia
} from "@material-ui/core";

import RolesListItem from "../components/RolesListItem";
import SkillListItem from "../components/SkillListItem";
import SocialListItem from "../components/SocialListItem";

export default function CreateProfile() {
  const [state, setState] = React.useState({
    default: false,
  });

  //   #This is both for filling out the profile and for editing it later
  // PATCH http://localhost:3001/users/self
  // Content-Type: application/json
  // {
  //     "bio": "Ths is an updated bio to test 2"
  // }

  const createProfile = () => {
    const userData = {
      role,
      skills,
      shortBio,
      bio,
      socialMedia,
    };

    axios.patch("users/self", userData).then((res) => {
      console.log(res.data);
    });
  };

  const classes = useStyles();
  // const { self, setSelf } = useContext(DataContext);
  const [role, setRole] = React.useState("Front-End Developer");
  const [skills, setSkills] = React.useState(["Git", "JavaScript"]);
  const [bio, setBio] = React.useState("This is a test long bio");
  const [shortBio, setShortBio] = React.useState("This is a test short bio");
  const [socialMedia, setSocialMedia] = React.useState({
    Portfolio: "htto://google.com",
    GitHub: "http://GitHub.com",
  });

  return (
    <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Create your profile
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Set up your profile in order to best match you with other Collab||8rs!
        </Typography>
      </Container>

      <Box border={2} padding={5} margin={6} borderRadius={16}>
        <Grid container justify="center" alignItems="stretch">
          <Grid item>
            <Paper className={classes.card} elevation={4}>
              <CardContent>
              <CardMedia className={classes.createProfMedia} image="https://i.pinimg.com/474x/50/9b/1d/509b1dcaadfdc98a39c5e0bec21fc197.jpg" />
              <Grid container justify="center">
      <Grid item>
      <Button
        variant="outlined"
        color="secondary"
        component="label"
        style={{marginTop: '30px'}}
        >
        Upload Profile Picture
        <input type="file" hidden />
      </Button>
    </Grid>
    </Grid>
                <Box>
                  <RolesListItem />
                  <SkillListItem />
                </Box>

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Short Bio
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Enter a short description"
                    multiline
                    rows={1}
                    defaultValue="Lorem ipsum dolor proident"
                    value={shortBio}
                    onChange={setShortBio}
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
                <SocialListItem />

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Bio
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Enter a short description"
                    multiline
                    rows={6}
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
                    variant="filled"
                    style={{ width: "75%" }}
                  />
                </div>
              </CardContent>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => createProfile()}
                    >
                      Create Profile
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
