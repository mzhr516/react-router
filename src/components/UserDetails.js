import React from 'react'
import { useParams } from 'react-router-dom'



export const UserDetails = (props) => {
    const param= useParams()
    console.log(param)
  return(
    <div> user {param.userId} details page</div>
   )

 }