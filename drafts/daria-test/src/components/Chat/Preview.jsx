import React, {useContext, useEffect} from 'react'
import {DataContext} from "../../DataContext";
import axios from 'axios';

function Preview({previewData}) {


    const {profiles, setActiveChatId, setProfiles} = useContext(DataContext);

    const partnerId = previewData.partners[0];

    console.log("Preview data")
    console.log(previewData)

    console.log("PARTNER ID")
    console.log(partnerId)


    return (


        <div className="chat__preview" onClick={() => setActiveChatId(previewData._id)}>

            {/* <p><b>Partner ID: </b>{partnerId}</p>   */}

            <p><b>Partner: </b>{profiles[partnerId].userhandle}</p>  
            <p><b>Last message at: </b>{previewData.lastMessage.sentAt}</p>
            <p><b>Text: </b>{previewData.lastMessage.text}</p>       
                
        </div>

    )
}

export default Preview