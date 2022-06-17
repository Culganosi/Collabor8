import React, { useState } from "react"
import { Container, Grid, Item, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import { styled, Paper } from '@mui/material'
// import Background from "./Background";
import "./Dashboard.css"
// import useStyles from '../styles';


export default function Dashboard() {
    const classes = {
        root: {
            flexGrow: 1
        },
        paper: {
            padding: 20,
            textAlign: "center",
            color: "blue"
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const useRef = React.useRef();
    function handleClick() {
        setAnchorEl(useRef.current);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
        <div className={classes.container}>
      <Container max-Width="sm">
        <Typography variant="h2" align="center" color="secondary" gutterBottom>
          My Dashboard
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          View proposals and users for possible collaborations 
        </Typography>
      </Container>
      </div>
            {/* <Background /> */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={2}>
                    <Grid item xs={6}>
                        <Item>
                            <h1>Latest Proposals that are seeking your skills</h1>
                            <Divider />
                            <h3>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                ZapMedical
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                A mobile application where users may
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </h3>
                        </Item>
                        <div className="dash-container">

                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h1>These users may be a great fit for your active proposals</h1>
                            <Divider />

                            <div ref={useRef}>
                                <Button style={{ margin: 100 }} variant="contained" onClick={handleClick}>
                                    Steven, front-end developer
                                </Button>
                                <Popover class="popover"
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center"
                                    }}>
                                    <Typography variant="h6">Steven is an ok guy. He probably can help you with the front-end skills you need. You wil have to talk to him</Typography>
                                </Popover>
                            </div>
                            <div ref={useRef}>
                                <Button style={{ margin: 100 }} variant="contained" onClick={handleClick}>
                                    Jamie, front-end developer
                                </Button>
                                <Popover class="popover"
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center"
                                    }}>
                                    <Typography variant="h6">Jamie seems like a great fit. She is known for her front-end skills so you need her.</Typography>
                                </Popover>
                            </div>
        


                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
