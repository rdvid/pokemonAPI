import axios from "axios";
import React from "react";


const Api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
});

export default Api;