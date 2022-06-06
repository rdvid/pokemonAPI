import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Navbar(){
    return(
        <div id="navBar">
            <img src={logo} id="logo"></img>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/pokemons">Pokemons</Link>
            </button>
            <button>
                <Link to="/contato">Contato</Link>
            </button>
        </div>
    );
}



export default Navbar;