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
import socketIoClient from 'socket.io-client';

//Import compoentns
import Sidebar from "./Sidebar";
import Conversation from "./Conversation";

//Import context
import {DataContext} from "./../../DataContext"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '90vh'
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
 
  const [newMessage, setNewMessage] = useState("")

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

        //If we don't know which chat to go to
        if (activeChatId=="") {

            if (chatPrevRes.data.length > 0) {
              //If options exist, choose the first one
              setActiveChatId(chatPrevRes.data[0]._id)
            } else {
              setActiveChatFull([])
            }
        }
  
        //If we haven't kept the active chat in local yet, choose the first one

      }
  
      refreshData();
  
    }, [])



      //Once have the ID of the chat to display, get the entire chat history from database
    useEffect(() => {
    async function refreshConvo () {
      if(activeChatId) {
        const chatFullRes = await axios.get(`/chats/${activeChatId}`)
        setActiveChatFull(chatFullRes.data)
      }
    }
    refreshConvo()

  }, [activeChatId])

  

  ///////---------------------HELPER FUNCTIONS


  const submitNewMessage = () => {

    if (!newMessage) return;

    //Send new message to the socket
    
    const recipientId = activeChatFull.participants.filter(id => id != self._id)[0]

    const messageToSocket = {
      text: newMessage, 
      chatId: activeChatId,
      author: self._id,
      recipientId,
      sentAt: Date.now()
    }
    
    conn.emit("newMessage", messageToSocket);

    //Save message in local storage -> it will display in author's chat
    const messageToLocal = {author: self._id, text: newMessage, sentAt: new Date(Date.now()).toString()}

    setActiveChatFull(prev => {
      const newMessages = [...prev.messages, messageToLocal]
      const newChat = {...prev, messages: newMessages}
      return newChat;
    })

    //Also update in the preview panels
    setChatPreviews(prev => {

      const indexOfNeededPreview = prev.findIndex(preview => preview.partner == recipientId)

      const newPreview = {
        partner: recipientId,
        _id: prev[indexOfNeededPreview]._id,
        lastMessage: {author: self._id, sentAt: Date.now(), text: newMessage}
      }

      const newPreviews = [...prev]
      newPreviews.splice(indexOfNeededPreview, 1)
      newPreviews.unshift(newPreview)
      return newPreviews;
    })


    //Send message to database -> it will persist on refresh
    axios.patch(`/chats/${activeChatId}`, {text: newMessage})

    //Refresh input field
    setNewMessage("")

  }

  //-----------------------WEBSOCKET STUFF------------------

  //Set up connection
  useEffect(() => {
    const connection = socketIoClient('https://collabor8-api.herokuapp.com/');
    setConn(connection);
  },[])

  //Send the ID to the socket server to make it relate sockedID <---> userId
  useEffect(() => {
    if (conn && self?._id) {
      conn.emit('sendUserId', self._id)
    }

  }, [self])

  //All the other listeners
  useEffect(() => {
    if(conn) {
      conn.on('receiveMessage', data => {
        
        //console.log(`Received message: ${data.text}`)

        const {sentAt, text, author, chatId} = data;
        const messageToLocal = {sentAt, author, text}


        //TODO: This has bugs, code runs whichever room you seem to be in-+

        // console.log(`Active: ${activeChatId}`)
        // console.log(`Intended: ${chatId}`)

       //if (activeChatId == chatId) {
          setActiveChatFull(prev => {
            const newMessages = [...prev.messages, messageToLocal]
            const newChat = {...prev, messages: newMessages}

            // console.log(messageToLocal)
            // console.log(newChat)

            return newChat;
          })
        //}


        setChatPreviews(prev => {

          const indexOfNeededPreview = prev.findIndex(preview => preview.partner == author)

          const newPreview = {
            partner: author,
            _id: prev[indexOfNeededPreview]._id,
            lastMessage: {author, sentAt, text}
          }

          const newPreviews = [...prev]
          newPreviews.splice(indexOfNeededPreview, 1)
          newPreviews.unshift(newPreview)
          return newPreviews;
        })

      });
    }

  }, [conn])










  ////-------------------- RENDER

  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        {/* <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
         </Grid>  */}
        <Grid container component={Paper} className={classes.chatSection}>

            <Sidebar />

            <Grid item xs={9}>
                <Conversation />
                
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth value={newMessage} 
                        onChange={(event) => setNewMessage(event.target.value)} 
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') {
                            submitNewMessage()
                            setNewMessage("")
                          }
                        }}
                        />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon onClick={() => {
                          submitNewMessage()
                          setNewMessage("")
                        }} /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Box>
      </>
  );
}

export default Chat;