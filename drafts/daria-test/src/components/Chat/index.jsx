import React, {Fragment, useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {DataContext} from "./../../DataContext"


//--Import subcomponents

import Conversation from './Conversation';
import Sidebar from './Sidebar';

import "./chatStyle.css"


//----

function Chat() {

  //Variables
  const navigate = useNavigate(); 
  const {self, setSelf, setChatPreviews, setProfiles, setActiveChatId, activeChatId, activeChatFull, setActiveChatFull, conn} = useContext(DataContext);

  const [newMessage, setNewMessage] = useState()

  //------------------------------HELPER FUNCTIONS-----------------------------

  //function to log out
  const logout = () => {
    const requestString = `/auth/out`
    axios.post(requestString)
    .then((res) => {
      setSelf({})
      navigate("/")
    })
    .catch(err => console.log(err.message))
  }


  //TODO: This is a conversation with an existing chat!
  const submitNewMessage = () => {

    //Send new message to the socket
    const messageToSocket = {
      text: newMessage, 
      chatId: activeChatId,
      author: self._id,
      recipientId: activeChatFull.participants.filter(id => id != self._id)[0],
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

    //Send message to database -> it will persist on refresh
    axios.patch(`/chats/${activeChatId}`, {text: newMessage})

    //Refresh input field
    setNewMessage("")

  }


  
  //------------------------------REFRESH-----------------------------

  useEffect(() => {

    async function refreshData () {

      //Get most up to date info about users (e.g. if someone changed something)
      //TODO: We dno't need this on this page if people can not change userhandles...
      const usersRes = await axios.get("/users");
      setProfiles(usersRes.data);

      //Make sure the Self is correct on refresh
      if (Object.keys(self).length === 0) {
        const selfUserRes = await axios.get('/users/self')
        setSelf(selfUserRes.data);
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

    }

    refreshData();

  }, [])


  useEffect(() => {

    async function refreshConvo () {
      if(activeChatId) {
        const chatFullRes = await axios.get(`/chats/${activeChatId}`)
        setActiveChatFull(chatFullRes.data)
      }
    }

    refreshConvo()

  }, [activeChatId])

    

  //------------------------------INCOMING--------------------------

  const processIncomingMessage = (data) => {
    const {text, chatId, recipientId, author, sentAt} = data;

    //If you're running the app but not signed in yet, don't process the message by socket
    if (Object.keys(self).length === 0) return;

    //Ignore the message if it's not for you
    if (recipientId !== self._id) return;

    //---If currently in active chat, post to it
    if (chatId == activeChatId) {
      console.log("Trying to push to local")
      const messageToLocal = {author, text, sentAt}
      // console.log(messageToLocal)
      // console.log(activeChatFull)
      setActiveChatFull(prev => {
        const newMessages = [...prev.messages, messageToLocal]
        const newChat = {...prev, messages: newMessages}
        return newChat;
      })
      //return;
      // console.log(activeChatFull)
    }

   return;
    //--

    //console.log(text);
  
  }


  useEffect(() => {
    
    if (conn) {

      //Receive from server
      conn.on('INITIAL_CONNECTION', data => {
        console.log("DATA HAS COME IN FROM THE SERVER!");
        console.log(data);
      })

      conn.on('receiveMessage', data => {
        processIncomingMessage(data);
      })


    }
  }, [conn]) //This was [conn]




  //------------------------------RENDER-----------------------------


  return (

    <Fragment>

        <h2>Chat</h2>

        <p>Your userhandle is: <b><big>{self.userhandle}</big></b>, your ID is <big>{self._id}</big> </p>

        <button onClick={() => logout()}> LOGOUT </button>


        <div className="chat">

          <Sidebar />
  
          <div className="chat__right">

            <Conversation />

            <input 
              type="text"
              value={newMessage}
              onChange={(event) => setNewMessage(event.target.value)}
            />

            <button onClick={() => submitNewMessage()}>Send Message</button>

          </div>

        </div>


        
    </Fragment>

  )
}

export default Chat