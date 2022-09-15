import * as React from "react";
import useStyles from "../styles";
import { Typography, Box, TextField, Grid, Container } from "@material-ui/core";

function SocialListItem({ setSocialMedia, socialMedia, socialMediaOptions }) {
  const classes = useStyles();

  return (
    <Container style={{ padding: 0 }}>
      <Grid container spacing={2}>
        {socialMediaOptions.map((socialMediaName) => {
          return (
            <Grid item>
              <Typography
                className={classes.title}
                variant="h5"
                color="secondary"
              >
                {socialMediaName}
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label={socialMedia[socialMediaName] ? "" : "Enter URL"}
                  variant="outlined"
                  color="secondary"
                  value={socialMedia[socialMediaName]}
                  onChange={(event) => {
                    setSocialMedia((prev) => {
                      return {
                        ...prev,
                        [socialMediaName]: event.target.value,
                      };
                    });
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default SocialListItem;
