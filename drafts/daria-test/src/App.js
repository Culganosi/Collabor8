import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";

import Login from "./components/Login"
import Chat from "./components/Chat/"

import {DataContext} from "./DataContext"


function App() {

    //This info is obtained upon successful login or registration
    const [self, setSelf] = useState({empty: "no self / not logged in"}); //Info about the logged in user
    const [chatPreviews, setChatPreviews] = useState([]) //Chat previews of the logged-in user
    const [profiles, setProfiles] = useState({}) //Abridged info about the users

    //Which chat will display in the Conversation component
    const [activeChat, setActiveChat] = useState(undefined);


  // --------- Local 

  ///------Notes: 
  /*
    What needs to be imported when?
    - Should everything just re-import on every page??? Put it into a different document to run it???
  */

  //----

  //Every time the app loads
  useEffect(() => {

    //TODO: Make these Promise.all somehow?

    //Import info about users  

    axios.get("/users")
    .then(res => {
      setProfiles(res.data)
    })

    //Find out who the client is based on their cookie
    axios.get("/users/self")
    .then(res => {
      const clientInfo = res.data;
      setSelf(res.data)
      return clientInfo._id;
    })
    .then(clientId => {

      console.log(clientId)

      axios.get(`/users/${clientId}/chat-previews`)
      .then(res => {
        console.log(res.data)
        setChatPreviews(res.data)
      })

      //TODO: Have rooms for all conversations of the client
      //Also what if messages from someone not messaged before come in? Should also be a room


    })
    // .catch(error => console.log(error.message))


  }, [])


  return (

    <DataContext.Provider value={{
       self, setSelf,
       chatPreviews, setChatPreviews,
       profiles, setProfiles,
       activeChat, setActiveChat
    }}>

      <Router>

        <Routes>

          <Route path="/" element={<Login />}/>
          <Route path="/chat" element={<Chat />}/>

        </Routes>
      </Router>


    </DataContext.Provider>


  );
}

export default App;
