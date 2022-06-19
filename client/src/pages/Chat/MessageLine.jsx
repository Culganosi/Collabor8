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

  const { author, sentAt, text } = message

  let linePosition = "left"
  if (author == self._id) {
    linePosition = "right"
  }

  return (
    <ListItem key="1">
      <Grid container>
        <Grid item xs={12}>
          <ListItemText align={linePosition}
            primary={
              <Typography variant="h6" theme={theme} style={{ color: "black" }}>
                {text}
              </Typography>
            }>
              </ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText align={linePosition} secondary={sentAt}></ListItemText>
        </Grid>
      </Grid>

    </ListItem>
  )
}


//<p className="message__sentAt">{sentAt}</p>

