import React from 'react';
import { FaBtc, FaLock } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="container">
                <ul className="logo">
                    <li><FaBtc style={{fontSize:45, color:'#FCB813'}} /></li>
                </ul>
                <ul className="nav-info">
                    <li>SEND MONEY</li>
                    <li>BUSINESS & API</li>
                    <li>TOOLS</li>
                    <li>RESCOURCES</li>
                    <li className="login"><FaLock style={{marginRight:5, marginTop:-3, fontSize:18}} />Log In</li>
                </ul>
            </div>
           
        </div>
     );
}
 
export default Navbar;