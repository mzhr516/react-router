import React from 'react'



export const Login = ({login}) => {
  return(
    <div>
        <h1>login form</h1>
        <input type="text" />
        <button onClick={login}>login</button>
    </div>
   )

 }