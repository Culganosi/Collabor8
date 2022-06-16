import React, {useContext} from 'react'
import {DataContext} from "../../DataContext";

function CreateChatButtons() {

    const {profiles, self} = useContext(DataContext);

    const newPeople = []

    for (let profileId of Object.keys(profiles)) {
        if (!self.chats.includes(profileId) && profileId != self._id){
            newPeople.push(profiles[profileId])
        }
    }

    const buttons = newPeople.map(profile => {
        return (
            <button className="newPersonButton">{profile.userhandle}</button>
        )
    })

    return (
        <div>
        <h5>(Not yet) Test messaging new users (The click will actually be outside of the chatbox)</h5>
        {buttons}
        </div>
    )
}

export default CreateChatButtons


