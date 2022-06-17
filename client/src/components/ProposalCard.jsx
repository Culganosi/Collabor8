import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import useStyles from "../styles";

export default function ProposalCard() {
  const classes = useStyles();
return (

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
                        Proposal Title
                      </Typography>
                      <Typography>
                        Seeking: Product Developer, UX/UI Designer
                      </Typography>
                      <Typography>!Urgent</Typography>
                      <Typography>
                        I'm making this super cool thing, do you want to make a
                        super cool thing? Make a super cool thing with me.
                        Potato.
                      </Typography>
                      <Typography>Created: 06/06/2022</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="secondary">
                      See More Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
)
}