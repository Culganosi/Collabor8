import React, {Fragment, useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {DataContext} from "./../../DataContext"
import socketIoClient from 'socket.io-client';

//--Import subcomponents

import Conversation from './Conversation';
import Sidebar from './Sidebar';

import "./chatStyle.css"


//----

function Chat() {

  //Variables
  const navigate = useNavigate(); 
  const {self, setSelf, chatPreviews, setChatPreviews, setProfiles, setActiveChatId, activeChatId, activeChatFull, setActiveChatFull, conn, setConn} = useContext(DataContext);

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

    if (!newMessage) return;

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
    //TODO: uncomment
    axios.patch(`/chats/${activeChatId}`, {text: newMessage})

    //Refresh input field
    setNewMessage("")

  }


  
  //------------------------------REFRESH-----------------------------

  useEffect(() => {

    async function refreshData () {

      //Get most up to date info about users (e.g. if someone changed something)
      //TODO: We dno't need this on this page if people can not change userhandles... (meaning it would go in App.js?)
      const usersRes = await axios.get("/users");
      setProfiles(usersRes.data);

      //Make sure the Self is correct on refresh
      const selfUserRes = await axios.get('/users/self')
      setSelf(selfUserRes.data);


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

      //TODO: -----

      // console.log("CONDITIONS")
      // console.log(chatPrevRes.data.length)
      // console.log(activeChatId)
      // if (chatPrevRes.data.length > 0 && !activeChatId){
      //   console.log("Meets condition")
      //   setActiveChatId(chatPrevRes.data[0]._id)
      // }



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

    



  //-----------------------WEBSOCKET STUFF------------------

  //Set up connection
  useEffect(() => {
    const connection = socketIoClient('http://localhost:3001');
    setConn(connection);
  },[])


  //Send the ID to the socket server to make it relate sockedID <---> userId
  useEffect(() => {
    console.log(`ID IS NOW: ${self?._id}`)

    if (conn && self?._id) {
      conn.emit('sendUserId', self._id)
    }

  }, [self])


  //All the other listeners
  useEffect(() => {
    if(conn) {
      conn.on('receiveMessage', data => {
        console.log(`Received message: ${data.text}`)
        console.log(data);

        const {sentAt, text, author, chatId} = data;
        const messageToLocal = {sentAt, author, text}

        console.log("Active chat: " + activeChatId)
        console.log("Intended chat: " + chatId)

        //TODO: This has bugs, code runs whichever room you seem to be in-+

        if (activeChatId === chatId) {
          setActiveChatFull(prev => {
            console.log("I'm inside this")
            const newMessages = [...prev.messages, messageToLocal]
            const newChat = {...prev, messages: newMessages}
            return newChat;
          })
        }

        console.log(chatPreviews)

        //TODO: Update preview when message arrives
        // setChatPreviews(prev => {

        // })

      });
    }

  }, [conn])


  //FOR TESTING
  useEffect(() => {
    console.log(`Active chat is now ==> ${activeChatId}`)
  }, [activeChatId])

  //------------------------------RENDER CHAT PAGE COMPONENT -----------------------------


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