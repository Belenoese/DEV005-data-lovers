import { tarjetas } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const bloqueTarjetas = document.getElementById("bloqueTarjetas");
bloqueTarjetas.innerHTML= tarjetas(data);

const inputBuscar = document.getElementById("buscar");
//inputBuscar.innerHTML = tarjetaString;
//Busqueda
inputBuscar.addEventListener('keyup',(e)=>{
  const texto= e.target.value;
  console.log(texto);

})


//console.log(tarjetas, data);
