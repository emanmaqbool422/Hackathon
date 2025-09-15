import React from 'react'
import { Form } from 'react-router-dom'
import { siginWithGoogle } from '../Firebase-config'

const Sigin = () => {
  return (
    <>
     <div className="App">
        <button onClick={siginWithGoogle}>SignIn With Google</button>
        <div>
          <h1>Name :{localStorage.getItem("name")}</h1>
          <h1>Email: {localStorage.getItem("email")}</h1>
          <img src={localStorage.getItem("profilePic")} />
        </div>
      </div>
    </>
  )
}

export default Sigin