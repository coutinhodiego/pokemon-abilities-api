import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class AbilitiesService {

  async findPokemonAbilities(pokemon: string) {
    const pokeName = pokemon
    try {
      const url = 'https://pokeapi.co/api/v2/'
      const parameter = `pokemon/${pokeName}`

      const pokemon = await axios.get(`${url}${parameter}`)
      const abilities = pokemon.data.abilities.map(item => item.ability.name)
      return { status: 200, abilities: abilities.sort() }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
