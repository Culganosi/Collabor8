import React, {useContext} from 'react'
import "./chatStyle.css"
import {DataContext} from "../../DataContext";
import { useEffect } from 'react';
import axios from 'axios';

import MessageLine from "./MessageLine"


function Conversation() {

  const {activeChatId, activeChatFull, setActiveChatFull} = useContext(DataContext);

  let messageList = [];

  if (activeChatFull.messages){
    messageList = activeChatFull.messages.map(message => {
      return <MessageLine message={message} key={message._id}/>
    })
  }


  return (
    <div className="chat__conversation">
      
      {messageList}
      
      </div>
  )
}

export default Conversation