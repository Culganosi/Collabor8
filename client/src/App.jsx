import React from "react";
import Nav from "./components/Nav";
import BrowseProp from "./components/BrowseProp";
import Footer from "./components/Footer";
import OthersProp from "./components/OthersProp";
import { CssBaseline } from "@material-ui/core";
import SignIn from "./components/SignIn";


function App() {
  return (
    <>
      <CssBaseline />
      <Nav />
      <BrowseProp />
      <SignIn />
      {/* <OthersProp /> */}
      <Footer />
    </>
  );
}

export default App;
