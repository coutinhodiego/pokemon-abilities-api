import { Module } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { AbilitiesController } from './abilities.controller';

@Module({
  controllers: [AbilitiesController],
  providers: [AbilitiesService],
  imports: [],
})
export class AbilitiesModule { }
