import React, {useContext} from 'react'
import {DataContext} from "../../DataContext";

function Preview({previewData}) {

    const {profiles} = useContext(DataContext);

    const partnerId = previewData.partners[0];

    return (
        <div className="chat__preview">

            <p><b>Partner: </b>{profiles[partnerId].userhandle}</p>  
            <p><b>Last message at: </b>{previewData.lastMessage.sentAt}</p>
            <p><b>Text: </b>{previewData.lastMessage.text}</p>       
                
        </div>
    )
}

export default Preview