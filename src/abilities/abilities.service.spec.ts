import { Test, TestingModule } from '@nestjs/testing';
import { AbilitiesService } from './abilities.service';
import axios from 'axios'

describe('AbilitiesService', () => {
  let service: AbilitiesService;

  beforeEach(async () => {
    service = new AbilitiesService()
  });

  it('should be return abilities from a pokemon', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: { abilities: [{ ability: { name: 'static' } }, { ability: { name: 'lightning-rod' } }] } })
    const result = await service.findPokemonAbilities('pikachu')
    expect(axios.get).toBeCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu')
    expect(result).toStrictEqual({
      status: 200,
      abilities: [
        'lightning-rod',
        'static',
      ]
    })
  });
});
