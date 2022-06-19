import React, { useState, useEffect } from "react"
import { Container, Grid, makeStyles, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardHeader, CardActionArea, CardMedia, Popover, Link } from '@material-ui/core';
import { styled, Paper, Avatar, Stack } from '@mui/material'
import "./OtherProfile.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import EmailIcon from '@mui/icons-material/Email';
import useStyles from "../styles";
import ProposalCard from "../components/ProposalCard";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

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


export default function OtherProfile() {

  const params = useParams();
  const userId = params.id

  const [otherUser, setOtherUser] = useState({})
  const [userProposals, setUserProposals] = useState([])

  useEffect(() => {

    async function getData() {

      const userResponse = await axios.get(`/users/${userId}`)
      setOtherUser(userResponse.data)

      const proposalsRes = await axios.get("/proposals")
      const proposals = proposalsRes.data


      const tempUserProposals = []

        for (let proposalId of userResponse.data.activeProposals) {
          tempUserProposals.push(proposals[proposalId])
        }

      setUserProposals(tempUserProposals)
    }

    getData()

  }, [])


  const  userProposalsCards = userProposals.map((proposal) => {
      console.log(proposal)
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



  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="secondary" gutterBottom>
            {/* {!userProposalsCard ? `${otherUser.handle} has no active proposals at the moment` : `Profile Page: ${otherUser.userhandle}`} */}
            Profile Page: {otherUser.userhandle}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            View this user's active proposals for a possible collaboration 👀
          </Typography>
        </Container>
      </div>
      <div className="body">
        <Container className="root-container">
          <Grid container spacing={0} sx={{ width: '120vw', height: '120vh' }}>

            <Grid container item xs={10} sm={2} lg={3} >
              <Card>
                <CardContent>
                  <h1>  {otherUser.userhandle} </h1>
                  <Avatar
                    alt="Username"
                    src={otherUser.avatar}
                    sx={{ width: 56, height: 56 }}
                  />

                  <Button style={{ margin: 2 }} variant="contained">
                    <EmailIcon />
                  </Button>
                  
                  <p>
                    <div>
                      {otherUser.socialMedia && otherUser.socialMedia.Portfolio && <Link href={otherUser.socialMedia.Portfolio} target="blank"><ScreenshotMonitorIcon /></Link>}
                      {otherUser.socialMedia && otherUser.socialMedia.GitHub && <Link href={otherUser.socialMedia.GitHub} target="blank"><GitHubIcon /></Link>}
                      {otherUser.socialMedia && otherUser.socialMedia.LinkedIn && <Link href={otherUser.socialMedia.LinkedIn} target="blank"><LinkedInIcon /></Link>}
                      {otherUser.socialMedia && otherUser.socialMedia.Twitter && <Link href={otherUser.socialMedia.Twitter} target="blank"><TwitterIcon /></Link>}
                      {otherUser.socialMedia && otherUser.socialMedia.Instagram && <Link href={otherUser.socialMedia.Instagram} target="blank"><InstagramIcon /></Link>}
                    </div>
                    <br />

                    <h3>Role:</h3>
                    {otherUser.role}
                    <h3>Bio:</h3>
                    {otherUser.bio}
                    <br />
                    <h3>Skills: </h3>
                    {otherUser.skills && otherUser.skills.join(" | ")}


                  </p>
                </CardContent>
              </Card>
            </Grid>

            <Grid container xs={12} sm={7} lg={9}>
              <Stack spacing={1} flex="1 1 0">

                <Card>
                  <CardContent>
                    <h1 text-align="center">{otherUser.userhandle}'s Active Proposals
                    </h1>
                    <Grid container alignItems="stretch">

                    {userProposalsCards}
                    {userProposals.length==0 ? <p>{otherUser.userhandle} hasn't published any proposals yet </p> : <></>}

                      {/* <Grid item component={Card} xs>
                        <CardContent>
                          <h4>{userProposalsCards}</h4>
                        </CardContent>
                        <CardActions>
                          {userProposalsCards}
                          {userProposals.length==0 ? <p>No proposals here yet</p> : <></>} 
                        </CardActions>


                      </Grid> */}
                    </Grid>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}
