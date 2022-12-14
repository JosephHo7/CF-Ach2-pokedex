let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // {name: 'Bulbasaur', height: 0.7, types: ['grass', ' poison']},
    // {name: 'Charmander', height: 1.6, types: ['fire', ' ground']},
    // {name: 'Squirtle', height: 0.5, types: ['water', ' dragon']}

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

// show modal
    let modalContainer = document.querySelector('#modal-container');

    function showModal(title,text, img) {
    
    modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h2');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let imgElement = document.createElement('img'); 
    imgElement.setAttribute('src', img);
    imgElement.setAttribute('alt', 'pokemon img'); 


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imgElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
    };

// hide modal 
    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown',(e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal ();
        }
    });

// load functions
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

function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
        showModal(pokemon.name, 'pokemon height: ' + pokemon.height, pokemon.imageUrl);
    })
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails 
}
}) ()


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




