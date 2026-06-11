
export const displayPokemon = (pokemon) => {
const pokemonData = document.getElementById("pokemonResults");

pokemonData.innerHTML = `<h2>${pokemon.name}</h2>`
const image = document.createElement("img")
image.src = `${pokemon.sprites.front_default}`;
pokemonData.appendChild(image)

}