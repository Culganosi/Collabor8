import React, {Fragment, useState} from 'react';
import axios from 'axios';
import "./style.css"

function Login() {

  
  const [userhandle, setUserhandle] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const login = () => {

    const requestString = `http://localhost:3001/auth/in`
    // console.log(requestString)

    axios.post(requestString, {userhandle, password})
    .then(response => {
      console.log(response.data)
    })
    .catch(err => console.log(err.message))


  }



  return (

    <Fragment>
      <h1>Login</h1>

      <h2>Here are some user IDs</h2>

      <table>
        <tr>
          <th>Userhandle</th>
          <th>Password</th>
          <th>ID</th>
        </tr>
        <tr>
          <td>kmyrtle0</td>
          <td>123</td>
          <td>62a753af52e50b7b67588379</td>
        </tr>
        <tr>
          <td>rgostridge1</td>
          <td>123</td>
          <td>62a753af52e50b7b67588380</td>
        </tr>
        <tr>
          <td>lreardon2</td>
          <td>123</td>
          <td>62a753af52e50b7b67588386</td>
        </tr>
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