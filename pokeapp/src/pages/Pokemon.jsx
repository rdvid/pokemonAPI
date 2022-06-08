import React from "react";
import { Link } from "react-router-dom";
import Pokename from "../components/Pokename";

function Pokemon(){

    return(
        <div id="Pokemon-page" >
            <h1>Mais de 250 Pokemons para voce escolher o seu favorito</h1>
            <main id="Search-container">
                <input
                    type="text"
                    placeholder="Type your favorite pokemon"
                    className="Search-bar"
                />
                <br />
            </main>
        </div>
    );

}


export default Pokemon;