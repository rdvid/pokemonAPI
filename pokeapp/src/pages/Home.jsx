import React from "react";
import { Link } from "react-router-dom";
import banner from "../images/banner.svg";

function Home(){

    return(
        <div className="App">
        <header className="App-header">
          <img src={banner} className="App-logo" alt="logo" />
          <article className='Home-title'>
            <h1 id="Title">Qual Pokemon você escolheria?</h1>
            <p id="Subtitle">Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
            <button id="Home-button">
              <Link to="/pokemons" className='Home-button'>Veja os pokemons</Link>
            </button>
          </article>
        </header>
      </div>
    );

}

export default Home;