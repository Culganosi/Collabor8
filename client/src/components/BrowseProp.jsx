import React from 'react'
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
import useStyles from '../styles';

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
              Browse Proposals
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Please browse our list of active proposals and choose one that
              best suits your needs.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Search Proposals
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
                      Proposal #1
                    </Typography>
                    <Typography>
                      Check out the description of this proposal
                    </Typography>
                    <Typography>
                      We got all kinds of shyt
                      I want to
                      Make this thing
                      longer than it already
                      is so let
                      this got
                      We got all kinds of shyt
                      I want to
                      Make this thing
                      longer than it already
                      is so let
                      this got

                    </Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="secondary">
                      Detailed View
                    </Button>
                    <Button size="small" color="secondary">
                      Message
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
      </main>
      
  )
}
