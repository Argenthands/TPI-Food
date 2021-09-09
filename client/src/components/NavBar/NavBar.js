import React from "react";
import { Link } from "react-router-dom";
//import { store } from "../../redux/store";
//import NavBarStyle from "./NavBar.module.css";

const NavBar = ()=>{ //como mierda accedo al store de redux
    return(
        <nav >
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Form">Form</Link>
                </li>
                <p>------------------------</p>
                <li>
                    <Link to="/">Landing</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar