import React from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BrowseProp() {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography
            variant="h2"
            align="center"
            color="secondary"
            gutterBottom
          >
            Browse Users
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Looking for somebody to work with on your project? You're in the
            right place. Click on a profile below to see a more detailed view.
          </Typography>
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="secondary">
                  Search Users
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary">
                  Or don't
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Box border={2} padding={5} margin={2} borderRadius={16}>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        User #1
                      </Typography>
                      <Typography>
                        Junior Web Developer
                      </Typography>
                      <Typography>
Short Bio: I'm just a human being looking for another human being to work on a project that will benefit other human beings.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="secondary">
                      More Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
