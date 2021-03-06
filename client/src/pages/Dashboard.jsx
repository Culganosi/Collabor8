import React, { useContext, useState, useEffect } from "react";
import { Container, Grid, Item, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
// import useStyles from '../styles';
import { makeStyles } from "@material-ui/core/styles";
import ProposalCardDashboard from "../components/ProposalCardDashboard";
import axios from "axios";
import { DataContext } from "./../DataContext";
import UserCard from "../components/UserCard";
import Cats from "../components/Cats";
import Jokes from "../components/Jokes";

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
        invisible: "true",
        alignItems: "stretch"

    },
    containerTall: {
        minHeight: 250 // This div has higher minimum height
    }
    // sx={{ width: '25%' }}> sizing to maybe use for the columns
});
//https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt


export default function Dashboard() {
    const classes = useStyles();

    //FETCH PROPOSALS--------------------------------------------------
    const [proposals, setProposals] = useState([])
    const [profiles, setProfiles] = useState([])

        //Scroll to top when entering page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    useEffect(() => {
        axios.get("/api/recommend/proposals").then((res) => {
            setProposals(res.data);
        });
    }, []);

    let listOfProposalCards = []
    if (proposals.length > 0) {
        listOfProposalCards = proposals.map((proposal) => {
            return (
                <Grid item={proposal} xs={12}>
                    <ProposalCardDashboard
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
    }
    //FETCH USERS -------------------------------------------------------
    useEffect(() => {
        axios.get("/api/recommend/users")
            .then(res => {
                setProfiles(res.data)
                //Now the "profiles" state variables should hold the data (which is an object)
            })

    }, [])

    const listOfUserCards = profiles.map(profile => {
        return (
            <Grid item={profile} xs={12} >
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
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Your own personalized space.
                    </Typography>
                </Container>
            </div>
            <div >
                <Box sx={{ flexGrow: 1 }} > 
              {/* sx={{  alignContent: 'stretch'}} */}
                    {/* <Grid container spacing={1} columns={16} > */}
                    <Grid container direction='row' spacing={2} alignItems="stretch">
                        <Grid item xs={4} style={{height:'100%', width:'50%', minHeight: "2000px"}}>
                            <Item>
                                {/* PROPOSALS COLUMN ---------------------------------------*/}
                                <Card style={{minHeight: "1600px"}}>
                                    <CardContent>
                                        <p>
                                            <br />
                                            <h1 className="dashTitles">Latest proposals that are seeking a {proposals.length>0 && proposals[0].seeking[0]}</h1>
                                            <Divider />
                                            <br />
                                            <Container className={classes.cardMedia} maxWidth="xl">
                                                <Grid container spacing={1}>
                                                    {listOfProposalCards}
                                                </Grid>
                                            </Container>
                                            <Link to="/Proposals" style={{ textDecoration: 'none' }}>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Button style={{ margin: 17 }} variant="outlined" color="secondary" >
                                                        Look at more proposals
                                                    </Button>
                                                </div>
                                            </Link>
                                        </p>
                                    </CardContent>
                                </Card>
                            </Item> 
                        </Grid>
                        <Grid item xs={4} style={{height:'100%', width:'50%'}}>
                            <Item>
                                {/* USERS COLUMN-------------------------------------------*/}
                                <Card style={{minHeight: "1600px"}}>
                                    <CardContent>
                                        <p>
                                            <br />
                                            {profiles.length > 0 ? <> <h1 className="dashTitles" >Users who might be a great fit for your active proposals</h1> <Divider />  </>:
                                                <>
                                                    <h1 className="dashTitles" >Publish your first proposal to get recommendations for collaborators</h1>
                                                    <Link to="/Create-Proposal" style={{ textDecoration: 'none' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Button style={{ margin: 17 }} variant="contained" color="secondary">
                                                                Publish a proposal
                                                            </Button>
                                                        </div>
                                                    </Link>
                                                </>
                                            }
                                            <br />
                                            <Container className={classes.cardGrid} maxWidth="xl">
                                                <Grid container spacing={2}>
                                                    {listOfUserCards}
                                                </Grid>
                                            </Container>
                                            {profiles.length > 0 ?
                                                <Link to="/People" style={{ textDecoration: 'none' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Button style={{ margin: 17 }} variant="outlined" color="secondary">
                                                            Look at more users
                                                        </Button>
                                                    </div>
                                                </Link>
                                                : <></>}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Item> 
                        </Grid>
                        <Grid item xs={4} style={{height:'100%', width:'50%'}}>
                            <Item>
                                {/* MEMES COLUMN------------------------------------------ */}
                                <Card style={{minHeight: "1600px"}}>
                                    <CardContent>
                                        <p>
                                            <br />
                                            <h1 className="dashTitles">Relaxing corner</h1>
                                            <Divider />
                                            <br />
                                            <Cats />
                                            <br />
                                            <Jokes />
                                        </p>
                                    </CardContent>
                                </Card>
                            </Item> 
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
