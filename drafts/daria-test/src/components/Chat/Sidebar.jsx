import React, {useContext, useEffect} from 'react';
import {DataContext} from "../../DataContext";
import axios from 'axios';

function Sidebar() {

    const {chatPreviews, setChatPreviews, self, setSelf} = useContext(DataContext);

    useEffect(() => {

        axios.get(`/users/${self._id}/chat-previews`)
        .then(res => {
          console.log(res.data)
          setChatPreviews(res.data)
        })

    }, [])



  return (
    <div className="chat__sidebar">

    {chatPreviews.map(preview => {
        return (
            <div className="chat__preview">{preview.partners[0]}</div>
        )
    })}

    </div>
  )
}

export default Sidebar