import React, {useContext} from 'react'
import {DataContext} from "./../../DataContext"
import classNames from "classnames"

function MessageLine({message}) {

    //Pull variable from context
    const {profiles, self} = useContext(DataContext);

    const {author, sentAt, text} = message

    const messageClass = classNames('message', { "yours": author==self._id});

    
    //TODO: if author == self._id, style the nessage differently

    return (
    <div className={messageClass}>
        <p className="message__author">{profiles[author].userhandle}</p>
        <p className="message__sentAt">{sentAt}</p>
        <div className="message__text">{text}</div>
    </div>
    )
}

export default MessageLine