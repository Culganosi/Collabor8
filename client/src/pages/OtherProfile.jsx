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

  const [otherUser, setOtherUser] = useState({})

  useEffect(() => {
    "62ac9574647371e54697937d"
    axios.get("/users/62ab80d97c81411e543b76fc")
      .then((res) => {
        //console.log(res.data)
        console.log(res.data.skills)
        setOtherUser(res.data)

      })
  }, [])

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography variant="h2" align="center" color="secondary" gutterBottom>
            Profile Page: {otherUser.userhandle}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            View this user's active proposals for a possible collaboration 👀
          </Typography>
        </Container>
      </div>
      <div class="body">
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
                      <Link href="#" target="blank">
                        <ScreenshotMonitorIcon />
                      </Link>
                      <Link href="#" target="blank">
                        <GitHubIcon />
                      </Link>
                      <Link href="#" target="blank">
                        <LinkedInIcon />
                      </Link>
                      <Link href="#" target="blank">
                        <TwitterIcon />
                      </Link>
                      <Link href="#" target="blank">
                        <InstagramIcon />
                      </Link>
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
                    <h1 text-align="center">Anon's Active Proposals
                    </h1>
                    <Grid container alignItems="stretch">

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal 1</h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent href="#">
                          <h4>Proposal 2</h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal 3</h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                    </Grid>
                    <Grid container alignItems="stretch">

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal 4</h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal 5</h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal 6</h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

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
