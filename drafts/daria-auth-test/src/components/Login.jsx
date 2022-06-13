import React, {Fragment, useState} from 'react'


function Login() {

  
  const [inputId, setInputId] = useState(null);

  const submitId = () => {

    //submit the inputId

  }



  return (

    <Fragment>
      <h1>Login</h1>

      <h2>Here are some user IDs</h2>
        <p> <b>kmyrtle0: </b>62a753af52e50b7b67588379</p>
        <p> <b>rgostridge1: </b>62a753af52e50b7b67588380</p>
        <p> <b>lreardon2: </b>62a753af52e50b7b67588386</p>

      <form>

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