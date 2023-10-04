import { AbilitiesController } from './abilities.controller';

describe('AbilitiesController', () => {
  let controller: AbilitiesController;

  const abilitiesService = {
    findPokemonAbilities: jest.fn()
  }

  beforeEach(async () => {
    controller = new AbilitiesController(abilitiesService)
  });

  it('should call abilities controller', async () => {
    jest.spyOn(controller, 'findPokeAbilities')
    await controller.findPokeAbilities('pikachu')
    expect(controller.findPokeAbilities).toBeCalledWith('pikachu');
  });
});
