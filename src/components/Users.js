import React from 'react'
import {Link} from "react-router-dom"



export const Users = (props) => {
  return(
    <div>
        <ol>
            <li><Link to="/user/1"> user 1 </Link></li>
            <li><Link to="/user/2"> user 2 </Link></li>
            <li><Link to="/user/3"> user 3 </Link></li>
            <li><Link to="/user/4"> user 4 </Link></li>
            <li><Link to="/user/5"> user 5 </Link></li>
            <li><Link to="/user/6"> user 6 </Link></li>
            <li><Link to="/user/7"> user 7 </Link></li>
        </ol>
    </div>
   )

 }