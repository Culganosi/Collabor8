import React, { Fragment } from "react";
import "./styles.css";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Fragment>
            {/* <Navbar /> */}
            <Router>
          <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          </Routes>
          </Router>
        </Fragment>
    );
  
}
