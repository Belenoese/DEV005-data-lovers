// estas funciones son de ejemplo


export const tarjetas = (data) => {
  let tarjetaString = " ";
  for (const pokemon of data.pokemon){
    tarjetaString +=`
    <div class= "tarjetapokemon"> 
    <div class= "tarjeta">
    <div class= "frontTarjeta"> <h1> <p> #${pokemon.stats}</h1> </p> </div>
    <div class= "backTarjeta">
    <img class= "imagenPokemon" src = ${pokemon.img}>
    <p> #${pokemon.num} <br> ${pokemon.name.toUpperCase()} <br>Tipo: ${pokemon.type}</p>
    </div>
    </div>
    </div>`
    
    
  }

  return tarjetaString;
  

};





export const anotherExample = () => {
  return 'OMG';
};
