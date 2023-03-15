// estas funciones son de ejemplo


export const tarjetas = (data) => {
  let tarjetaString = " ";
  for (const pokemon of data.pokemon){
    tarjetaString +=`
    <div class= "tarjetapokemon"> 
    <div class= "tarjeta">
    <div class= "frontTarjeta" 
    
    <img class= "imagenPokemon" src = ${pokemon.img}>
    <p> #${pokemon.num} <br> ${pokemon.name.toUpperCase()}</p>
    </div>
    </div>

    <div class= "backTarjeta" <p>#${pokemon.stats}</p>

    </div>`
    
    console.log(pokemon.stats);
    
  }

  return tarjetaString;
  

};

const  buscarPokemon = (texto)=>{
  const buscarNombre = data.filter(pokemon => pokemon.name.toLowerCase().includes(texto.toLowerCase()));
  return buscarPokemon(buscarNombre)
}



export const anotherExample = () => {
  return 'OMG';
};
