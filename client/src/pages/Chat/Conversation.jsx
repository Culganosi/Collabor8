import React, {useContext} from 'react';
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
// import Button from "@material-ui/core"

import {DataContext} from "./../../DataContext"

import MessageLine from "./MessageLine"


export default function Conversation() {
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

  const classes = useStyles();

    //Variables
    const {activeChatFull} = useContext(DataContext);

    //Create message list if exists
    let messageList = [];
    if (activeChatFull.messages){
        messageList = activeChatFull.messages.map(message => {
        return <MessageLine message={message} key={message._id} />
        })
    }


  return (
    <List className={classes.messageArea} >

     {messageList}

    </List>
  )
}

