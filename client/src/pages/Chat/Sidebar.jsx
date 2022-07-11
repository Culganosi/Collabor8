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


import {DataContext} from "./../../DataContext"

import Preview from "./Preview"

export default function Sidebar() {
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


  const {chatPreviews} = useContext(DataContext);
  

  return (

//     <div className="chat__sidebar">
//     {chatPreviews.map(preview => (<Preview previewData={preview} key={preview._id}/>))}
//   </div>


    <Grid item xs={3} className={classes.borderRight500}>
      <List style={{maxHeight: 500, overflow: 'auto'}}>

      {chatPreviews.map(preview => (<Preview previewData={preview} key={preview._id}/>))}

      </List>
    </Grid>
  )
}

