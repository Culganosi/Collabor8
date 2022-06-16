import React, {useContext, useEffect} from 'react'
import {DataContext} from "../../DataContext";
import classNames from "classnames";

function Preview({previewData}) {

    //Full variables from context
    const {profiles, setActiveChatId, activeChatId} = useContext(DataContext);
    
    //Helper variables
    const previewClass = classNames('chat-preview', { "active": previewData._id==activeChatId});
    const partnerId = previewData.partner;
    

    //RENDER
    return (

        <div className={previewClass} onClick={() => setActiveChatId(previewData._id)}>

            <img className="chat-preview__avatar" src={`${profiles[partnerId].avatar}`} />

            <div>

            <b>{previewData._id}</b>

            <p><b>{profiles[partnerId].userhandle}</b></p>  
            <p>{previewData.lastMessage.sentAt}</p>
            <p>{profiles[previewData.lastMessage.author].userhandle}: {previewData.lastMessage.text}</p>    

            </div>   
                
        </div>

    )
}

export default Preview