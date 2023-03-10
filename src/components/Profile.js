import React from "react";
import {Link,Outlet} from "react-router-dom"

export const Profile = (props) => {
  return (
    <div>
        
      <ul>
        <Link to="my">my profile</Link>
        <Link to="friend" style={{marginLeft:"10px"}}>see friends profile</Link>
      </ul>
      <Outlet/>
    </div>
  );
};
