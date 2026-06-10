//fetches pokemon when user searches

const fetchPokemon = async (nameorId) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`,
    );
    console.log(res.data);
    return res.data;           //put console.log above to show data
  } catch (error) {
    console.log("Unable to get pokemon!");
  }
};

//gets full pokemon list
 const PokemonList = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    
    console.log(res.data.results)
    return res.data.results;    //put console.log above to show data

  } catch (error) {
    console.log("Unable to load Pokemon List")
  }
 }
PokemonList()