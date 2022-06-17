import axios from 'axios';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";

import Login from "./components/Login"
import Chat from "./components/Chat/"
import Dashboard from "./components/Dashboard"

import {DataContext} from "./DataContext"

import "./App.css"


function App() {

      //---NOTE: Don't set these to null or undefined

      //This info is obtained upon successful login or registration
      const [self, setSelf] = useState({}); //Info about the logged in user
      const [chatPreviews, setChatPreviews] = useState([]) //Chat previews of the logged-in user
  
      const [profiles, setProfiles] = useState([]) //Abridged info about the users //NOTE: currently an object indexed by IDs
  
      //Which chat will display in the Conversation component
      const [activeChatId, setActiveChatId] = useState(""); //---This is the ID
      const [activeChatFull, setActiveChatFull] = useState([]); //---This is the whole history of the active chat

      const [conn, setConn] = useState(null);

      //--------------------------

      


      //----------------------------


    return (

      <DataContext.Provider value={{
        self, setSelf,
        chatPreviews, setChatPreviews,
        profiles, setProfiles,
        activeChatId, setActiveChatId,
        activeChatFull, setActiveChatFull,
        conn, setConn
      }}>

        <Router>

          <Routes>

            <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/chat" element={<Chat />}/>

          </Routes>
        </Router>


      </DataContext.Provider>


    );
}

export default App;
