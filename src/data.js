export const tarjetas = (data) => {
  let tarjetaString = " ";
  for (const pokemon of data.pokemon) {
    tarjetaString += `
    <div class= "tarjetapokemon">
    <div class= "tarjeta">
    <div class= "frontTarjeta">   
    <img class= "imagenPokemon" src = ${pokemon.img}>
    <p> #${pokemon.num} <br> ${pokemon.name.toUpperCase()} <br>Tipo: ${
      pokemon.type
    }</p>
    </div>
    <div class= "backTarjeta">
    <p> Ataque: <br> ${pokemon.stats["base-attack"]} 
    <br> Defensa: <br> ${pokemon.stats["base-defense"]} 
    <br> Resistencia: <br> ${pokemon.stats["base-stamina"]}
    <br> Max-cp: <br> ${pokemon.stats["max-cp"]}
    <br> Max-hp: <br> ${pokemon.stats["base-defense"]}</p>
    </div>  
    </div> 
    </div>`;
    //console.log(pokemon.stats);
  }

  return tarjetaString;
};

/*export const filtrarTipos = ( data , tipo ) => {
  const datosFiltrada = data.pokemon.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return { pokemon : datosFiltrada };
 
};*/

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.type.includes(tipo));
  return dataFiltrada;
}

//console.log (filtrarTipos);

export function ordenarPorNombre(pokemonA, pokemonB) {
  if (pokemonA.name < pokemonB.name) {
    return -1;
  } else if (pokemonA.name > pokemonB.name) {
    return 1;
  } else {
    return 0;
  }
}
