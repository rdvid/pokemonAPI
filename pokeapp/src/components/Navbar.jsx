import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"

function Navbar(){
    return(
        <div id="navBar">
            <img src={logo} id="navLogo"></img>
            <div id="buttonList">
                <Link to="/" className="navButton">Home</Link>
                <Link to="/pokemons" className="navButton">Pokemons</Link>
                <Link to="/contato" className="navButton">Contato</Link>
            </div>
        </div>
    );
}



export default Navbar;