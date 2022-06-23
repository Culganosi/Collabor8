import '~video-react/dist/video-react.css'; // import css
<link rel="stylesheet" href="/css/video-react.css" />
import { Player } from 'video-react';
import CollabLogoIntro from "../media/CollabLogoIntro";
// Has to be muted even if no sound autoplay true muted true 
//position:100, muted: true 
import React from 'react'

export default function LogoAnimation() {
  componentDidMount() {
    this.setState({isLoading: true})
  }


  return (

<Player>
{/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /> */}
{/* <CollabLogoIntro position="100" muted="true" /> */}
<source src="../media/CollabLogoIntro" />
</Player>


    )
}


//CSS to add later 
// img{  
//   width:auto;
//   height:100vh;
//   animation:fadeout 5s ease-out 10s forwards;
// }

// @keyframes fadeout{
//   0%{
//     opacity:1
//   }
//   99%{
//     opacity:0;
//     display:block;
//   }
//   100%{opacity:0;display:none;}
// }
