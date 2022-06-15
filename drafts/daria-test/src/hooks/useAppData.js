import { useState, useEffect, useContext } from "react";
import axios from 'axios';

/*

    - useEffects will on refresh or any time we navigate to a page that calls this function
    - 
    - This can be the general update for almost all pages?

*/
import {DataContext} from "./../DataContext"

export default function useAppData(){


    //CALLS TO THE SERVER

    const {self, setSelf} = useContext(DataContext);


    useEffect(() => {
        axios.get("/users/self")
        .then(res => {
          const clientInfo = res.data;
          setSelf(res.data)
          return clientInfo._id;
        })
    })

    return {self, setSelf}


    // axios.get("/users")
    // .then(res => {
    //   setProfiles(res.data)
    // })


    //CUSTOM FUNCTIONS TO MODIFY LOCAL DATA


    // //Returns the object with everything
    // return {
    //     self, setSelf, 
    //     chatPreviews, setChatPreviews,
    //     profiles, setProfiles,
    //     activeChatId, setActiveChatId,

    // }


}