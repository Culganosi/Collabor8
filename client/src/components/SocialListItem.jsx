import * as React from "react";
import useStyles from "../styles";
import { Typography, Box, TextField, Grid, Container } from "@material-ui/core";

function SocialListItem({setSocialMedia}) {

  const classes = useStyles();

  return (
    <Container style={{padding: 0}}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography className={classes.title} variant="h5" color="secondary">
            Github
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter URL"
              variant="outlined"
              color="secondary"
              onChange={(event) => {
                setSocialMedia(prev => {return {...prev, GitHub: event.target.value}})
              }}
            />
          </Box>
        </Grid>

        <Grid item>
          <Typography className={classes.title} variant="h5" color="secondary">
            LinkedIn
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter URL"
              variant="outlined"
              color="secondary"
              onChange={(event) => {
                setSocialMedia(prev => {return {...prev, LinkedIn: event.target.value}})
              }}
            />
          </Box>
        </Grid>

        <Grid container spacing={2} style={{paddingLeft: '7px'}}>
          <Grid item>
            <Typography
              className={classes.title}
              variant="h5"
              color="secondary"
            >
              Portfolio
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Enter URL"
                variant="outlined"
                color="secondary"
                onChange={(event) => {
                  setSocialMedia(prev => {return {...prev, Portfolio: event.target.value}})
                }}
              />
            </Box>
          </Grid>

          <Grid item>
            <Typography
              className={classes.title}
              variant="h5"
              color="secondary"
            >
              Twitter
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Enter URL"
                variant="outlined"
                color="secondary"
                onChange={(event) => {
                  setSocialMedia(prev => {return {...prev, Twitter: event.target.value}})
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SocialListItem;
