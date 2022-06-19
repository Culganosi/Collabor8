import React, { useContext, useState, useEffect } from "react";
import { Container, Grid, Item, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper } from '@mui/material'
// import Background from "./Background";
import "./Dashboard.css"
// import useStyles from '../styles';
import { makeStyles } from "@material-ui/core/styles";
import ProposalCard from "../components/ProposalCard";
import axios from "axios";
import { DataContext } from "./../DataContext";


const useStyles = makeStyles({
    container: {
        height: "100%", // So that grids 1 & 4 go all the way down
        minHeight: 500, // Give minimum height to a div
        border: "1px solid black",
        fontSize: 30,
        textAlign: "center",
        invisible: "true"

    },
    containerTall: {
        minHeight: 250 // This div has higher minimum height
    }
    // sx={{ width: '25%' }}> sizing to maybe use for the columns
});



export default function Dashboard() {
    // const classes = {
    //     root: {
    //         flexGrow: 1
    //     },
    //     paper: {
    //         padding: 20,
    //         textAlign: "center",
    //         color: "blue"
    //     }
    // }
    const classes = useStyles();

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const useRef = React.useRef();
    // function handleClick() {
    //     setAnchorEl(useRef.current);
    // }

    // function handleClose() {
    //     setAnchorEl(null);
    // }

    // const open = Boolean(anchorEl);
    // const id = open ? "simple-popover" : undefined;

    const { proposals, setProposals } = useContext(DataContext);
    useEffect(() => {
      axios.get("/proposals").then((res) => {
        setProposals(res.data);
      });
    }, []);
  
    const listOfProposalCards = Object.values(proposals).map((proposal) => {
      return (
        <Grid item={proposal} xs={12} sm={6} md={4}>
          <ProposalCard
            key={proposal._id}
            _id={proposal._id}
            author={proposal.author}
            title={proposal.title}
            shortDescription={proposal.shortDescription}
            image={proposal.image}
            seeking={proposal.seeking}
          />
        </Grid>
      );
    });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <div className={classes.headercontainer}>
                <Container max-Width="sm">
                    <Typography variant="h2" align="center" color="secondary" gutterBottom>
                        Dashboard
                    </Typography>
                </Container>
            </div>

            <Container maxWidth={200}>
                <Grid container spacing={3}>
                    {/* PROPOSALS COLUMN */}

                    <Grid container item xs={4}  >
                        <Card>
                            <CardContent>
                                <p>
                                    <div>
                                    </div>
                                    <br />
                                    <h1>Latest proposals that are seeking your skills:</h1>
                                    <br />
        <Container className={classes.cardMedia} maxWidth="xl">
          <Grid container spacing={1}>
            {listOfProposalCards}
          </Grid>
        </Container>
                                          <Button style={{ margin: 10 }} variant="contained" color="secondary">
                                        Look at more proposals
                                    </Button>
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* USERS COLUMN */}

                    <Grid container item xs={4} >
                        <Card>
                            <CardContent>


                                <p>
                                    <div>
                                    </div>
                                    <br />
                                    <h1>Users to consider for your active proposals:</h1>
                                    <br />
                                    <br />
                                    <Button style={{ margin: 10 }} variant="contained" color="secondary">
                                        Look at more users
                                    </Button>
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* MEMES COLUMN */}

                    <Grid container item xs={4}  >
                        <Card>
                            <CardContent>


                                <p>
                                    <div>
                                    </div>
                                    <br />
                                    <h1>Just cat memes and other memes:</h1>
                                    <br />
                                    <h3>Look at the kitties: </h3>
                                    <br />
                                    <img src="https://cdn2.thecatapi.com/images/MjA2NjQzMw.jpg" />
                                    <Button style={{ margin: 10 }} variant="contained">
                                        Edit Profile
                                    </Button>
                                </p>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
