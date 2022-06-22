import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function FlipCard({setup, delivery}) {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    //ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
        color: "white",
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {setup}
    </FrontSide>
    <BackSide
      style={{ 
        backgroundColor: '#175852', 
        color: "white",
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
      {delivery}
    </BackSide>
  </Flippy>
  </div>
  )
}

export default FlipCard