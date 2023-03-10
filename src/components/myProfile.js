import React from 'react'
import {Link, Outlet} from "react-router-dom"



export const MyProfilr = (props) => {
  return(
    <div>
        <ul>
            <li><Link to="detail">see detail profile</Link></li>
            <li><Link to="shorter">see shorter profile</Link></li>
        </ul>
        <Outlet/>
    </div>
   )

 }