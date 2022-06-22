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

          <Link to={`${_id}`} style={{ textDecoration: 'none'}}>
          <Typography color="secondary" variant="h4" className={classes.title} style={{marginTop: 0, paddingTop: 0}}>
            {title}
          </Typography>
          </Link>
          <Typography variant="h6">Seeking: {seeking}</Typography>
          <Typography variant="body1" style={{marginTop: 10, marginBottom: 10}}>{shortDescription}</Typography>
        </CardContent>
      </CardActionArea>


      {/* <CardActions>
        <Link to={`${_id}`} style={{ textDecoration: 'none' }}>
        <Button size="small" variant="contained" color="secondary">
          See More Details
        </Button>
      </Link>
      </CardActions> */}

    </Card>
  );
}


///proposals