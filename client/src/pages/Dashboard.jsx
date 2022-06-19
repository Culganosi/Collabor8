import React, { useContext, useState, useEffect } from "react";
import { Container, Grid, Item, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper } from '@mui/material'
import "./Dashboard.css"
// import useStyles from '../styles';
import { makeStyles } from "@material-ui/core/styles";
import ProposalCard from "../components/ProposalCard";
import axios from "axios";
import { DataContext } from "./../DataContext";
import UserCard from "../components/UserCard";

const useStyles = makeStyles({

    headercontainer: {
        padding: 30
    },
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
//https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt


export default function Dashboard() {
    const classes = useStyles();

    //FETCH PROPOSALS---------------------------------------
    const { proposals, setProposals } = useContext(DataContext);
    useEffect(() => {
        axios.get("/recommend/proposals").then((res) => {
            setProposals(res.data);
        });
    }, []);

    const listOfProposalCards = proposals.map((proposal) => {
        return (
            <Grid item={proposal} xs={12}>
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
    //FETCH USERS ---------------------------------------
    const { profiles, setProfiles } = useContext(DataContext);

    useEffect(() => {
        axios.get("/recommend/users")
            .then(res => {
                setProfiles(res.data)
                //Now the "profiles" state variables should hold the data (which is an object)
            })

    }, [])

    const listOfUserCards = profiles.map(profile => {
        return (
            <Grid item={profile} xs={12}>
                <UserCard
                    key={profile._id}
                    _id={profile._id}
                    avatar={profile.avatar}
                    shortBio={profile.shortBio}
                    skills={profile.skills}
                    userhandle={profile.userhandle}
                    role={profile.role}
                />
            </Grid>
        )
    })
    //FETCH CAT API ------------------------------------------------
   

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
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Browse through the follwing proposals and users that you might be interested to work with.
                </Typography>

                <Container maxWidth={200}>
                    <Grid container spacing={3}>
                        {/* PROPOSALS COLUMN --------------------------*/}
                        <Grid container item xs={4}  >
                            <Card>
                                <CardContent>
                                    <p>
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
                        {/* USERS COLUMN-------------------------------- */}
                        <Grid container item xs={4} >
                            <Card>
                                <CardContent>
                                    <p>
                                        <br />
                                        <h1>Users to consider for your active proposals:</h1>
                                        <br />
                                        <Container className={classes.cardGrid} maxWidth="xl">
                                            <Grid container spacing={2}>
                                                {listOfUserCards}
                                            </Grid>
                                        </Container>
                                        <Button style={{ margin: 10 }} variant="contained" color="secondary">
                                            Look at more users
                                        </Button>
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* MEMES COLUMN---------------------------------- */}
                        <Grid container item xs={4}  >
                            <Card>
                                <CardContent>
                                    <p>
                                        <br />
                                        <h1>Just cat memes and other memes:</h1>
                                        <br />
                                        <div>
          <button >Get random cat!</button>
        </div>
        
                                        <h3>Look at the kitties: </h3>
                                        <br />
                                        <img src="https://cdn2.thecatapi.com/images/MjA2NjQzMw.jpg" />
                                        
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
