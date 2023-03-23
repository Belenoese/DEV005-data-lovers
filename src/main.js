import { tarjetas, buscarPorNombre, filtrarTipos, ordenarPorNombre } from "./data.js";
/*import pokemon from "./data/pokemon/pokemon.js";*/

import data from "./data/pokemon/pokemon.js";

//Mostrar las tarjetas en la pagina
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data);

//Buscar Pokemon por nombre
const ordenarInput = document.getElementById("name");
ordenarInput.addEventListener("input", (e) => {
  const busqueda = e.target.value.toLowerCase();
  const pokemonFiltrados = buscarPorNombre(data, busqueda);
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonFiltrados });
});

//Filtrado por tipo de Pokemon
const filtroTipo = document.getElementById("filtroTipo");
const calculator = document.getElementById("calculator")
filtroTipo.addEventListener("change", (e) => {
  const pokemonSeleccionado = e.target.value;
  const pokemonHTML = filtrarTipos (data, pokemonSeleccionado);
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonHTML });
 
  
});


//Ordenar de A-Z Y Z-A
const ordenarSelect = document.getElementById("ordenar");
ordenarSelect.addEventListener("change", (e) => {
  const ordenados = e.target.value;
  const ordenasc =ordenarPorNombre (data, ordenados)
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: ordenasc });
});



