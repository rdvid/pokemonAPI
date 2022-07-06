import React, { useEffect, useState } from "react";
import Axios from "axios";

function Card(props){

    const [cardPokemon, setPokemon] = useState(


        Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`).then((response) => {
       
            cardPokemon.name = response.data.name
            cardPokemon.image = response.data["sprites"]["front_default"]
            cardPokemon.id = response.data.id
            
        })

    );
    
    return(
       
        <div className="Card">
            <header className="Card-header"># {cardPokemon.id}</header>
            <span className="Card-content">
                <h4 className="Card-pokemon-name"> {cardPokemon.name}</h4>
                <img src={cardPokemon.image} className="Card-pokemon-image"></img>
            </span>
        </div>
       
    );
}


export default Card;