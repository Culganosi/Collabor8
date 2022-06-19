import React, { useEffect, useState, useContext } from 'react';
import {useNavigate} from "react-router-dom"
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
import Sidebar from "./Sidebar";
import Conversation from "./Conversation";


import {DataContext} from "./../../DataContext"


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

const Chat = () => {

  const navigate = useNavigate()

  const {self, setSelf, setChatPreviews, setProfiles, setActiveChatId, activeChatId, activeChatFull, setActiveChatFull} = useContext(DataContext);
 
  const [newMessage, setNewMessage] = useState()

  const [conn, setConn] = useState(null)


  ///////------------------------------------ REFRESH USEEFFECTS

    //Refresh the needed data
    useEffect(() => {

      async function refreshData () {
  
        //Get most up to date info about users (e.g. if someone changed something)
        //TODO: We dno't need this on this page if people can not change userhandles... (meaning it would go in App.js?)
        const usersRes = await axios.get("/users");
        setProfiles(usersRes.data);
  
        //Make sure the Self is correct on refresh
        const selfUserRes = await axios.get('/users/self')
        setSelf(selfUserRes.data);

        if(Object.keys(selfUserRes.data).length==0){
            navigate("/")
        }
          
  
        const chatPrevRes = await axios.get(`/chats/self/chat-previews`)
        setChatPreviews(chatPrevRes.data);
  
        let defaultActiveChatId=""
  
        if (chatPrevRes.data.length > 0) {
          defaultActiveChatId = chatPrevRes.data[0]._id
        } else {
          setActiveChatFull([])
        }
  
        setActiveChatId(defaultActiveChatId)
  
        //If we haven't kept the active chat in local yet, choose the first one

      }
  
      refreshData();
  
    }, [])
  




  ///////------------------------------------
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
         </Grid> 
        <Grid container component={Paper} className={classes.chatSection}>

            <Sidebar />

            <Grid item xs={9}>

                <Conversation />
                
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Box>
      </>
  );
}

export default Chat;