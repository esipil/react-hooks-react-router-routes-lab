import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink
     to ="/"
    >
      Home
    </NavLink> 
    <NavLink 
     to ="/directors"
    >
      Directors
    </NavLink> 
    <NavLink
     to ="/actors"
    >
      Actors
    </NavLink> 
    <NavLink
     to ="/movies" 
    >
      Movies
    </NavLink> 
    
  </div>
}

export default NavBar;
