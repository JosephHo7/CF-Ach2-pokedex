let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, types: ['fire', 'ground']},
    {name: 'Squirtle', height: 0.5, types: ['water', 'dragon']}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p>',pokemonList[i].name + ' ' + '(height:' + pokemonList[i].height + ')','</p>')
}
