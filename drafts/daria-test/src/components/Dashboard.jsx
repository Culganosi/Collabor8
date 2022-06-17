import React from 'react'
import { useNavigate } from "react-router-dom";


function Dashboard() {



    

    const navigate = useNavigate()
    
    return (
        <>

        <div>Dashboard</div>
        <button type="button" onClick={() => {navigate("/chat")}}>Proceed to chat</button>


        </>
    )
}

export default Dashboard