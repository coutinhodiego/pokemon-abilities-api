import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonsService {
  async findPokemons() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000'
      let pokemons = await axios.get(url)
      pokemons = pokemons.data.results.map(pokemon => pokemon.name).sort()

      return { status: 200, pokemons }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
