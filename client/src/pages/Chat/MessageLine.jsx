import React, { useEffect, useState, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";
import Moment from 'react-moment';

import { DataContext } from "./../../DataContext"

export default function MessageLine({ message }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh'
    },
    headBG: {
      backgroundColor: '#e0e0e0'
    },
    borderRight500: {
      borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto'
    }
  });

  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
     background: {paper: '#5fba7d'}
    },
  });

  const classes = useStyles();

  //Pull variable from context
  const { profiles, self } = useContext(DataContext);

  const { author, sentAt, text, type } = message

  //Style self and other differently

  let linePosition = "left"
  if (author == self._id) {
    linePosition = "right"
  }

  let messageLineColor="black"
  let messageLineBGColor="lightgrey"
  if (author == self._id) {
    messageLineColor="white"
    messageLineBGColor="#4A5AB9" //"#303FA0"
  }



    const formattedDate = (<Moment format="MMM DD, hh:mm">{sentAt}</Moment>)
    //If this is the initial message, style it differently

    if (type=="init") {
      return (
        <Grid item xs={12}>
          <ListItemText align={linePosition} style={{textAlign: 'center'}} secondary="~ Connection created ~"></ListItemText>
        </Grid>
      )
    } 
    
    //Otherwise display a normal message

    else {


    return (
    <ListItem key="1">
      <Grid container>
        <Grid item xs={12}>
          <ListItemText align={linePosition}
            primary={
              <Typography variant="h6" theme={theme} style={{ color: messageLineColor, maxWidth: "60%", display: "inline-block", padding: "5px 15px", borderRadius: "10px", textAlign: "left", background: messageLineBGColor}}>
                {text}
              </Typography>
            }>
              </ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText align={linePosition} secondary={formattedDate}></ListItemText>
        </Grid>
      </Grid>
    </ListItem>

    )

    }


}


//<p className="message__sentAt">{sentAt}</p>

