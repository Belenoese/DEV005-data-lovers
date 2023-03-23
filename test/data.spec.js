import {tarjetas, buscarPorNombre, filtrarTipos, ordenarPorNombre} from "../src/data.js";

const data = {
  pokemon: [
    {
      num: "001",
      name: "bulbasaur",
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113",
      },
    },
    {
      num: "002",
      name: "ivysaur",
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      stats: {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134",
      },
    },
    {
      num: "003",
      name: "venusaur",
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      stats: {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162",
      },
    },
  ],
};

describe("tarjetas", () => {
  it("is a function", () => {
    expect(typeof tarjetas).toBe("function");});
  
  it("debería devolver la data en una cadena", () => {
    expect(typeof tarjetas(data)).toBe("string");});
});

describe("buscarPorNombre", () => {
  it("is a function", () => {
    expect(typeof buscarPorNombre).toBe("function");});

  it("debería filtrar los pokemon por el texto ingresado", () => {
    expect(buscarPorNombre(data, "iv")).toStrictEqual([
      {
        num: "002",
        name: "ivysaur",
        img: "https://www.serebii.net/pokemongo/pokemon/002.png",
        type: ["grass", "poison"],
        stats: {
          "base-attack": "151",
          "base-defense": "143",
          "base-stamina": "155",
          "max-cp": "1699",
          "max-hp": "134",
        },
      },
    ]);
  });
});

describe("filtrarTipos", () => {
  it("is a function", () => {
    expect(typeof filtrarTipos).toBe("function");
  });

  it("debería filtrar los pokemons por tipo", () => {
    const data = {
      pokemon: [
        {
          name: "bulbasaur",
          type: ["grass", "poison"],
        },
        {
          name: "charmander",
          type: ["fire"],
        },
      ],
    };
    expect(filtrarTipos(data, "fire")).toStrictEqual([
      { name: "charmander", type: ["fire"] },
    ]);
  });
});

describe("ordenarPorNombre", () => {
  it("is a function", () => {
    expect(typeof ordenarPorNombre).toBe("function");
  });

  const pokemon1 = { name: "squirtle" };
  const pokemon2 = { name: "zubat" };
  const pokemon3 = { name: "charmander" };
  const pokemon4 = { name: "charmander" };
  const pokemon5 = { name: "bulbasaur" };
  const pokemon6 = { name: "metapod" };


  it("deberia ordenar los pokemon de A-Z", () => {
    expect(ordenarPorNombre({ pokemon: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6] }, "asc")).toEqual([pokemon5, pokemon3, pokemon4, pokemon6, pokemon1, pokemon2]);
  });

  it("deberia ordenar los pokemon de Z-A", () => {
    expect(ordenarPorNombre({ pokemon: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6] }, "desc")).toEqual([pokemon2, pokemon1, pokemon6, pokemon4, pokemon3, pokemon5]);
  });
});
