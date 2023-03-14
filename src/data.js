// estas funciones son de ejemplo


export const tarjetas = (data) => {
  let tarjetaString = " ";
  for (const pokemon of data.pokemon){
    tarjetaString +=`
    <div class= "tarjetapokemon">
    <div class= "tarjeta">
    <div class= "frontTarjeta"><h1>Encabezado</h1></div>
    <div class= "backTarjeta">
    <img class= "imagenPokemon" src = ${pokemon.img}>
    <p> #${pokemon.num} <br> ${pokemon.name.toUpperCase()}</p>
    </div>
    </div>
    </div>`
    
  
  }

  return tarjetaString;
  

};





const  buscarPorNombre = (texto)=>{
  const buscarNombre = data.filter(pokemon => pokemon.name.toLowerCase().includes(texto.toLowerCase()));
  return buscarPorNombre(buscarNombre)
}



export const anotherExample = () => {
  return 'OMG';
};
