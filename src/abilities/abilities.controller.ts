import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';

@Controller('abilities')
export class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService) { }

  @Get(':pokemon')
  findPokeAbilities(@Param('pokemon') pokemon: string) {
    return this.abilitiesService.findPokemonAbilities(pokemon);
  }
}
