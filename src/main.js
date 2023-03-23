import { tarjetas, buscarPorNombre, filtrarTipos, ordenarPorNombre, calcular } from "./data.js";
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

const calcucarPorcentaje = document.getElementById("filtroTipo");
const calculator = document.getElementById("calculator");

calcucarPorcentaje.addEventListener("change", () => {
 const pokeFilter = data.pokemon.filter(pokemon => pokemon.type.includes(calcucarPorcentaje.value));
 const porcentaje = calcular(pokeFilter.length);
 calculator.innerHTML = "Este tipo de pokemon representa el " + porcentaje + "% del total";
})




