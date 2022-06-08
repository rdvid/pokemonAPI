import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card"

function Pokemon(){

    return(
        <div id="Pokemon-page" >
            <h1>Mais de 250 Pokemons para voce escolher o seu favorito</h1>
            <Card></Card>
        </div>
    );

}


export default Pokemon;