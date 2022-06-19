import React, {useContext} from 'react'
import "./chatStyle.css"
import {DataContext} from "../../DataContext";
import { useEffect } from 'react';


import MessageLine from "./MessageLine"


function Conversation() {

  //Variables
  const {activeChatFull} = useContext(DataContext);

  //Create message list if exists
  let messageList = [];
  if (activeChatFull.messages){
    messageList = activeChatFull.messages.map(message => {
      return <MessageLine message={message} key={message._id}/>
    })
  }


  ///-------------------

  
  //-------------------


  return (
    <div className="chat__conversation">
      
      {messageList}
      
      </div>
  )
}

export default Conversation