import React, {useContext} from 'react'
import {DataContext} from "./../../DataContext"

function MessageLine({message}) {

    const {author, sentAt, text, self} = message

    const {profiles} = useContext(DataContext);
    
    //TODO: if author == self._id, style the nessage differently

    return (
    <div className="message">
        <p className="message__author">{profiles[author].userhandle}</p>
        <p className="message__sentAt">{sentAt}</p>
        <div className="message__text">{text}</div>
    </div>
    )
}

export default MessageLine