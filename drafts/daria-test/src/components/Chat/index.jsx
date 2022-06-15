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
  const {self, setSelf, setChatPreviews, setProfiles, setActiveChatId, activeChatId, setActiveChatFull} = useContext(DataContext);

  const [newMessage, setNewMessage] = useState()


    //------------------------------HELPER FUNCTIONS-----------------------------


  //function to log out
  const logout = () => {
    const requestString = `/auth/out`
    axios.post(requestString)
    .then((res) => {
      navigate("/")
    })
    .catch(err => console.log(err.message))
  }


  const submitNewMessage = () => {

    //To be sent to: activeChatId
    //TODO: Work here
    console.log(`Submitting message: ${newMessage}`)
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