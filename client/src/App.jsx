import React from "react";
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

function App() {
  return (
    <>
    <CssBaseline />
      <Nav />
      <Dashboard />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/People" element={<BrowseUsers />} / >
        <Route path="/Proposals" element={<BrowseProp />} />
        <Route path="/Create-Proposal" element={<CreateProfile />} />
      </Routes>
    </>
  );
}

export default App;
