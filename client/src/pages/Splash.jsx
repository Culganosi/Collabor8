import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import React , {Suspense, Component} from "react";
import { OrbitControls } from "@react-three/drei";
// import { Fragment } from "react";
import Background from "./Background";
import MovingSphere from "./MovingSphere";
import Splashtext from "./Splashtext";
// import Register from "./components/Register";
// import Login from "./components/Login";

import '~video-react/dist/video-react.css'; // import css
// <link rel="stylesheet" href="/css/video-react.css" />
import { Player } from 'video-react';
import CollabLogoIntro from "../media/CollabLogoIntro";
import LogoAnimation from "../components/LogoAnimation";
export default function Splash() {

  return (
    <>
      <Wrapper className='App'>
         {/* <LogoAnimation />    animation for logo */}
         <CollabLogoIntro />
        <Background />
        <Splashtext /> 
        <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
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