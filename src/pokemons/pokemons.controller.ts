import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) { }

  @Get()
  findPokemons() {
    return this.pokemonsService.findPokemons();
  }
}
