import axios from 'axios'
import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;

  const axiosResponse = [
    { name: 'slowbro', url: 'https://pokeapi.co/api/v2/pokemon/80/' },
    { name: 'magnemite', url: 'https://pokeapi.co/api/v2/pokemon/81/' },
    { name: 'magneton', url: 'https://pokeapi.co/api/v2/pokemon/82/' },
    { name: 'farfetchd', url: 'https://pokeapi.co/api/v2/pokemon/83/' },
    { name: 'doduo', url: 'https://pokeapi.co/api/v2/pokemon/84/' },
    { name: 'dodrio', url: 'https://pokeapi.co/api/v2/pokemon/85/' },
    { name: 'seel', url: 'https://pokeapi.co/api/v2/pokemon/86/' },
  ]

  beforeEach(async () => {
    service = new PokemonsService()
  });

  it('should be return all pokemons', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { results: axiosResponse } })
    const result = await service.findPokemons()
    expect(axios.get).toBeCalledWith('https://pokeapi.co/api/v2/pokemon?limit=100000')
    expect(result).toStrictEqual({
      status: 200,
      pokemons: [
        'dodrio',
        'doduo',
        'farfetchd',
        'magnemite',
        'magneton',
        'seel',
        'slowbro',
      ]
    })
  });
});
