import { Module } from '@nestjs/common';
import { AbilitiesModule } from './abilities/abilities.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [AbilitiesModule, PokemonsModule]
})
export class AppModule { }
