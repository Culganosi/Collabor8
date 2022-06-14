import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import React , {Suspense}from "react";
import "./styles.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import { Fragment } from "react";
import Background from "./components/Background";
import MovingSphere from "./components/MovingSphere";
// import { OrbitControls } from "@react-three/drei";
import Landingtext from "./components/Landingtext";
// import Register from "./components/Register";
// import Login from "./components/Login";


export default function App() {

  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={App} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/faq" component={Faq} />
        </Routes>
      </Router> */}
      <Wrapper className='App'>
        <Background />
        <Landingtext />
        <Canvas className="canvas">
        <ambientLight intensity={0.2} />
        <directionalLight position={[-5, 5, 4]} />
        <Suspense fallback={null}>
          <MovingSphere />
        </Suspense>
          </Canvas>
      </Wrapper>
    </>

  );
}
const Wrapper = styled.div`
position: relative;
background: #1f1144;

canvas {
  height: 500px;
}
`;

