import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";

import Login from "./components/Login"
import Self from "./components/Self"




function App() {

  //--------- Local 

    //Run on every re-render
    // useEffect(() => {
    //   axios.get("/users")
    //   .then(userInfo => {
    //     console.log(userInfo)
    //   })

    // }, []);

  
  const [state, setState] = useState({
    clientUserId: undefined
  })

  //--------


  return (

    <div className="App">

      <Router>
        <Routes>

          <Route path="/" element={<Login />}/>

          <Route path="/self" element={<Self />}/>

        </Routes>
      </Router>


    </div>


  );
}

export default App;
