import React from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  Container,
  Grid,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Divider,
} from "@material-ui/core";
import useStyles from "../styles";

export default function ProposalCard(
  _id,
  author,
  title,
  shortDescription,
  image,
  seeking
) {
  const classes = useStyles();

  return (
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
          <Typography>Seeking: Product Developer, UX/UI Designer</Typography>
          <Typography>!Urgent</Typography>
          <Typography>
            I'm making this super cool thing, do you want to make a super cool
            thing? Make a super cool thing with me. Potato.
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
  );
}
