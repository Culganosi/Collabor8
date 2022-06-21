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
import ProposalCard from "../components/ProposalCard";
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

const styles = makeStyles((theme) => ({
  avatar: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(2, 2, 0),
  },
  card: {
    margin: 16, //space b/w cards
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 15,
    maxWidth: "270px",
    minWidth: "270px",
    height: "330px",
    backgroundColor: theme.palette.background.card,
  },
  cardContent: {
    padding: theme.spacing(2, 1, 1, 1),
  },
}));



export default function UserProfile() {
  const classes = useStyles();

  const { proposals, setProposals, self, setSelf } = useContext(DataContext);
  const [selfProposals, setSelfProposals] = useState([])


  useEffect(() => {
    //If the self variable is {}, load the info again

    //if(Object.keys(self).length==0) {
    axios.get("/users/self")
      .then((res) => {
        // console.log(res.data.skills)
        setSelf(res.data)
      })
    //}

    axios.get("/proposals/self")
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
        <ProposalCard
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
        <ProposalCard
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
            My User Profile
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            View your active and archived proposals. Edit profile that other users may see
          </Typography>
        </Container>
      </div>

      {/* <div class="body">
        <Container className="root-container">
          <Grid container spacing={3} sx={{ width: '120vw', height: '120vh' }}> */}







      {/* USER PROFILE GRID----------------------------------------------------- */}
      {/* <Grid container item xs={1} sm={2} lg={3} >
              <Card>
                <CardContent>
                  <h1 className="userHandle">  {self.userhandle} </h1>
                  <Avatar 
                    alt="avatar"
                    src={self.avatar}
                    sx={{ width: 150, height: 150 }}
                  />
                  <br/>
                  <p>
                    <div className="socialIcons">
                      {self.socialMedia && self.socialMedia.Portfolio && <Link href={self.socialMedia.Portfolio} target="blank"><ScreenshotMonitorIcon /></Link>}
                      {self.socialMedia && self.socialMedia.GitHub && <Link href={self.socialMedia.GitHub} target="blank"><GitHubIcon /></Link>}
                      {self.socialMedia && self.socialMedia.LinkedIn && <Link href={self.socialMedia.LinkedIn} target="blank"><LinkedInIcon /></Link>}
                      {self.socialMedia && self.socialMedia.Twitter && <Link href={self.socialMedia.Twitter} target="blank"><TwitterIcon /></Link>}
                      {self.socialMedia && self.socialMedia.Instagram && <Link href={self.socialMedia.Instagram} target="blank"><InstagramIcon /></Link>}
                    </div>
                    <br />
                    <h3>Role:</h3>
                    {self.role}
                    {/* <br /> */}
      {/* <Divider /> */}
      {/* <br /> */}
      {/* <h3>Description:</h3> */}
      {/* {self.bio} */}
      {/* <br /> */}
      {/* <Divider />
                    <br />
                    <h3>Skills: </h3>
                    {self.skills && self.skills.join(" | ")} */}
      {/* <br /> */}
      {/* <Divider />
                    <br />
                    <Link to="/My-Profile/:id/edit" >
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ margin: 10 }} variant="contained">
                      Edit Profile
                    </Button>
                    </div>
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </Grid> */}

      {/* <Grid container xs={12} sm={7} lg={9}>
              <Stack spacing={1} flex="1 1 0"> */}

      {/* ACTIVE PROPOSALS---------------------------------------------------- */}
      {/* <Card>
                  <CardContent>
                    <h1 text-align="center" padding="20px">Your Active Proposals</h1>
                    <Divider />
                    <br />
                    <Grid container alignItems="stretch">
                      {selfActiveProposalCards.length == 0 && <p>Post your first proposal so others can see your work</p>}
                      {selfActiveProposalCards.map(activepropcard => activepropcard)}
                      {/* maps through array of JSX objects & instead of rendering it, it tells it to just return it as that  */}
      {/* </Grid>
                  </CardContent>
                </Card> */}

      {/* ARCHIVED PROPOSALS------------------------------------------------ */}
      {/* <Card>
                  <CardContent>
                    <h1>Your Archived Proposals</h1>
                    <Divider />
                    <br />
                    <Grid container alignItems="contain">
                      {selfInactiveProposalCards}
                    </Grid>
                  </CardContent>
                </Card>





              </Stack>
            </Grid>

          </Grid>
        </Container>
      </div> */}


      {/* <div class="body"> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16} justifyContent="center"
        >
          <Grid item xs={3}>
            <Item>
              {/* USER PROFILE GRID----------------------------------------------------- */}
              <Card>
                <CardContent>
                  <h1 className="userHandle">  {self.userhandle} </h1>
                  <Avatar
                  className="avatar"
                    alt="avatar"
                    src={self.avatar}
                    sx={{ width: 150, height: 150 }}
                  />
                  <br />
                  <p>
                    <div className="socialIcons">
                      {self.socialMedia && self.socialMedia.Portfolio && <Link href={self.socialMedia.Portfolio} target="blank"><ScreenshotMonitorIcon /></Link>}
                      {self.socialMedia && self.socialMedia.GitHub && <Link href={self.socialMedia.GitHub} target="blank"><GitHubIcon /></Link>}
                      {self.socialMedia && self.socialMedia.LinkedIn && <Link href={self.socialMedia.LinkedIn} target="blank"><LinkedInIcon /></Link>}
                      {self.socialMedia && self.socialMedia.Twitter && <Link href={self.socialMedia.Twitter} target="blank"><TwitterIcon /></Link>}
                      {self.socialMedia && self.socialMedia.Instagram && <Link href={self.socialMedia.Instagram} target="blank"><InstagramIcon /></Link>}
                    </div>
                    <br />
                    <h3>Role:</h3>
                    {self.role}
                    <br />
                    <Divider />
                    <br />
                    <h3>Description:</h3>
                    {self.bio}
                    <br />
                    <Divider />
                    <br />
                    <h3>Skills: </h3>
                    {self.skills && self.skills.join(" | ")}
                    {/* <br /> */}
                    <Divider />
                    <br />
                    <Link to="/My-Profile/:id/edit" >
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ margin: 10 }} variant="contained">
                          Edit Profile
                        </Button>
                      </div>
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          
          <Grid item xs={7}>
            <Item>
              {/* ACTIVE PROPOSALS---------------------------------------------------- */}
              <Card>
                <CardContent>
                  <h1 text-align="center" padding="20px">Your Active Proposals</h1>
                  <Divider />
                  <br />
                  <Grid container alignItems="stretch">
                    {selfActiveProposalCards.length == 0 && <p>Post your first proposal so others can see your work</p>}
                    {selfActiveProposalCards.map(activepropcard => activepropcard)}
                    {/* maps through array of JSX objects & instead of rendering it, it tells it to just return it as that  */}
                  </Grid>
                </CardContent>
              </Card>
              {/* ARCHIVED PROPOSALS------------------------------------------------ */}
              <Card>
                <CardContent>
                  <h1>Your Archived Proposals</h1>
                  <Divider />
                  <br />
                  <Grid container alignItems="contain">
                    {selfInactiveProposalCards}
                  </Grid>
                </CardContent>
              </Card>
            </Item>
          </Grid>

        </Grid>
      </Box>
      {/* </div> */}
    </>
  )
}
