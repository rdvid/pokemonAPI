import React from "react";
import { Switch, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";


export default () => {

    return(
        <Routes>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="pokemons">
                <Pokemon />
            </Route>
        </Routes>


    );

}