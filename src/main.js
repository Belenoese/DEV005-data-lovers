import { tarjetas } from './data.js';

import pokemon from './data/pokemon/pokemon.js';

import data from './data/pokemon/pokemon.js';

const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML= tarjetas(data);

const ordenarInput = document.getElementById("name");
ordenarInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const busqueda = event.target.value.toLowerCase();
        const pokemonFiltrados = data.pokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(busqueda));

        bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonFiltrados});
        console.log(bloqueTarjetas);
    }
});


const filtroTipo=document.getElementById('filtroTipo');
filtroTipo.addEventListener('change', function(e){
  console.log('Cabio el tipo por: ',e.target.value);
})

//console.log(tarjetas, data);

