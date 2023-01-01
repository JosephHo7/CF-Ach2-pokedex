let pokemonRepository = (function () {

    let pokemonList = [
        {name: 'Bulbasaur', height: 0.7, types: ['grass', ' poison']},
        {name: 'Charmander', height: 1.6, types: ['fire', ' ground']},
        {name: 'Squirtle', height: 0.5, types: ['water', ' dragon']}
    ];

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

function addListItem(pokemon) {
    let pokedexDisplayList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokedex-button');
    listItem.appendChild(button);
    pokedexDisplayList.appendChild(listItem);
    //add event listener
    button.addEventListener('click', function () {
        showDetails(pokemon);
    });
} 

function showDetails(pokemon) {
    console.log(pokemon);
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
}
}) ()

//add pikachu to the list
pokemonRepository.add({name: 'Pikachu', height: 0.4, types: ['electric', 'ground'] });

//create all pokemon as buttons
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
})



