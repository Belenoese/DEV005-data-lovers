import { tarjetas, filtrarTipos } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

import data from './data/pokemon/pokemon.js';

//Mostrar las tarjetas en la pagina
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML= tarjetas(data);

//Buscar Pokemon por nombre
const ordenarInput = document.getElementById("name");
ordenarInput.addEventListener("input", (event) => {
 
  const busqueda = event.target.value.toLowerCase();
  const pokemonFiltrados = data.pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda));
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonFiltrados});  
});

//Filtrado por tipo de Pokemon
const filtroTipo = document.getElementById("filtroTipo");
filtroTipo.addEventListener('change', function(e) {

  const tipoSeleccionado = e.target.value;
  const pokemonHTML = data.pokemon.filter((pokemon) =>
    pokemon.type.includes(tipoSeleccionado));
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonHTML });
  //console.log('Cambio el tipo por: ',pokemonHTML);
  
});

