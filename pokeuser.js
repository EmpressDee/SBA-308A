export const displayPokemon = (pokemon) => {
  const pokemonData = document.getElementById("pokemonResults");

  pokemonData.innerHTML = `<img src="${pokemon.sprites.front_default}"> <h2>${pokemon.name}</h2> 
  <p>Type: ${pokemon.types[0].type.name}</p>
  <p>Abilities: ${pokemon.abilities[0].ability.name}
  <p>Weight: ${pokemon.weight}`;
  const image = document.createElement("img");
  //image.src = `${pokemon.sprites.front_default}`;
  pokemonData.appendChild(image);
};
//cant find strength/weakness on api
export const displayGallery = (pokemon) => {
  const gallery = document.getElementById("pokemonGallery");

  pokemon.map((p) => {
    const card = document.createElement("div");
    card.innerHTML = `<img src="${p.sprites.front_default}"> <h3>${p.name}</h3>`;
    gallery.appendChild(card);
  
})
};
///need to fix...doing something wrong. 
//map- create card element for each pokemon, show name and pic, append the card
//gallery.innerHTML = `${pokemon.sprites.front_default}`;
  //gallery.appendChild(displayGallery);