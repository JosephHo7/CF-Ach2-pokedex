let pokemonRepository=(function(){let t=[]
    function e(e){t.push(e)}
    function n(){return t}
    let i=document.querySelector('#modal-container')
    function o(){i.classList.remove('is-visible')}
    function r(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){;(t.imageUrl=e.sprites.front_default),(t.height=e.height),(t.types=e.types)}).catch(function(t){console.error(t)})}
    return(window.addEventListener('keydown',(t)=>{'Escape'===t.key&&i.classList.contains('is-visible')&&o()}),i.addEventListener('click',(t)=>{t.target===i&&o()}),{getAll:n,add:e,addListItem:function t(e){let n=document.querySelector('.list-group'),o=document.createElement('li')
    o.classList.add('list-group-item')
    let s=document.createElement('button')
    s.classList.add('btn-primary'),s.classList.add('custom-btn'),(s.innerText=e.name),s.classList.add('pokedex-button'),s.setAttribute('data-toggle','modal'),s.setAttribute('data-target','#modal'),o.appendChild(s),n.appendChild(o),s.addEventListener('click',function(){;(function t(e){r(e).then(function(){var t,n,o
    let r,s;(t=e.name),(n=e.imageUrl),(o='Pokemon Height: '+e.height),(document.querySelector('.modal-title').innerText=t),((r=document.querySelector('.modal-body')).innerText=o),(s=document.createElement('img')).setAttribute('src',n),s.setAttribute('alt','pokemon img'),r.appendChild(s),i.classList.add('is-visible')})})(e)})},loadList:function t(){return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){e({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:r,})})()
    pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})})