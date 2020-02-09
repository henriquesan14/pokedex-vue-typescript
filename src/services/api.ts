import axios from 'axios';

export default axios.create({
    baseURL: 'https://raw.githubusercontent.com/Biuni/pokemonGO-pokedex/master/pokedex.json'
});