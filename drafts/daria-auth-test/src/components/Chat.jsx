import React, {Fragment, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import {DataContext} from "../DataContext";

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

        <h1>Chat</h1>

        <p>Your userhandle is: <big>{self.userhandle}</big>, your ID is <big>{self._id}</big> </p>

        <button onClick={() => logout()}> LOGOUT </button>
        
    </Fragment>

  )
}

export default Chat