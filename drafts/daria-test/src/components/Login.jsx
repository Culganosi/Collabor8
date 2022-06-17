import React, {Fragment, useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {DataContext} from "./../DataContext"
import axios from 'axios';
import "./style.css"


function Login() {

  const navigate = useNavigate();  

  const {self, setSelf} = useContext(DataContext);

  const [userhandle, setUserhandle] = useState(undefined);
  const [password, setPassword] = useState(undefined);



  //FUNCTION TO LOG IN
  const login = () => {   

    const requestString = `/auth/in`

    axios.post(requestString, {userhandle, password})
    .then(response => {
      setSelf(response.data)
    })
    .then(() => navigate("/dashboard"))
    .catch(err => console.log(err))
  }


  return (

    <Fragment>
      <h1>Login</h1>

      <h2>Some test users</h2>

      <table>
        <thead>
        <tr>
          <th>Userhandle</th>
          <th>Password</th>
          <th>Chats in seed of DB</th>
        </tr></thead>
        <tbody>
        <tr>
          <td>kmyrtle0</td>
          <td>123</td>
          <td>2</td>
        </tr>
        <tr>
          <td>rgostridge1</td>
          <td>123</td>
          <td>1</td>
        </tr>
        <tr>
          <td>lreardon2</td>
          <td>123</td>
          <td>1</td>
        </tr>
        <tr>
          <td>fpeers3</td>
          <td>123</td>
          <td>0</td>
        </tr>        
        </tbody>
      </table>

      <form onSubmit={event => event.preventDefault()}>

      <input 
        type="text"
        id="userId" 
        name="userId" 
        placeholder="userhandle"
        value={userhandle} 
        onChange={(event) => setUserhandle(event.target.value)} 
      /> 

      <br></br> <br></br>

      <input 
        type="text"
        id="userId" 
        name="userId" 
        placeholder="password"
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
      /> 
      
      <br /> <br />

      <button onClick={() => login()}> SUBMIT </button>

      </form>

    </Fragment>

  )
}

export default Login