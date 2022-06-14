import React, {useContext, useEffect} from 'react';
import {DataContext} from "../../DataContext";
import axios from 'axios';

import Preview from "./Preview";

function Sidebar() {

  const {chatPreviews, setChatPreviews, self, setSelf, profiles} = useContext(DataContext);

  return (

   
    <div className="chat__sidebar">
      {chatPreviews.map(preview => (<Preview previewData={preview} />))}
    </div>

  )
}

export default Sidebar