import React, {useContext, useEffect} from 'react'
import {DataContext} from "../../DataContext";
import axios from 'axios';

function Preview({previewData}) {


    const {profiles, setActiveChatId} = useContext(DataContext);

    const partnerId = previewData.partner;


    return (


        <div className="chat-preview" onClick={() => setActiveChatId(previewData._id)}>

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