export const tarjetas = (data) => {
  let tarjetaString = " ";
  for (const pokemon of data.pokemon) {
    tarjetaString += `
    <div class= "tarjetapokemon">
    <div class= "tarjeta">
    <div class= "frontTarjeta">   
    <img class= "imagenPokemon" src = ${pokemon.img}>
    <p> #${pokemon.num} <br> ${pokemon.name.toUpperCase()} <br>Tipo: ${pokemon.type}</p>
    </div>
    <div class= "backTarjeta">
    <p> Ataque: <br> ${pokemon.stats["base-attack"]} 
    <br> Defensa: <br> ${pokemon.stats["base-defense"]} 
    <br> Resistencia: <br> ${pokemon.stats["base-stamina"]}
    <br> Max-cp: <br> ${pokemon.stats["max-cp"]}
    <br> Max-hp: <br> ${pokemon.stats["max-hp"]}</p>
    </div>  
    </div> 
    </div>`;
    //console.log(pokemon.stats);
  }

  return tarjetaString;
};

export const buscarPorNombre = (data, busqueda) => {
  return data.pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );
};

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.pokemon.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return dataFiltrada;
};

//console.log (filtrarTipos);

export const ordenarPorNombre = (data, orden) => {
  const ordenados = data.pokemon.sort((a, b) => {
    if (a.name > b.name) {
      return orden === "asc" ? 1 : -1;
    } else 
      return orden === "asc" ? -1 : 1;
  });
  return ordenados;
};

