import { tarjetas, filtrarTipos, ordenarPorNombre } from "./data.js";
import pokemon from "./data/pokemon/pokemon.js";

import data from "./data/pokemon/pokemon.js";

//Mostrar las tarjetas en la pagina
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML = tarjetas(data);

//Buscar Pokemon por nombre
const ordenarInput = document.getElementById("name");
ordenarInput.addEventListener("input", (event) => {
  const busqueda = event.target.value.toLowerCase();
  const pokemonFiltrados = data.pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda)
  );
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonFiltrados });
});

//Filtrado por tipo de Pokemon
const filtroTipo = document.getElementById("filtroTipo");
filtroTipo.addEventListener("change", function (e) {
  const pokemonSeleccionado = e.target.value;
  const pokemonHTML = filtrarTipos (data, pokemonSeleccionado);
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonHTML });
});

const ordenarSelect = document.getElementById("ordenar");
ordenarSelect.addEventListener("change", () => {
  const pokemonOrdenados = data.pokemon.slice().sort((a, b) => {
    if (ordenarSelect.value === "asc") {
      return ordenarPorNombre(a, b);
    } else if (ordenarSelect.value === "desc") {
      return ordenarPorNombre(b, a);
    } else {
      return 0;
    }
  });
  bloqueTarjetas.innerHTML = tarjetas({ pokemon: pokemonOrdenados });
});
