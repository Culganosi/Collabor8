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
    const [self, setSelf] = useState({empty: "no self / not logged in"});
    const [chatPreviews, setChatPreviews] = useState([])

  // --------- Local 

  //Every time the app loads
  useEffect(() => {

    //Find out who the client is based on their cookie
    axios.get("/users/self")
    .then(res => {
      const clientInfo = res.data;
      setSelf(res.data)
      return clientInfo._id;
    })
    .then(clientId => {

      console.log(clientId)

      //TODO: Have rooms for all conversations of the client
      //Also what if messages from someone not messaged before come in? Should also be a room


    })
    .catch(error => console.log(error.message))



    




  }, [])


  return (

    <DataContext.Provider value={{
       self, setSelf,
       chatPreviews, setChatPreviews
    }}>

      <Router>

        <Routes>

          <Route path="/" element={<Login />}/>
          <Route path="/self" element={<Chat />}/>

        </Routes>
      </Router>


    </DataContext.Provider>


  );
}

export default App;
