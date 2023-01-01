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
    loadDetails(pokemon).then(function() {
        console.log(pokemon);
    });
}

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

function loadDetails(item) {
let url = item.detailsUrl;
return fetch(url).then(function (response) {
    return response.json();
}).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
}).catch(function (e) {
    console.error(e);
});
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails 
}
}) ()

//add pikachu to the list
pokemonRepository.add({name: 'Pikachu', height: 0.4, types: ['electric', 'ground'] });

//create all pokemon as buttons
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
})

//fetch and add pokemon data from API
pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
})




