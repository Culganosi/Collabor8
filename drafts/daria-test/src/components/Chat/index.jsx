import React, {Fragment, useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {DataContext} from "./../../DataContext"

//Custom hooks

//--Import subcomponents

import Conversation from './Conversation';
import Sidebar from './Sidebar';

import "./chatStyle.css"


//----

function Chat() {

  //Import stuff within the component
  const navigate = useNavigate(); 
  const {self, setSelf, setChatPreviews, setProfiles, setActiveChatId, activeChatId, setActiveChatFull} = useContext(DataContext);


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


  //------------------------------REFRESH-----------------------------

  useEffect(() => {

    async function refreshData () {

      const usersRes = await axios.get("/users");
      setProfiles(usersRes.data);

      //Make sure the Self is correct again
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

            <input type="text"/>

            <button>Send Message</button>

          </div>

        </div>


        
    </Fragment>

  )
}

export default Chat