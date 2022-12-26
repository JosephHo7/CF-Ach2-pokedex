let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, types: ['grass', ' poison']},
    {name: 'Charmander', height: 1.6, types: ['fire', ' ground']},
    {name: 'Squirtle', height: 0.5, types: ['water', ' dragon']}
];

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
pokemonList.forEach(function(pokemon){
    document.write('<p> ', pokemon.name + ' (height:' + pokemon.height + ') ' + ' types: ' + pokemon.types,' </p>');
});