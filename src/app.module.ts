import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AbilitiesModule } from './abilities/abilities.module';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [ConfigModule.forRoot(), AbilitiesModule, PokemonsModule]
})
export class AppModule { }
