import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import EditModal from './pages/EditModal'
import { Link } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import OtherProfile from "./pages/OtherProfile";
import UserProfile from "./pages/UserProfile";
import SignIn from "./pages/SignIn"
import CreateProposal from "./pages/CreateProposal";
import Register from "./pages/Register";
import styled from "styled-components";
import Chat from "./pages/Chat/index";
import EditProfile from "./pages/EditProfile";

function App() {

  const location = useLocation();

  //Variables to be shared
  const [profiles, setProfiles] = useState({})
  const [proposals, setProposals] = useState({})
  const [self, setSelf] = useState({})
  const [chatPreviews, setChatPreviews] = useState([]) //Chat previews of the logged-in user
  //Which chat will display in the Conversation component
  const [activeChatId, setActiveChatId] = useState(""); //---This is the ID
  const [activeChatFull, setActiveChatFull] = useState([]); //---This is the whole history of the active chat


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <DataContext.Provider value={{
      profiles, setProfiles, self, setSelf, proposals, setProposals,
        chatPreviews, setChatPreviews,
        activeChatId, setActiveChatId,
        activeChatFull, setActiveChatFull,
      }}>
    <>

    <CssBaseline />
    {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/People" element={<> <Nav/> <BrowseUsers /> </>} />
        <Route path="/Proposals" element={<> <Nav/> <BrowseProp /> </>} />
        <Route path="/Create-Profile" element={<> <Nav/> <CreateProfile /> </>} />
        <Route path="/My-Profile" element={<> <Nav/> <UserProfile /> </>} />
        <Route path="/Home" element={<> <Nav/> <Dashboard /> </>} />
        <Route path="/Create-Proposal" element={<> <Nav/> <CreateProposal /> </>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/People/:id" element={<> <Nav/> <OtherProfile /> </>} />
        <Route path="/People/:userId/:id" element={<> <Nav/> <OthersProp /> </>} />
        <Route path="/Proposals/:id" element={<> <Nav/> <OthersProp /> </>} />
        <Route path="/My-Profile/:id" element={<> <Nav/> <OwnProp /> </>} />
        <Route path="/My-Profile/:id/edit" element={<> <Nav/> <EditModal /> </>} />
        <Route path="/Chat" element={<> <Nav/> <Chat /> </>} />
        <Route path="/Home/People/:id" element={<> <Nav/> <OtherProfile /> </>} />
        <Route path="/Home/Proposals/:id" element={<> <Nav/> <OthersProp /> </>} />
        <Route path="/Edit-Profile" element={<> <Nav/> <EditProfile /> </>} />
      </Routes>
    </>
    <Footer />

    </DataContext.Provider>
  );
}

export default App;
