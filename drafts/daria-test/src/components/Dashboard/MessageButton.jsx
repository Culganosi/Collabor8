import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {DataContext} from "./../../DataContext"


function MessageButton({userhandle, id}) {

    const {self} = useContext(DataContext);

    const navigate = useNavigate()

    const newConnection = async () => {
        //Axios post with new message

        //THEN navigate to chat
        axios.post("/chats", {recipientId: id, firstMessageText: `${self.userhandle} & ${userhandle} connected on ${Date.now()}`, type: "init"})
        .then(() => {
            navigate("/chat")
        })
    }



  return (
    <button type="button" onClick={() => newConnection()}>{userhandle}</button>
  )
}

export default MessageButton