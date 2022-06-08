import React, { useEffect, useState } from "react";
import Api from "../services/Api";

function Card(){

    const [pokemon, setInfo] = useState();

    useEffect(() => {
        Api
            .get("pokemon/bulbasaur")
            .then((response) => setInfo(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    return(
       <div className="Card-container">
           <div className="Card">
                <img src={pokemon?.sprites["front_default"]} className="Card-image"></img>
                <h1>{pokemon.name}</h1>
           </div>
       </div>
    );
}


export default Card;