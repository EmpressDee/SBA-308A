import { fetchPokemon, PokemonList } from "./scriptapi.js";
import { displayPokemon } from "./pokeuser.js"


document.addEventListener("DOMContentLoaded",async (e) => {
    const pokemonList = await PokemonList();
});


const pokeSearch = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");

button.addEventListener("click", async (e)=>{
const searchValue = pokeSearch.value;
 const pokemon = await fetchPokemon(searchValue);
 displayPokemon (pokemon)


});