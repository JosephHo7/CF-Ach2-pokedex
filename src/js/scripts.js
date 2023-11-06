let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
    let modalContainer = document.querySelector('#modal')


    function add(pokemon) {
        pokemonList.push(pokemon)
    }

    function getAll() {
        return pokemonList
    }

    function addListItem(pokemon) {
        let pokedexDisplayList = document.querySelector('.list-group')
        let listItem = document.createElement('li')
        listItem.classList.add('list-group-item')
        let button = document.createElement('button')
        button.classList.add('btn-primary')
        button.classList.add('custom-btn')
        button.innerText = pokemon.name
        button.classList.add('pokedex-button')
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', '#modal')
        listItem.appendChild(button)
        pokedexDisplayList.appendChild(listItem)
        //add event listener
        button.addEventListener('click', function () {
            showDetails(pokemon)
        })
    }

    // show modal
    // let modalContainer = document.querySelector('#modal-container')

    function showModal(title, img, text) {
        let modalTitle = document.querySelector('.modal-title')
        modalTitle.innerText = title

        let modalBody = document.querySelector('.modal-body')
        modalBody.innerText = text

        let imgElement = document.createElement('img')
        imgElement.setAttribute('src', img)
        imgElement.setAttribute('alt', 'pokemon img')
        modalBody.appendChild(imgElement)

    }

    // hide modal
    // function hideModal() {
    //     modalContainer.classList.remove('is-visible')
    // }

    // window.addEventListener('keydown', (e) => {
    //     if (
    //         e.key === 'Escape' &&
    //         modalContainer.classList.contains('is-visible')
    //     ) {
    //         hideModal()
    //     }
    // })

    // modalContainer.addEventListener('click', (e) => {
    //     let target = e.target
    //     if (target === modalContainer) {
    //         hideModal()
    //     }
    // }) 

    // load functions
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    }
                    add(pokemon)
                })
            })
            .catch(function (e) {
                console.error(e)
            })
    }   

    function loadDetails(item) {
        // if (loadDetails.includes(item)) {
        //     return item;
        // } else {
        let url = item.detailsUrl
        return fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (details) {
                // Now we add the details to the item
                item.imageUrl = details.sprites.front_default
                item.height = details.height
                item.types = details.types
            })
            .catch(function (e) {
                console.error(e)
            })
    // }
}

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(
                pokemon.name,
                pokemon.imageUrl,
                'Pokemon Height: ' + pokemon.height
            )
        })
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    }
})()

//fetch and add pokemon data from API
function pokeApiInit () { pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    })
})}

pokeApiInit ();
