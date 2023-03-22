import { buscarPorNombre, filtrarTipos, ordenarPorNombre } from '../src/data.js';

describe('buscarPorNombre', () => {
  it('is a function', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });

  it('debería filtrar los pokemon por el texto ingresado', () => {
    const data = {
      pokemon: [
        { name: 'Pikachu' },
        { name: 'Charmander' },
        { name: 'Squirtle' },
      ]
    };
    expect(buscarPorNombre(data,'ch')).toStrictEqual([{"name": "Pikachu"}, {"name": "Charmander"}]);
  });
});


describe('filtrarTipos', () => {
  it('is a function', () => {
    expect(typeof filtrarTipos).toBe('function');
  });

  it('debería filtrar los pokemons por tipo', () => {
    const data = {
      pokemon: [
        {
          name: 'bulbasaur',
          type: ['grass', 'poison'],
        },
        {
          name: 'charmander',
          type: ['fire'],
        },
      ]
    };
    expect(filtrarTipos(data, "fire")).toStrictEqual([{"name": "charmander", "type": ["fire"]}]);
  });
});


describe('ordenarPorNombre', () => {
  it('is a function', () => {
    expect(typeof ordenarPorNombre).toBe('function');
  });
  
  it('deberia ordenar los pokemon de A-Z', () => { 
    const a = { name: "bulbasaur" };
    const b = { name: "venusaur" };   
    expect(ordenarPorNombre({ pokemon: [a, b] }, "asc")).toEqual([a, b]);
  });
});
