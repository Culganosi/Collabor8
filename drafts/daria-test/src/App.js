import axios from 'axios';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";

import Login from "./components/Login"
import Chat from "./components/Chat/"

import {DataContext} from "./DataContext"

import "./App.css"



import socketIoClient from 'socket.io-client';
//Address of the server //--> This will create a connection which the server detects as 'connection'



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


      useEffect(() => {
        const connection = socketIoClient('http://localhost:3001');
        setConn(connection);
      },[])
      
      useEffect(() => {
        if (conn) {
          conn.on('INITIAL_CONNECTION', data => {
            console.log("DATA HAS COME IN FROM THE SERVER!");
            console.log(data);
            // setUser(prev => data.name);
            // setUsers(prev => data.usersList);
          })
        }
      }, [conn])
      




      //----------------------------





  return (

    <DataContext.Provider value={{
       self, setSelf,
       chatPreviews, setChatPreviews,
       profiles, setProfiles,
       activeChatId, setActiveChatId,
       activeChatFull, setActiveChatFull,
       conn
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
