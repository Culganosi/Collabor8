import React from 'react'
// import CollabLogoIntro from "../media/CollabLogoIntro.mp4";
import IntroCollabPurple from "../media/IntroCollabPurple.mp4"
// import { Player } from 'video-react';
// import CollabLogoIntro from "../media/CollabLogoIntro.mp4";
import "./LogoAnimation.css"
// import "./../../node_modules/video-react/dist/video-react.css"; // import css

// import '~video-react/dist/video-react.css'; // import css
{/* <link rel="stylesheet" href="/css/video-react.css" /> */}
// Has to be muted even if no sound autoplay true muted true 
//position:100, muted: true 

// export default function LogoAnimation() {
  
//   return (
// <Player className="logo"
// playsInline
// src={CollabLogoIntro}
// // position={100}
// muted={true}
//  />
//     )
// }


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
