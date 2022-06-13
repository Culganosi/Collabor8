import React, {Fragment, useState} from 'react';
import axios from 'axios';


function Login() {

  
  const [inputId, setInputId] = useState(undefined);

  const submitId = () => {

    const requestString = `http://localhost:3001/users/${inputId}`
    console.log(requestString)

    axios.get(requestString)
    .then(userInfo => {
      console.log(userInfo.data.userhandle)
    })
    .catch(err => console.log(err.message))
  }



  return (

    <Fragment>
      <h1>Login</h1>

      <h2>Here are some user IDs</h2>
        <p> <b>kmyrtle0: </b>62a753af52e50b7b67588379</p>
        <p> <b>rgostridge1: </b>62a753af52e50b7b67588380</p>
        <p> <b>lreardon2: </b>62a753af52e50b7b67588386</p>

      <form onSubmit={event => event.preventDefault()}>

      <label for="lname"><h2>Enter the user ID:</h2></label>
      <input 
        type="text"
        id="userId" 
        name="userId" 
        value={inputId} 
        onChange={(event) => setInputId(event.target.value)} 
      /> 
      
      <br /> <br />

      <button onClick={() => submitId()}> SUBMIT </button>

      <p>The ID to be submitted: {inputId}</p>

      </form>

    </Fragment>

  )
}

export default Login