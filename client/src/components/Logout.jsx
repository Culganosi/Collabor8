import React from 'react'

function Logout() {

  const logout = () => {
    axios
      .post(`/auth/out`)
      .then((res) => {
        setSelf({});
        navigate("/Home");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>Logout</div>
  )
}

export default Logout