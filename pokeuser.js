export const displayPokemon = (pokemon) => {
  const pokemonData = document.getElementById("pokemonResults");

  pokemonData.innerHTML = `<h2>${pokemon.name}</h2> <p>Type: ${pokemon.types[0].type.name}</p>`;
  const image = document.createElement("img");
  image.src = `${pokemon.sprites.front_default}`;
  pokemonData.appendChild(image);
};

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