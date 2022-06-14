import React, {Fragment, useContext} from 'react'

import {DataContext} from "../DataContext";

function Chat() {

  const {self, setSelf} = useContext(DataContext);


  return (

    <Fragment>

        <h1>Self</h1>

        <h2>Your userhandle is: {self.userhandle} </h2>
        
    </Fragment>

  )
}

export default Chat