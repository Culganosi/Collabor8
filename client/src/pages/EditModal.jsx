import * as React from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import axios from "axios";
import {
  Typography,
  Button,
  Box,
  Container,
  CardContent,
  CardMedia,
  Grid,
  Switch,
  FormGroup,
  FormControlLabel,
  TextField,
  MenuItem,
} from "@material-ui/core";

export default function EditModal() {
  const navigate = useNavigate();

  //Useeffect - call to get existing info about proposal, set as placeholder values
  //Save user's changes
  //On submit - call to patch /proposals/:id with the new info

  useEffect(() => {
    axios.get(`/proposals/${proposalId}`).then((res) => {
      setOldProposal(res.data);
      setSeekingRole(res.data.seeking[0]);
    });
  }, []);

  const submitEditProposal = () => {
    console.log("Inside the submit function");

    let status = "Active";
    if (checked) status = "Inactive"; //status is still not set as a default

    const newData = {
      status,
      title,
      description,
      shortDescription,
      seeking: [seekingRole],
    };

    axios.patch(`/proposals/${proposalId}`, newData).then((res) => {
      console.log(res.data);
      navigate(`/My-Profile/${proposalId}`);
    });
  };

  const submitDeleteProposal = () => {
    axios.delete(`/proposals/${proposalId}`).then(() => {
      navigate(`/My-Profile/`);
    });
  };

  const [oldProposal, setOldProposal] = useState({});

  const params = useParams();
  const proposalId = params.id;

  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [checked, setChecked] = React.useState(oldProposal.status == "Active");

  const [title, setTitle] = React.useState(oldProposal.title);
  const [description, setDescription] = React.useState(oldProposal.description);
  const [shortDescription, setShortDescription] = React.useState(
    oldProposal.shortDescription
  );
  const [seekingRole, setSeekingRole] = React.useState("");

  const toggleChecked = () => {
    console.log(checked);
    setChecked((prev) => !prev);
  };
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Edit Proposal
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Make changes below to update the details of your proposal
        </Typography>
      </Container>

      <Box p={5}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper className={classes.ownprofile} elevation={8}>
              <CardContent className={classes.cardContent}>
                <CardMedia
                  className={classes.cardMedia}
                  image={oldProposal.image}
                  title="Title"
                />
                <Button variant="outlined" color="secondary">
                  Upload picture
                </Button>

                <Typography component="h5" variant="h5" color="secondary">
                  Title of the Proposal
                </Typography>
                <TextField
                  id="filled-multiline-static" //"filled-basic"
                  defaultValue={oldProposal.title}
                  multiline
                  variant="filled"
                  color="secondary"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Short description
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={1}
                    defaultValue={oldProposal.shortDescription}
                    variant="filled"
                    style={{ width: "75%" }}
                    onChange={(event) =>
                      setShortDescription(event.target.value)
                    }
                  />
                </div>
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Looking for:
                </Typography>

                <Grid container>
                  <Grid item xs={10}>
                    <ToggleButtonGroup
                      fullWidth="true"
                      color="warning"
                      value={seekingRole}
                      orientation={"horizontal"}
                      size={"medium"}
                      exclusive
                      onChange={(event) => setSeekingRole(event.target.value)}
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

                <Typography
                  className={classes.title}
                  variant="h6"
                  color="secondary"
                >
                  Description
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={6}
                    defaultValue={oldProposal.description}
                    variant="filled"
                    style={{ width: "75%" }}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={checked} onChange={toggleChecked} />
                    }
                    label={`Proposal is ${checked ? "Active" : "Inactive"}`}
                  />
                </FormGroup>
              </CardContent>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => submitDeleteProposal()}
                    >
                      Delete Proposal
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => submitEditProposal()}
                    >
                      Save Changes
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
