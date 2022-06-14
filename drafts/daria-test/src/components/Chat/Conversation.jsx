import React, {useContext} from 'react'
import "./chatStyle.css"
import {DataContext} from "../../DataContext";
import { useEffect } from 'react';
import axios from 'axios';


function Conversation() {

  const {activeChatId, activeChatFull, setActiveChatFull} = useContext(DataContext);

  //--useEffect -- IF active chat exists?

  useEffect(() => {

    if(activeChatId) {
      axios.get(`/chats/${activeChatId}`)
      .then(activeChatDetails => {
        setActiveChatFull(activeChatDetails)
      })
    }

  }, [])


  return (
    <div className="chat__conversation">
      
      Conversation

      {activeChatId}
      
      
      </div>
  )
}

export default Conversation