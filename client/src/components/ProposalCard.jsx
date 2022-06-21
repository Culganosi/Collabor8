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
import {Link} from "react-router-dom"
import OthersProp from "../pages/OthersProp";

export default function ProposalCard({
  _id,
  author,
  title,
  shortDescription,
  image,
  seeking,
  createdAt,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia} image={image} title="Title" />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="h6">{seeking}</Typography>
          <Typography variant="body2">{shortDescription}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Link to={`${_id}`} style={{ textDecoration: 'none' }}>
        <Button size="small" variant="contained" color="secondary">
          See More Details
        </Button>
        </Link>

        
      </CardActions>
    </Card>
  );
}


///proposals