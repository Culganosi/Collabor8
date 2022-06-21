import React, { useState, useEffect, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
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
//Import firebase config
import {storage} from "./../config"
import "./CreateProposal.css"

export default function EditModal() {
  const navigate = useNavigate();
  const classes = useStyles();
  const params = useParams();
  const proposalId = params.id;

  //State variables
  const [oldProposal, setOldProposal] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [title, setTitle] = React.useState(oldProposal.title);
  const [description, setDescription] = React.useState(oldProposal.description);
  const [shortDescription, setShortDescription] = React.useState(oldProposal.shortDescription);
  const [seekingRole, setSeekingRole] = React.useState("");

  //Image upload variables
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState('')
  const [imageAsPreview, setImageAsPreview] = useState('')
  const fileInputRef = useRef()


  //-------Get existing data

  useEffect(() => {
    axios.get(`/proposals/${proposalId}`).then((res) => {
      setOldProposal(res.data);
      setSeekingRole(res.data.seeking[0]);
      setChecked(res.data.status == "Active")
      setImageAsPreview(res.data.image)
    });
  }, []);


 //Only call "submit edit proposal" once the image is there
 useEffect(() => {
  if (imageAsUrl) {
    submitEditProposal()
  }
}, [imageAsUrl])



  //Only go to firebase if user chose a new image
  const handleEditProposal = () => {
    if (imageAsPreview==oldProposal.image) {
      setImageAsUrl(imageAsPreview)
    } else {
      handleFireBaseUpload()
    }
  }

  //Submit changed info
  const submitEditProposal = () => {

    let status = "Active";
    if (!checked) status = "Inactive"; //status is still not set as a default

    const newData = {
      status,
      title,
      description,
      shortDescription,
      seeking: [seekingRole],
      image: imageAsUrl
    };

    axios.patch(`/proposals/${proposalId}`, newData).then((res) => {
      console.log(res.data);
      navigate(`/My-Profile/${proposalId}`);
    });
  };

  //Submit deletion request
  const submitDeleteProposal = () => {
    axios.delete(`/proposals/${proposalId}`).then(() => {
      navigate(`/My-Profile/`);
    });
  };


  //Change active/inactive back and forth
  const toggleChecked = () => {
    console.log("checked is: " + checked);
    setChecked((prev) => !prev);
  };


    ///-----------For image upload

  //When the circular button is clicked, redirect to click the file upload instead
  const handlePreviewClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  }

  //When user chooses a new image, store it if it's valid
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    if (image && image.type.substr(0, 5)==="image") {
      setImageAsFile(imageFile => (image))
    }
  }

  //When the user's uploaded image changes
  //read it into a data string and store it
  useEffect(() => {
    if (imageAsFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageAsPreview (reader.result)
      }
      reader.readAsDataURL(imageAsFile)
    }
  }, [imageAsFile])

  
  const handleFireBaseUpload = e => {
    //Random name for storing image file
    const randomFileName = (Math.random() + 1).toString(36)
    //Upload the image
    const uploadTask = storage.ref(`/images/${randomFileName}`).put(imageAsFile)
    //Get the URL of the image
    uploadTask.on('state_changed', 
    (snapShot) => {
      console.log(snapShot)
    }, (err) => {
      console.log(err)
    },
    () => {
      storage.ref('images').child(randomFileName).getDownloadURL()
      .then(fireBaseUrl => {
        setImageAsUrl(fireBaseUrl)
      }) })
  }


  ///------RENDER

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



                {/* Proposal image */}

                <Typography
                    className={classes.title}
                    style={{marginBottom: "10px"}}
                    variant="h5"
                    color="secondary"
                  >
                    Image
                  </Typography>

                  {/* Display either the preview or the circular button */}
                  {imageAsPreview ? 
                  <img src={imageAsPreview} className="proposal-image-preview" onClick={handlePreviewClick}/> :
                  <button className="proposal-image-button" onClick={handlePreviewClick}>Upload an image</button>
                  }

                  {/* This is actually hidden */}
                  <form>
                    <input type="file" inputProps={{ accept: 'image/*' }} name="avatar" onChange={handleImageAsFile}  style={{display: "none"}} ref={fileInputRef} />
                  </form>








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
                      onClick={() => handleEditProposal()}
                    >
                      Save Changes
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary" onClick={() => navigate(-1)}>
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
