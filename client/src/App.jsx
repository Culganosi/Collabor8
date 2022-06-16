import React from "react";
import Nav from "./components/Nav";
import BrowseProp from "./components/BrowseProp";
import Footer from "./components/Footer";
import OthersProp from "./components/OthersProp";
import { CssBaseline } from "@material-ui/core";
// import SignIn from "./components/SignIn";
import Splash from "./components/Splash";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import { BrowserUpdatedSharp } from "@mui/icons-material";
import BrowseUsers from './components/BrowseUsers'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OwnProp from './components/OwnProp'
import EditProp from './components/EditProp'
import EditModal from './components/EditModal'
import CreateProfile from './components/CreateProfile'


function App() {
  return (
    <>
    <Router>
      <CssBaseline />
      <Nav />
      <BrowseProp />
      {/*<SignIn /> */}
      {/* <OthersProp /> */}
      <Footer />
      </Router>
    </>
  );
}

export default App;

 {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={Splash} />
          <Route exact path="/Register" element={Register} />
          <Route exact path="/Login" element={Login} />
          <Route exact path="/Dashboard" element={Dashboard} />
        </Routes>
      </Router> */}