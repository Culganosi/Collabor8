import React, { useState } from "react"
import { Container, Grid, makeStyles, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardHeader, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper, Avatar, Stack } from '@mui/material'
import "./UserProfile.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

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

{/* <Container fixed>
  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
</Container> */}
export default function UserProfile() {
  return (
    <>
      <br />
      <div class="body">
        <Container className="root-container">
          <Grid container spacing={0} sx={{ width: '120vw', height: '120vh' }}>

            <Grid container item xs={1} sm={2} lg={3} >
              <Card>
                <CardContent>
                  <h1>  Other User's Profile  </h1>
                  <Avatar
                    alt="Username"
                    src="https://avatars.dicebear.com/api/adventurer-neutral/your-custom-seed.svg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <p>
                    <div>
                      <GitHubIcon />
                      <LinkedInIcon />
                      <TwitterIcon />
                      <InstagramIcon />
                    </div>

                    <br />

                    <h3>Role:</h3>
                    Full-Stack Developer
                    Description: I am a back-end developer with interests in this and that. Also you can checkout the following links to see my work
                    <br />
                    <h3>Skills: </h3>
                    PostGreSQL | NodeJS | Express | React | CSS
                    <Button style={{ margin: 2 }} variant="contained">
                      Edit Profile
                    </Button>
                  


                  </p>
                </CardContent>
              </Card>
            </Grid>

            <Grid container xs={12} sm={7} lg={9}> 
              <Stack spacing={1} flex="1 1 0">
                <Card>
                  <CardContent>
                    <h1 text-align="center">Your Active Proposals
                    </h1>
                    <Grid container alignItems="stretch">

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal 1</h4>
                        </CardContent>
                        <CardActions>
                          <p>This adds the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent>
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
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <br />
            <br />
            <br />

            <Grid container xs={12} sm={7} lg={9}>
              <Stack spacing={1} flex="1 1 0">
                <Card>
                  <CardContent>
                    <h1>Your Archived Proposals</h1>

                    <Grid container alignItems="stretch">
                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal </h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal </h4>
                        </CardContent>
                        <CardActions>
                          <p>This is the description of this proposal and it is just</p>  </CardActions>
                      </Grid>

                      <Grid item component={Card} xs>
                        <CardContent>
                          <h4>Proposal </h4>
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
