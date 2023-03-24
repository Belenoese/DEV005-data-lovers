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

//se declaran dos variables para asociar el evento change con el id de html
const calcularPorcentaje = document.getElementById("filtroTipo");
const calculator = document.getElementById("calculator");

calcularPorcentaje.addEventListener("change", () => {
  //se filtra los pokemon por tipos y se almacena en la variable 
  const pokeFilter = data.pokemon.filter(pokemon => pokemon.type.includes(calcularPorcentaje.value));
  // esta variable almacena el total de elementos de array
  const porcentaje = calcular(pokeFilter.length);
  //eventos del DOM imprime el resultado en consola
  calculator.innerHTML = "Los pokemon de tipo " + calcularPorcentaje.value + " representa el " + porcentaje + "% del total";
});




