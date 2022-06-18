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
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import OtherProfile from "./pages/OtherProfile";
import UserProfile from "./pages/UserProfile";
import SignIn from "./pages/SignIn"
import CreateProposal from "./pages/CreateProposal";
import Register from "./pages/Register";
import styled from "styled-components";

function App() {

  const location = useLocation();

  //Variables to be shared
  const [profiles, setProfiles] = useState({})
  const [proposals, setProposals] = useState({})
  const [self, setSelf] = useState({})

  return (
    <DataContext.Provider value={{profiles, setProfiles, self, setSelf, proposals, setProposals}}>
    <>
    <Wrapper className='App'>
    {location.pathname === '/' ? null : <Nav />}

    <CssBaseline />

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/People/" element={<BrowseUsers />} />
        <Route path="/Proposals" element={<BrowseProp />} />
        <Route path="/Create-Profile" element={<CreateProfile />} />
        <Route path="/My-Profile" element={<UserProfile />} />
        <Route path="/Other-User/" element={<OtherProfile />} />
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/Create-Proposal" element={<CreateProposal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/My-Proposals" element={<OwnProp />} />
        <Route path="/Edit-Proposal" element={<EditModal />} />
        <Route path="/Proposal-Other" element={<OthersProp />} />
      </Routes>
      </Wrapper>
    </>
    <Footer />

    </DataContext.Provider>
  );
}
const Wrapper = styled.div`
position: relative;
background: #1f1144;
canvas {
  height: 500px;
}
`;

export default App;
