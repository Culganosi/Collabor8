import React, { useState } from "react"
import { Container, Grid, Item, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper } from '@mui/material'
// import Background from "./Background";
import "./Dashboard.css"
// import useStyles from '../styles';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
    container: {
        height: "100%", // So that grids 1 & 4 go all the way down
        minHeight: 150, // Give minimum height to a div
        border: "1px solid black",
        fontSize: 30,
        textAlign: "center",
        invisible: "true"

    },
    containerTall: {
        minHeight: 250 // This div has higher minimum height
    }
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

            
             <Container maxWidth={1000}>
                <Grid container spacing={3}>
                    <Grid container item xs={4}  >
                        <div className="left">
                        <Card>
                            <CardContent>
                                <p>
                                    <div>
                                    </div>
                                    <br />
                                    <h1>Latest proposals that are seeking your skills:</h1>
                                    <br />
                                    <h3>Skills: </h3>
                                    <br />
                                    <Button style={{ margin: 10 }} variant="contained">
                                        Edit Profile
                                    </Button>
                                </p>
                            </CardContent>
                        </Card>
                        </div>
                    </Grid>
                    <Grid container item xs={4} >
                        <div className="middle">
                        <Card>
                            <CardContent>


                                <p>
                                    <div>
                                    </div>
                                    <br />
                                    <h1>The latest proposals that are seeking your skills that may interest you:</h1>
                                    <br />
                                    <h3>Skills: </h3>
                                    <br />
                                    <Button style={{ margin: 10 }} variant="contained">
                                        Edit Profile
                                    </Button>
                                </p>
                            </CardContent>
                        </Card>
                        </div>
                    </Grid>
                    <Grid container item xs={4}  >
                        <div className="right">
                        <Card>
                            <CardContent>


                                <p>
                                    <div>
                                    </div>
                                    <br />
                                    <h1>The latest proposals that are seeking your skills that may interest you:</h1>
                                    <br />
                                    <h3>Skills: </h3>
                                    <br />
                                    <Button style={{ margin: 10 }} variant="contained">
                                        Edit Profile
                                    </Button>
                                </p>
                            </CardContent>
                        </Card>
                        </div>

                    </Grid>
                </Grid>
            </Container>
            {/* <Grid container direction="row" spacing={2}>
      <Grid item xs>
        <div className="dash-container">1</div>
      </Grid>
      <Grid item container direction="column" xs spacing={2}>
        <Grid item xs>
          <div className="dash-container">2</div>
        </Grid>
        <Grid item xs>
          <div className={clsx(classes.dash-container, classes.containerTall)}>
            3
          </div>
        </Grid>
      </Grid>
      <Grid item xs>
        <div className={classes.container}>4</div>
      </Grid>
    </Grid> */}
            


        </>
    )
}
