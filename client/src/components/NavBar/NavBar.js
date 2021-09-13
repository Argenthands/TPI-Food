import React from "react";
import { Link } from "react-router-dom";
//import { store } from "../../redux/store";
import NavBarStyle from "./NavBar.module.css";

const NavBar = ()=>{ //como mierda accedo al store de redux
    return(
        <nav className={NavBarStyle} >
            <ul>
                <li>
                    <Link to="/">{'<--------------------------------Landing'}</Link>
                </li>
                
                <li>
                    <Link to="/Home">Home</Link>
                </li>

                <li>
                    <Link to="/Form">Form</Link>
                </li>

                <li>
                    <Link to="/Search">Search</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar