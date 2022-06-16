import React, {useContext} from 'react'
import "./chatStyle.css"
import {DataContext} from "../../DataContext";
import { useEffect } from 'react';
import axios from 'axios';

import MessageLine from "./MessageLine"




function Conversation() {

  //Variables

  const {activeChatId, activeChatFull, setActiveChatFull} = useContext(DataContext);

  //Create message list if exists
  let messageList = [];
  if (activeChatFull.messages){
    messageList = activeChatFull.messages.map(message => {
      return <MessageLine message={message} key={message._id}/>
    })
  }


  useEffect(() => {

  })


  ///-------------------

  
  //-------------------


  return (
    <div className="chat__conversation">
      
      {messageList}
      
      </div>
  )
}

export default Conversation