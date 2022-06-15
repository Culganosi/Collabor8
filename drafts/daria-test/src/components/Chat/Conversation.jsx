import React, {useContext} from 'react'
import "./chatStyle.css"
import {DataContext} from "../../DataContext";
import { useEffect } from 'react';
import axios from 'axios';


function Conversation() {

  const {activeChatId, activeChatFull, setActiveChatFull} = useContext(DataContext);

  //--useEffect -- IF active chat exists?

  // useEffect(() => {

  //     axios.get(`/chats/${activeChatId}`)
  //     .then(res => {

  //       console.log("RESPONSE")
  //       console.log(res)

  //       setActiveChatFull(res.data)
  //     })
  //     .catch(err => console.log(err))

  // }, [])

  // console.log("Active chat full");
  // console.log(activeChatFull);
  // console.log("Active chat ID");
  // console.log(activeChatId);


  return (
    <div className="chat__conversation">
      
      Conversation

      {/* {activeChatFull && activeChatFull.messages.map(message => {

        <p>message.text</p>


      })} */}
      
      
      </div>
  )
}

export default Conversation