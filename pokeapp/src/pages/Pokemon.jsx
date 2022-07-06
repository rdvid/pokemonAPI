import React from "react";
import Card from "../components/Card";

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
            <div className="Card-container">
                <Card id={1}/>
                <Card id={2}/>
                <Card id={3}/>
                <Card id={4}/>
                <Card id={5}/>
                <Card id={6}/>
                <Card id={7}/>
                <Card id={8}/>
                <Card id={9}/>
                <Card id={10}/>
                <Card id={11}/>
                <Card id={12}/>
            </div>
        </div>
    );

}


export default Pokemon;