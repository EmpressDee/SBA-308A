
export const displayPokemon = (pokemon) => {
const pokemonData = document.getElementById("pokemonResults");

pokemonData.innerHTML = `<h2>${pokemon.name}</h2> <p>Type: ${pokemon.types[0].type.name}</p>`;
const image = document.createElement("img")
image.src = `${pokemon.sprites.front_default}`;
pokemonData.appendChild(image);



}