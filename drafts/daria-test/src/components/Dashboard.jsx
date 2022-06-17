import React, {useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {DataContext} from "./../DataContext"

function Dashboard() {

    
//     const {self, conn} = useContext(DataContext);

// //Send the ID to the socket server to make it relate sockedID <---> userId
//   useEffect(() => {
//     //If connection exists and self is loaded
//     if (conn && self?._id) {
//       conn.emit('sendUserId', self._id)
//     }

//   }, [self])




    const navigate = useNavigate()
    
    return (
        <>

        <div>Dashboard</div>
        <button type="button" onClick={() => {navigate("/chat")}}>Proceed to chat</button>


        </>
    )
}

export default Dashboard