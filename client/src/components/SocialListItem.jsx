import * as React from "react";
import useStyles from "../styles";
import { Typography, Box, TextField, Grid, Container } from "@material-ui/core";

function SocialListItem() {
  const classes = useStyles();
  const [socialMedia, setSocialMedia] = React.useState({
    Portfolio: "htto://google.com",
    GitHub: "http://GitHub.com",
  });

  return (
    <Container style={{padding: 0}}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography className={classes.title} variant="h6" color="secondary">
            Github URL
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter URL"
              variant="outlined"
              color="secondary"
              onChange={setSocialMedia}
            />
          </Box>
        </Grid>

        <Grid item>
          <Typography className={classes.title} variant="h6" color="secondary">
            LinkedIn URL
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Enter URL"
              variant="outlined"
              color="secondary"
              onChange={setSocialMedia}
            />
          </Box>
        </Grid>

        <Grid container spacing={2} style={{paddingLeft: '7px'}}>
          <Grid item>
            <Typography
              className={classes.title}
              variant="h6"
              color="secondary"
            >
              Portfolio URL
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Enter URL"
                variant="outlined"
                color="secondary"
                onChange={setSocialMedia}
              />
            </Box>
          </Grid>

          <Grid item>
            <Typography
              className={classes.title}
              variant="h6"
              color="secondary"
            >
              Twitter URL
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Enter URL"
                variant="outlined"
                color="secondary"
                onChange={setSocialMedia}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SocialListItem;
