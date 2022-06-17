import React, {useEffect, useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {DataContext} from "./../../DataContext"
import axios from "axios"

import MessageButton from "./MessageButton"

function Dashboard() {

    const {self, setProfiles, setSelf, profiles, chatPreviews, setChatPreviews} = useContext(DataContext);

    useEffect(() => {
        async function getData() {

            const selfRes = await axios.get("/users/self")
            setSelf(selfRes.data)

            const profileRes = await axios.get("/users")
            setProfiles(profileRes.data)

            const chatPrevRes = await axios.get(`/chats/self/chat-previews`)
            setChatPreviews(chatPrevRes.data);
        }   
        getData()

    }, [])


    const profileButtons = Object.values(profiles)
    .filter(profile => profile._id != self._id)
    .filter(profile => {
        let exclude = true;
        chatPreviews.forEach(preview => {
            if(preview.partner==profile._id) {
                exclude = false;
            }
        })
        return exclude;
    })
    .map(profile =>{
        return(
            <MessageButton userhandle={profile.userhandle} key={profile._id} id={profile._id} />
        )
    })


    const navigate = useNavigate()
    
    return (
        <>

        <div>Dashboard</div>

        <h1>Message new people</h1>

        {profileButtons}
        
        <h1>Or</h1>

        <button type="button" onClick={() => {navigate("/chat")}}>Proceed to chat</button>


        </>
    )
}

export default Dashboard