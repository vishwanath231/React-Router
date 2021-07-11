import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    return (
        <>
           <div className="links">
               <ul>
                   <li><NavLink activeClassName="active" exact className="menu" to="/">Home</NavLink> </li>
                   <li><NavLink activeClassName="active"  className="menu" to="/About">About</NavLink> </li>
                   <li><NavLink activeClassName="active" className="menu" to="/Service">Service</NavLink> </li>
                   <li><NavLink activeClassName="active" className="menu" to="/Contact">Contact</NavLink> </li>
               </ul>
           </div>
        </>
    )
}

export default Navbar;
