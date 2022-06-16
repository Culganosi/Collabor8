import React, {useState} from "react";


import {DataContext} from "./DataContext"


import { CssBaseline } from "@material-ui/core";
import BrowseProp from "./pages/BrowseProp";
import OthersProp from "./pages/OthersProp";
import OwnProp from './pages/OwnProp'
import CreateProfile from './pages/CreateProfile'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import BrowseUsers from './pages/BrowseUsers'
import EditProp from './pages/EditProp'
import EditModal from './pages/EditModal'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import OtherProfile from "./pages/OtherProfile";
import UserProfile from "./pages/UserProfile";




function App() {


  //Variables to be shared
  const [profiles, setProfiles] = useState({})




  return (
    <DataContext.Provider value={{profiles, setProfiles}}>
    <>
    <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/People" element={<BrowseUsers />} />
        <Route path="/Proposals" element={<BrowseProp />} />
        <Route path="/Create-Profile" element={<CreateProfile />} />
      </Routes>
    </>
    </DataContext.Provider>
  );
}

export default App;
