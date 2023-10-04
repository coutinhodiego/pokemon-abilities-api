import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';

describe('PokemonsController', () => {
  let controller: PokemonsController;

  const pokemonsService = {
    findPokemons: jest.fn()
  }

  beforeEach(async () => {
    controller = new PokemonsController(pokemonsService)
  });

  it('should call pokemon controller', async () => {
    jest.spyOn(controller, 'findPokemons')
    await controller.findPokemons()
    expect(controller.findPokemons).toBeCalledWith();
  });
});
