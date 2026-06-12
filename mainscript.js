import { fetchPokemon, PokemonList } from "./scriptapi.js";
import { displayPokemon } from "./pokeuser.js"


document.addEventListener("DOMContentLoaded",async (e) => {
    const pokemonList = await PokemonList();
    const allPokemon = await Promise.all(pokemonList.map(p => fetchPokemon(p.name))); //map creates array of all pokemon;promise.all fires all requests at once
});


const pokeSearch = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");

button.addEventListener("click", async (e)=>{
const searchValue = pokeSearch.value;
 const pokemon = await fetchPokemon(searchValue);
 displayPokemon (pokemon)


});