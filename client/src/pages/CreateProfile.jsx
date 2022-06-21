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
  CardMedia,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import SkillListItem from "../components/SkillListItem";
import SocialListItem from "../components/SocialListItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const navigate = useNavigate();
  const classes = useStyles();
  // const { self, setSelf } = useContext(DataContext);
  const [role, setRole] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [shortBio, setShortBio] = React.useState("");
  const [socialMedia, setSocialMedia] = React.useState({});
  const [skillsObject, setSkillsObject] = React.useState({
    default: false,
  });

  const createProfile = () => {
    const skills = [];
    for (let skill of Object.keys(skillsObject)) {
      if (skillsObject[skill] == true) skills.push(skill);
    }

    const userData = {
      role,
      skills,
      shortBio,
      bio,
      socialMedia,
    };

    axios.patch("users/self", userData).then((res) => {
      console.log(res.data);
      navigate("/My-Profile");
    });
  };

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
                <CardMedia
                  className={classes.createProfMedia}
                  image="https://i.pinimg.com/474x/50/9b/1d/509b1dcaadfdc98a39c5e0bec21fc197.jpg"
                />
                <Grid container justify="center">
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      component="label"
                      style={{ marginTop: "30px" }}
                    >
                      Upload Profile Picture
                      <input type="file" hidden />
                    </Button>
                  </Grid>
                </Grid>
                <Box>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    color="secondary"
                  >
                    Which role best describes you?
                  </Typography>

                  <Grid container>
                    <Grid item xs={10}>
                      <ToggleButtonGroup
                        fullWidth="true"
                        color="warning"
                        value={role}
                        orientation={"horizontal"}
                        size={"medium"}
                        exclusive
                        onChange={(event) => setRole(event.target.value)}
                      >
                        <ToggleButton value="UX/UI designer">
                          UX/UI designer
                        </ToggleButton>
                        <ToggleButton value="Front-end developer">
                          Front-end developer
                        </ToggleButton>
                        <ToggleButton value="Back-end developer">
                          Back-end developer
                        </ToggleButton>
                        <ToggleButton value="Full-stack developer">
                          Full-stack developer
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                  </Grid>

                  <SkillListItem
                    skillsObject={skillsObject}
                    setSkillsObject={setSkillsObject}
                  />
                </Box>

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Describe yourself in one sentence!
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Write a short and sweet intro"
                    multiline
                    rows={1}
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                    style={{ width: "75%" }}
                    value={shortBio}
                    onChange={(event) => setShortBio(event.target.value)}
                  />
                </div>
                <SocialListItem setSocialMedia={setSocialMedia} />

                <br />
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  And now write as much as you want to help Collab||8'ors know you better!
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Tell us more about yourself"
                    multiline
                    rows={6}
                    defaultValue={bio}
                    variant="outlined"
                    color="secondary"
                    style={{ width: "75%" }}
                    onChange={(event) => setBio(event.target.value)}
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
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ marginBottom: "15px" }}
                    >
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
