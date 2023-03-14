import { tarjetas } from './data.js';

import pokemon from './data/pokemon/pokemon.js';

import data from './data/pokemon/pokemon.js';

const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML= tarjetas(data);

bloqueTarjetas.innerHTML = tarjetas (pokemon.stats);

const ordenarInput = document.getElementById("name");
ordenarInput.addEventListener("input", (event) => {
 
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
/*
inputBuscar.addEventListener('name', () => {
  const filtroNombre = buscarPorNombre(data, inputBuscar.value.trim().substring(0, 3));

  if (filtroNombre.pokemon.length === 0) {
    alert("No se encontraron resultados");
  }

  bloqueTarjetas.innerHTML = tarjetas(filtroNombre.pokemon);
});

*/

/*const inputBuscar = document.getElementById("buscar");
const boton = document.getElementById("boton");



//Busqueda
inputBuscar.addEventListener('keyup',(e)=>{
  const texto= e.target.value;
  
  
  bloqueTarjetas.innerHTML = buscarNombre;
  console.log(texto);
})


//console.log(tarjetas, data);
*/
