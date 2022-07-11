import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { Container, Link, Grid, makeStyles, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardHeader, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper, Avatar, Stack } from '@mui/material'
import "./UserProfile.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import useStyles from "../styles";
import { DataContext } from "./../DataContext";
import ProposalCardProfile from "../components/ProposalCardProfile";
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import { TextureLoader } from "three";

//STYLING FOR PAGE ------------------------------------------------------
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


//styling for when there are no active proposals 
const styleObj = {
  fontSize: 20,
  color: "#DB7093",
  textAlign: "center",
  paddingTop: "25px",
}

export default function UserProfile() {
  const classes = useStyles();

  const { proposals, setProposals, self, setSelf } = useContext(DataContext);
  const [selfProposals, setSelfProposals] = useState([])


    //Scroll to top when entering page
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    


  useEffect(() => {
    //If the self variable is {}, load the info again

    //if(Object.keys(self).length==0) {
    axios.get("api/users/self")
      .then((res) => {
        // console.log(res.data.skills)
        setSelf(res.data)
      })
    //}

    axios.get("api/proposals/self")
      .then(res => {
        // console.log(res.data)
        setSelfProposals(res.data)
      })
  }, [])


  //FUNCTIONS TO FETCH ACTIVE & INACTIVE PROPOSALS ----------------------------------------
  const selfActiveProposals = []
  const selfInactiveProposals = []

  for (let proposal of selfProposals) {
    if (proposal.status == "Active") {
      selfActiveProposals.push(proposal)
    } else {
      selfInactiveProposals.push(proposal)
    }
  }

  const selfActiveProposalCards = selfActiveProposals.map((proposal) => {
    return (
      <Grid item={proposal} >
        <ProposalCardProfile
          key={proposal._id}
          _id={proposal._id}
          author={proposal.author}
          title={proposal.title}
          shortDescription={proposal.shortDescription}
          image={proposal.image}
          seeking={proposal.seeking}
        />
      </Grid>
    );
  });
  // console.log(selfActiveProposalCards)

  const selfInactiveProposalCards = selfInactiveProposals.map((proposal) => {
    return (
      <Grid item={proposal} >
        <ProposalCardProfile
          key={proposal._id}
          _id={proposal._id}
          author={proposal.author}
          title={proposal.title}
          shortDescription={proposal.shortDescription}
          image={proposal.image}
          seeking={proposal.seeking}
        />
      </Grid>
    );
  });



  return (
    <>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="secondary" gutterBottom>
            Your personal profile
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Review your information and proposals and make changes as needed
          </Typography>
        </Container>
      </div>
      {/* <div class="body"> */}
      <Box sx={{ flexGrow: 1 }} >
        <div className="columns">
          <Grid container spacing={2} columns={16} justifyContent="center">
            <Grid item xs={3}>
              <Item>
                {/* USER PROFILE GRID----------------------------------------------------- */}
                <Card>

                <CardContent>
                  <h1 style={{color: "#F50057"}}> {self.userhandle} </h1>
                  <br />
                  <div className="avatar">
                  <Avatar style={{ justifyContent: "center", display: "flex", alignItems:"center" }}

                    alt="Username"
                    src={self.avatar}
                    sx={{ width: 120, height: 120 }}
                    classes={classes.chip}
                  />
                  </div>
                  <br />
                  <p>
                    <div className="socialIcons">
                      {self.socialMedia &&
                        self.socialMedia.Portfolio && (
                          <Link
                            href={self.socialMedia.Portfolio}
                            target="blank"
                          >
                            <ScreenshotMonitorIcon className="svg_icons" />
                          </Link>
                        )}
                      {self.socialMedia && self.socialMedia.GitHub && (
                        <Link
                          href={self.socialMedia.GitHub}
                          target="blank"
                        >
                          <GitHubIcon className="svg_icons" />
                        </Link>
                      )}
                      {self.socialMedia && self.socialMedia.LinkedIn && (
                        <Link
                          href={self.socialMedia.LinkedIn}
                          target="blank"
                        >
                          <LinkedInIcon className="svg_icons" />
                        </Link>
                      )}
                      {self.socialMedia && self.socialMedia.Twitter && (
                        <Link
                          href={self.socialMedia.Twitter}
                          target="blank"
                        >
                          <TwitterIcon className="svg_icons" />
                        </Link>
                      )}
                      {self.socialMedia &&
                        self.socialMedia.Instagram && (
                          <Link
                            href={self.socialMedia.Instagram}
                            target="blank"
                          >
                            <InstagramIcon className="svg_icons" />
                          </Link>
                        )}
                    </div>
                    <br />
                    <h2 style={{color: "#303FA0"}}>{self.role}</h2>
                    <Typography variant="body1">

                    <p style={{color: "#4A5AB9", marginTop: 7}}>{self.skills && self.skills.join(" | ")}</p>

                    <Divider />
                    <br />

                    <h4 style={{textAlign: "left"}}>{self.shortBio}</h4>
                    {/* <Divider /> */}
                    <p style={{textAlign: "left"}}>{self.bio}</p>
                    </Typography>
                    </p>
                    <br />

                      <Link to="/My-Profile/:id/edit" style={{textDecoration: "none"}}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <Button style={{ margin: 10 }} variant="contained">
                            Edit Profile
                          </Button>
                        </div>
                      </Link>

                </CardContent>




                  {/* <CardContent>
                    <h1 className="userHandle">  {self.userhandle} </h1>
                    <br />
                    <div className="avatar">
                      <Avatar
                        alt="avatar"
                        src={self.avatar}
                        sx={{ width: 150, height: 150 }}
                      />
                    </div>
                    <br />
                    <p>
                      <div className="otherSocialIcons">
                        {self.socialMedia && self.socialMedia.Portfolio && <Link href={self.socialMedia.Portfolio} target="blank"><ScreenshotMonitorIcon className="svg_icons" /></Link>}
                        {self.socialMedia && self.socialMedia.GitHub && <Link href={self.socialMedia.GitHub} target="blank"><GitHubIcon className="svg_icons" /></Link>}
                        {self.socialMedia && self.socialMedia.LinkedIn && <Link href={self.socialMedia.LinkedIn} target="blank"><LinkedInIcon className="svg_icons" /></Link>}
                        {self.socialMedia && self.socialMedia.Twitter && <Link href={self.socialMedia.Twitter} target="blank"><TwitterIcon className="svg_icons" /></Link>}
                        {self.socialMedia && self.socialMedia.Instagram && <Link href={self.socialMedia.Instagram} target="blank"><InstagramIcon className="svg_icons" /></Link>}
                      </div>
                      <br />
                      <h3>Role:</h3>
                      <Divider />
                      {self.role}
                      <br />
                      <br />
                      <h3>Description:</h3>
                      <Divider />
                      {self.bio}
                      <br />
                      <br />
                      <h3>Skills: </h3>
                      <Divider />

                      {self.skills && self.skills.join(" | ")}
                      {/* <br /> *
                      <br />
                      <Link to="/My-Profile/:id/edit" >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <Button style={{ margin: 10 }} variant="contained">
                            Edit Profile
                          </Button>
                        </div>
                      </Link>
                    </p>
                  </CardContent> */}



                </Card>
              </Item>
            </Grid>

            <Grid item xs={7}>
              <Item>
                {/* ACTIVE PROPOSALS---------------------------------------------------- */}
                <Card>
                  <CardContent>
                    <h1 text-align="center" padding="20px">Your active proposals</h1>
                    <Divider />
                    <br />
                    <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                      {selfActiveProposalCards.length == 0 && <h4 style={styleObj}>You have no active proposals, publish one to share your ideas!</h4>}
                      {selfActiveProposalCards.map(activepropcard => activepropcard)}
                      {/* maps through array of JSX objects & instead of rendering it, it tells it to just return it as that  */}
                    </Grid>
                  </CardContent>
                </Card>

                {/* ARCHIVED PROPOSALS------------------------------------------------ */}

                {selfInactiveProposalCards.length > 0 &&
                  <Card>
                    <CardContent>
                      <h1>Your inactive proposals</h1>
                      <Divider />
                      <br />
                      <Grid container alignItems="contain" style={{ display: 'flex', justifyContent: 'center' }}>
                        {selfInactiveProposalCards}
                      </Grid>
                    </CardContent>
                  </Card>
                }

              </Item>
            </Grid>
          </Grid>
        </div>
      </Box>
      {/* </div> */}
    </>
  )
}