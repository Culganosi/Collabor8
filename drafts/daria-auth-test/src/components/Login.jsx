import React, {Fragment} from 'react'

function Login() {
  return (

    <Fragment>
      <h1>Login</h1>

      <h2>Here are some user IDs</h2>
        <p> <b>kmyrtle0: </b>62a753af52e50b7b67588379</p>
        <p> <b>rgostridge1: </b>62a753af52e50b7b67588380</p>
        <p> <b>lreardon2: </b>62a753af52e50b7b67588386</p>

      <form>

      <label for="lname"><h2>Enter the user ID:</h2></label>
      <input type="text" id="userId" name="userId" value="" /> <br /> <br />

      <button type="submit"> SUBMIT </button>

      </form>

    </Fragment>

  )
}

export default Login