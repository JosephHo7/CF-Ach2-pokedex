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


//Create a loop to display pokemon names on the DOM
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write('<p>',pokemonList[i].name + ' ' + '(height:' + pokemonList[i].height + ')','</p>')
// }

// // Add loop with conditional to highlight any pokemon with height greater than 1
// for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height < 1)
//         document.write('<p>',pokemonList[i].name + ' ' + '(height:' + pokemonList[i].height + ')','</p>')
//     else {
//         document.write('<p>',pokemonList[i].name + ' ' + '(height:' + pokemonList[i].height + ')' + ' - Wow, that\'s big!','</p>')
//     }
// }

//use forEach function instead of for 
// pokemonRepository.getAll().forEach(function(pokemon){
//     document.write('<p> ', pokemon.name + ' (height:' + pokemon.height + ') ' + ' types: ' + pokemon.types,' </p>');
// });

