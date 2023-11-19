import PokemonApi from './pokemonApi.js'
import PokemonTemplate from './pokemonTemplate.js'
const pokemonElement = document.querySelector('.pokemon')
const pageTitle = document.querySelector('.page-title')

function appendPost(name) {
    pageTitle.innerHTML = title

    PokemonApi.getPokemon(name).then((pokemon) => {
        pokemonElement.appendChild(PokemonTemplate.getElement(pokemon, false))
    })    
}

function getPostName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('post');
}

appendPost(getPostName())