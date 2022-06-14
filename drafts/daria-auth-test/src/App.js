import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from "react";

import Login from "./components/Login"
import Chat from "./components/Chat"

import {DataContext} from "./DataContext"


function App() {

    //This info is obtained upon successful login or registration
    const [self, setSelf] = useState({empty: "yes"});

  // --------- Local 

  useEffect(() => {
    axios.get("/auth/self")
    .then(res => {
      console.log(res.data)
      setSelf(res.data)
    })
    .catch(error => console.log(error.message))
  }, [])


   // Run on every re-render
   //, {"Content-Type": "Application/JSON"}

    // useEffect(() => {

    //   axios.get('/users/self')
    //   .then((all) => {
    //     console.log(all.data)
    //     setSelf(all.data)
    //   })
    //   .catch(error => console.log(error.message))

    // // //   // Promise.all([
    // // //   //   axios.get('/users/self', {}, {withCredentials: true, "Content-Type": "Application/JSON"})
    // // //   // ])
    // // //   // .then((all) => {
    // // //   //   console.log(all.data)
    // // //   //   setSelf(all[0].data)
    // // //   // })

    // }, []);



  return (

    <DataContext.Provider value={{self, setSelf}}>

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
