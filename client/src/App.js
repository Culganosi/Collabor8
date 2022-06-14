import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import "./styles.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import { Fragment } from "react";
import Background from "./components/Background";
import MovingSphere from "./components/MovingSphere";
// import { OrbitControls } from "@react-three/drei";
import Landingtext from "./components/Landingtext";
// import Register from "./components/Register";


export default function App() {

  return (

 <Wrapper className='App'>
  <Background />
  <Landingtext />
  <Canvas>
<MovingSphere />
  </Canvas>
 </Wrapper>

  );
}
const Wrapper = styled.div`
position: relative;
background: #1f1144;

canvas {
  height: 500px;
}
`;

