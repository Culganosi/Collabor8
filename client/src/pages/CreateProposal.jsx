import React, { useEffect, useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Container,
  CardContent,
  CardMedia,
  Grid,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";


//Import firebase config
import {storage} from "./../firebase-config"

//CSS STYLE IMPORT
import "./CreateProposal.css"

export default function CreateProposal() {

  const [title, setTitle] = React.useState("");
  const [seeking, setSeeking] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [shortDescription, setShortDescription] = React.useState("");
  //Image upload variables
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState('')
  const [imageAsPreview, setImageAsPreview] = useState('')
  const fileInputRef = useRef()
  //Other
  const navigate = useNavigate();
  const classes = useStyles();

  //Scroll to top when entering page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
 //Only call "create profile" once the image has uploaded
 useEffect(() => {
  if (imageAsUrl) {
    createProposal()
  }
}, [imageAsUrl])


  const createProposal = () => {
    const proposalData = {
      title,
      description,
      shortDescription,
      seeking,
      status: "Active",
      image: imageAsUrl
    };
    axios.post("/api/proposals", proposalData).then((res) => {
      navigate("/My-Profile");
    });
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


  //---------Render the page

  return (
    <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          Create a proposal
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Fill out the details to publish your brilliant idea
        </Typography>
      </Container>

      <Box border={2} padding={5} margin={6} borderRadius={16} borderColor="#363667">
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={8}>
            <Paper className={classes.createprofile} elevation={8}  style={{padding: "80px"}}>
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  color="secondary"
                >
                  Title
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Provide a title for your proposal"
                    multiline
                    rows={1}
                    variant="outlined"
                    color="secondary"
                    style={{ width: "100%" }}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>



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



                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  color="secondary"
                  style={{marginBottom: "10px"}}
                >
                  Add an elevator pitch - 100 characters or less
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    inputProps={{ maxLength: 100 }}
                    label="Provide a one-line description"
                    multiline
                    rows={2}
                    variant="outlined"
                    color="secondary"
                    style={{ width: "100%" }}
                    value={shortDescription}
                    onChange={(event) =>
                      setShortDescription(event.target.value)
                    }
                  />
                </div>

                <br />
                  <br />
                <Typography component="h5" variant="h5" color="secondary" style={{marginBottom: "10px"}}>
                  Who are you seeking to collaborate with?
                </Typography>
                <Grid container>
                  <Grid item xs={10}>
                    <ToggleButtonGroup
                      fullWidth="true"
                      color="primary"
                      value={seeking}
                      orientation={"horizontal"}
                      size={"medium"}
                      exclusive
                      onChange={(event) => setSeeking([event.target.value])}
                    >
                      <ToggleButton value="UX/UI designer" style={{borderRadius: "15px", marginRight: "10px"}}>
                        UX/UI designer
                      </ToggleButton>
                      <ToggleButton value="Front-end developer" style={{borderRadius: "15px", marginRight: "10px"}}>
                        Front-end developer
                      </ToggleButton>
                      <ToggleButton value="Back-end developer" style={{borderRadius: "15px", marginRight: "10px"}}>
                        Back-end developer
                      </ToggleButton>
                      <ToggleButton value="Full-stack developer" style={{borderRadius: "15px", marginRight: "10px"}}>
                        Full-stack developer
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>


                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  color="secondary"
                  style={{marginBottom: "10px"}}
                >
              
                  Expand on your idea in more detail
                </Typography>
                <div>
                  <TextField
                    id="filled-multiline-static"
                    label="Provide any details Collab||8'ors should know"
                    multiline
                    rows={6}
                    variant="outlined"
                    color="secondary"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    style={{ width: "100%" }}
                  />
                </div>
              </CardContent>
              <div>
                <Grid container spacing={2} justifyContent="flex-end" style={{paddingRight: 15, marginTop: 5}}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleFireBaseUpload()}
                    >
                      Create Proposal
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link to="/Home">
                      <Button variant="outlined" color="secondary">
                        Cancel
                      </Button>
                    </Link>
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
