import React, {Fragment, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {DataContext} from "../../DataContext";

//--Import subcomponents

import Conversation from './Conversation';
import Sidebar from './Sidebar';

import "./chatStyle.css"


//----

function Chat() {

  const navigate = useNavigate(); 

  const {self, setSelf} = useContext(DataContext);

  const logout = () => {

    const requestString = `/auth/out`

    axios.post(requestString)
    .then((res) => {
      console.log(res)
      navigate("/")
    })
    .catch(err => console.log(err.message))
  }

  


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