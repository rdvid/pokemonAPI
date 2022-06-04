import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Navbar(){
    return(
        <div id="navBar">
            <img src={logo} id="logo"></img>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cats">Pokemons</Link>
            </li>
            <li>
                <Link to="/sheeps">Contato</Link>
            </li>
        </div>
    );
}



export default Navbar;