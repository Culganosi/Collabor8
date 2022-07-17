import React from 'react'
import IntroCollabPurple from "../media/IntroCollabPurple.mp4"
import "./LogoAnimation.css"


export default function LogoAnimation() {    
  return (
    <>
      <video
        className="logo"
        // onClick={() => removeVideo()}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          // height:"100vh",
          // width: "130rem",
          left: 0,
          top: 0,
          zIndex:100,
          margin:0
        }}
      >
        <source src={IntroCollabPurple} type="video/mp4" />
      </video>
      </>
    );
  }
