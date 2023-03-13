import { tarjetas } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML= tarjetas(data);

inputBuscar.addEventListener('name', () => {
  const filtroNombre = buscarPorNombre(data, inputBuscar.value.trim().substring(0, 3));

  if (filtroNombre.pokemon.length === 0) {
    alert("No se encontraron resultados");
  }

  bloqueTarjetas.innerHTML = tarjetas(filtroNombre.pokemon);
});


/*const inputBuscar = document.getElementById("buscar");
const boton = document.getElementById("boton");



//Busqueda
inputBuscar.addEventListener('keyup',(e)=>{
  const texto= e.target.value;
  
  
  bloqueTarjetas.innerHTML = buscarNombre;
  console.log(texto);
})


//console.log(tarjetas, data);/*
