
const pokeSearch = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");

button.addEventListener("click", (e)=>{
const searchValue = pokeSearch.value;
 fetchPokemon(searchValue);
});