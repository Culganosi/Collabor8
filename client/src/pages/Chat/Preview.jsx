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

import TimeAgo from 'timeago-react';


// import classNames from "classnames";


import {DataContext} from "./../../DataContext"

export default function Preview({previewData}) {
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


    //Full variables from context
    const {profiles, setActiveChatId, activeChatId} = useContext(DataContext);

    //Helper variables
    //const previewClass = classNames('chat-preview', { "active": previewData._id==activeChatId});
    const partnerId = previewData.partner;

    let previewStyle = {}
    if (previewData._id==activeChatId) {
      previewStyle = {background: "#f5e0df"}
    }
    
    //const latestMessage = previewData.lastMessage.text.substring(0, 15) + "..."

    const timeAgoMessage = (
      <TimeAgo
        datetime={previewData.lastMessage.sentAt}
        locale='en'
      />
    )

  return (
    <ListItem button style={previewStyle} key="test3" onClick={() => setActiveChatId(previewData._id)}>
      <ListItemIcon>
      <Avatar alt="test3"  src={`${profiles[partnerId].avatar}`} />
      </ListItemIcon>
      <ListItemText primary={profiles[partnerId].userhandle}>{profiles[partnerId].userhandle}</ListItemText>
      
      <ListItemText style={{textAlign: "right", color: "lightgrey", whiteSpace: "nowrap"}} primary={timeAgoMessage}></ListItemText>
    </ListItem>  
)
}


